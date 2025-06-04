import { Input } from "@/Components/frontend/ui/input";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import PrintErrors from "@/Components/PrintErrors";
import { router, useForm } from "@inertiajs/react";

export default function Configuration({ config }) {
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
        port: config.port ?? "",
        user: config.username ?? "",
        pw: config.password ?? "",
    });

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
    return (
        <form onSubmit={handleSubmit} className=" xl:w-3/4">
            <PrintErrors errors={errors} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
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
            <PrimaryButton className="mt-3" disabled={processing}>
                Save
            </PrimaryButton>
        </form>
    );
}
