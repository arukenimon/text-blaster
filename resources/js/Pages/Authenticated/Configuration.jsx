import { Input } from "@/Components/frontend/ui/input";
import {
    Tabs,
    TabsContent,
    TabsTrigger,
    TabsList,
} from "@/Components/frontend/ui/tabs";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import PrintErrors from "@/Components/PrintErrors";
import { router, useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import {  } from "@radix-ui/react-tabs";

export default function Configuration({ config, cloudconfig }) {
    const [activeTab, setActiveTab] = useState("local");

    // useEffect(() => {
    //     console.log(cloudconfig, config);
    // }, [cloudconfig]);

    const {
        data,
        setData,
        post,
        processing,
        recentlySuccessful,
        errors,
        reset,
        clearErrors,
    } = useForm({
        localaddr: config.localaddress ?? "",
        port: config.port,
        user:
            activeTab == "local"
                ? config?.username ?? ""
                : activeTab == "cloud"
                ? cloudconfig?.username ?? ""
                : "",
        pw:
            activeTab == "local"
                ? config?.password ?? ""
                : activeTab == "cloud"
                ? cloudconfig?.password ?? ""
                : "",
        type: activeTab,

        simslot: activeTab == "local" ? config?.simslot : "",
    });

    useEffect(() => {
        setData({
            ...data,
            user:
                activeTab == "local"
                    ? config.username ?? ""
                    : activeTab == "cloud"
                    ? cloudconfig?.username ?? ""
                    : "",
            pw:
                activeTab == "local"
                    ? config.password ?? ""
                    : activeTab == "cloud"
                    ? cloudconfig?.password ?? ""
                    : "",
            type: activeTab == "local" ? "local" : "cloud",

            simslot: activeTab == "local" ? config?.simslot : "",
        });
    }, [activeTab]);

    const handleChange = (e) => {
        e.preventDefault();
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.settings.saveconfig"), {
            onFinish: () => {
                router.reload({
                    only: ["flash"],
                });
            },
        });
        //alert("asd");
    };

    const tabChange = (e) => {
        setActiveTab(e);

        clearErrors();
    };

    const {
        data: dataDataWebHook,
        setData: setDataWebHook,
        recentlySuccessful: RsuccessDataWebHook,
        processing: processDataWebHook,
        errors: errorsDataWebHook,
        post: postDataWebHook,
    } = useForm({});

    const setupWebhook = (e) => {
        e.preventDefault();

        //console.log("resp:", resp);
        postDataWebHook(route("admin.settings.webhook.setup"), {
            onFinish: () => {
                router.reload({
                    only: ["flash"],
                });
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className=" xl:w-3/4">
            <Tabs
                value={activeTab}
                onValueChange={tabChange}
                className=" w-full"
            >
                <TabsList>
                    <TabsTrigger value="local">Local Host</TabsTrigger>
                    <TabsTrigger value="cloud">Server</TabsTrigger>
                </TabsList>

                <TabsContent value="local">
                    <PrintErrors errors={errors} />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
                        <div>
                            <InputLabel value="Local Address" />
                            <Input
                                value={data.localaddr}
                                name="localaddr"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <InputLabel value="Port" />
                            <Input
                                value={data.port}
                                name="port"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <InputLabel value="Sim Slot" />
                            <Input
                                type="number"
                                step="1"
                                value={data.simslot}
                                name="simslot"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                        <div>
                            <InputLabel value="Username" />
                            <Input
                                value={data.user}
                                name="user"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <InputLabel value="Password" />
                            <Input
                                type="password"
                                value={data.pw}
                                name="pw"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="cloud">
                    <PrintErrors errors={errors} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
                        <div>
                            <InputLabel value="Username" />
                            <Input
                                name="user"
                                onChange={handleChange}
                                value={data.user}
                            />
                        </div>
                        <div>
                            <InputLabel value="Password" />
                            <Input
                                name="pw"
                                onChange={handleChange}
                                value={data.pw}
                                type="password"
                            />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
            <PrimaryButton className="mt-3" disabled={processing}>
                Save
            </PrimaryButton>
            <PrimaryButton onClick={setupWebhook}>Setup Webhook</PrimaryButton>
        </form>
    );
}
