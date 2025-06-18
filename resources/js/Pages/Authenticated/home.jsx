import React, { useState, useEffect } from "react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/Components/frontend/ui/tabs";
import { Card, CardContent } from "@/Components/frontend/ui/card";
import { Button } from "@/Components/frontend/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/frontend/ui/avatar";
import {
    Bell,
    BarChart2,
    Settings,
    MessageSquare,
    Users,
    Calendar,
} from "lucide-react";
import MessageComposer from "./MessageComposer";
import RecipientSelector from "./RecipientSelector";
import AnalyticsDashboard from "./AnalyticsDashboard";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useRecipientStore } from "./RecipientSelector";

import { useMessageStore } from "./MessageComposer";

import AdminLayout from "@/Layouts/AdminLayout";

import { useTabStore } from "@/Layouts/AdminLayout";

import Client from "android-sms-gateway";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/frontend/ui/input";
import Configuration from "./Configuration";
import PrimaryButton from "@/Components/PrimaryButton";
import PrintErrors from "@/Components/PrintErrors";

const Home = ({
    tabActive = "compose",
    templates,
    allrecipients,
    allsegments = [],
    config,
    cloudconfig,
}) => {
    // useEffect(() => {
    //     console.log("allrecipsxx:", allrecipients);
    // }, [allrecipients]);
    //const [activeTab, setActiveTab] = useState(tabActive);
    const { activeTab, setActiveTab } = useTabStore();
    const { recipients } = useRecipientStore();

    const { message, template_ } = useMessageStore();

    const { data, setData, post, recentlySuccessful, errors } = useForm({
        recipients: recipients,
        message: "",
    });

    useEffect(() => {
        //console.log(recipients, message, "template:", template);
        //console.log("template:", template);
        setData("message", message);
        setData("recipients", recipients);

        if (recipients) {
            console.log("recipients:", recipients);
        }
    }, [recipients, message]);

    const { flash } = usePage().props;

    const enhanced_toast = (title, message, icon) => {
        toast(
            <div className="flex">
                <div className="ml-4">
                    <p className="font-bold">{title}</p>
                    <p>{message}</p>
                </div>
            </div>,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        );
    };

    useEffect(() => {
        if (flash) {
            window.alert_toast(flash.title, flash.message, flash.icon);
        }
    }, [flash]);

    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post("/services/send-sms", {
                message: message,
                phoneNumbers: recipients.map((r) => r.phone), //["+639273630590"],
            });
            if (response.data.flash) {
                const { icon, message, title } = response.data.flash;
                alert_toast(title, message, icon);
            }
            console.log(response);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to send message");
        } finally {
            setIsLoading(false);
        }
    };

    // Example of an HTTP client based on fetch
    const httpFetchClient = {
        get: async (url, headers) => {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Basic " + btoa("mjgwapo" + ":" + "ocWFMPKc"),
                },
            });

            return response.json();
        },
        post: async (url, body, headers) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Basic " + btoa("mjgwapo" + ":" + "ocWFMPKc"),
                },
                body: JSON.stringify(body),
            });

            return response.json();
        },
        delete: async (url, headers) => {
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Basic " + btoa("mjgwapo" + ":" + "ocWFMPKc"),
                },
            });

            return response.json();
        },
    };

    // Initialize the client with your API credentials
    const apiClient = new Client("mjgwapo", "ocWFMPKc", httpFetchClient);

    const { user } = usePage().props.auth;

    const {
        data: dataPw,
        setData: setDataPw,
        post: postPw,
        recentlySuccessful: recentSuccessPw,
        errors: errorsPw,
        processing: proccessPw,
        put: putPw,
        clearErrors: clearErrorsPw,
        reset: resetPw,
    } = useForm({
        //email: user?.email,
        current_password: "",
        password: "",
        confirmpw: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        putPw(route("admin.settings.password.update"), {
            onSuccess: () => {
                clearErrorsPw();
                resetPw();
            },
            onFinish: () => {
                router.reload({
                    only: ["flash", "auth"],
                });
            },
        });
    };

    const {
        data: dataEmail,
        setData: setDataEmail,
        post: postEmail,
        recentlySuccessful: recentSuccessEmail,
        errors: errorsEmail,
        processing: proccessEmail,
        put: putEmail,
    } = useForm({
        email: user?.email,
        //password: user?.password,
    });

    const updateEmail = (e) => {
        e.preventDefault();

        putEmail(route("admin.settings.email.update"), {
            onFinish: () => {
                router.reload({
                    only: ["flash", "auth"],
                });
            },
        });
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">Text Blaster</h1>
            <Card className="mb-6">
                <CardContent className="p-6">
                    <Tabs
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full"
                    >
                        <TabsList className="grid grid-cols-5 mb-6">
                            <TabsTrigger value="compose">Compose</TabsTrigger>
                            <TabsTrigger value="recipients">
                                Recipients
                            </TabsTrigger>
                            <TabsTrigger value="schedule">Schedule</TabsTrigger>
                            <TabsTrigger value="analytics">
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger value="configuration">
                                Configuration
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="compose" className="space-y-4">
                            <MessageComposer
                                onNext={() => setActiveTab("recipients")}
                                messagetemps={templates}
                            />
                        </TabsContent>

                        <TabsContent value="recipients" className="space-y-4">
                            <RecipientSelector
                                onBack={() => setActiveTab("compose")}
                                onNext={() => setActiveTab("schedule")}
                                allrecipients={allrecipients}
                                allsegments={allsegments}
                            />
                        </TabsContent>

                        <TabsContent value="schedule" className="space-y-4">
                            <div className="flex flex-col space-y-4">
                                <h2 className="text-xl font-semibold">
                                    Schedule Your Message
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                id="send-now"
                                                name="schedule"
                                                defaultChecked
                                            />
                                            <label htmlFor="send-now">
                                                Send Immediately
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                id="schedule-later"
                                                name="schedule"
                                                disabled
                                            />
                                            <label htmlFor="schedule-later">
                                                Schedule for Later
                                                <small className=" text-black-50">
                                                    {" (On Development...)"}
                                                </small>
                                            </label>
                                        </div>
                                        <div className="pt-4">
                                            <label className="block text-sm font-medium mb-1">
                                                Date and Time
                                            </label>
                                            <input
                                                type="datetime-local"
                                                className="w-full p-2 border rounded-md"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-muted/50 p-4 rounded-md">
                                        <h3 className="font-medium mb-2">
                                            Message Summary
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <p>
                                                <strong>Template:</strong>{" "}
                                                {template_}
                                            </p>
                                            <p>
                                                <strong>Recipients:</strong>{" "}
                                                {recipients.length} contacts
                                            </p>
                                            {/* <p>
                                                <strong>Estimated Cost:</strong>
                                                {" ₱"}
                                                {recipients
                                                    ? (
                                                          recipients.length *
                                                          2.5
                                                      ).toFixed(2)
                                                    : 0}
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-6">
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setActiveTab("recipients")
                                        }
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            // setActiveTab(
                                            //     "analytics"
                                            // )
                                            {
                                                sendMessage();
                                            }
                                        }
                                        disabled={isLoading}
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="analytics" className="space-y-4">
                            <AnalyticsDashboard />
                        </TabsContent>

                        <TabsContent
                            value="configuration"
                            className="space-y-4"
                        >
                            <Configuration
                                config={config}
                                cloudconfig={cloudconfig}
                            />
                        </TabsContent>
                        <TabsContent
                            value="accsettings"
                            className="space-y-4 w-1/2"
                        >
                            <PrintErrors errors={errorsEmail} />
                            <h3>Change your email here</h3>

                            <div>
                                <InputLabel value={"Email"} />
                                <Input
                                    value={dataEmail.email}
                                    className=" w-full"
                                    onChange={(e) =>
                                        setDataEmail("email", e.target.value)
                                    }
                                />
                            </div>
                            <PrimaryButton
                                disabled={proccessEmail}
                                onClick={updateEmail}
                            >
                                Save New Email
                            </PrimaryButton>

                            <div>
                                <PrintErrors errors={errorsPw} />
                                <div className=" grid grid-cols-2 gap-4">
                                    <div>
                                        <InputLabel
                                            value={"Current Password"}
                                        />
                                        <Input
                                            value={dataPw.current_password}
                                            className=" w-full"
                                            type="password"
                                            onChange={(e) =>
                                                setDataPw(
                                                    "current_password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <InputLabel value={"New Password"} />
                                        <Input
                                            value={dataPw.password}
                                            className=" w-full"
                                            type="password"
                                            onChange={(e) =>
                                                setDataPw(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <InputLabel value={"Confirm Password"} />
                                    <Input
                                        value={dataPw.confirmpw}
                                        className=" w-full"
                                        type="password"
                                        onChange={(e) =>
                                            setDataPw(
                                                "confirmpw",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                            <PrimaryButton
                                disabled={proccessPw}
                                onClick={updatePassword}
                            >
                                Save new password
                            </PrimaryButton>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Recent Campaigns
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Summer Sale Promo</span>
                                <span className="text-green-500 text-sm">
                                    Sent
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Service Reminder</span>
                                <span className="text-amber-500 text-sm">
                                    Scheduled
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>New Inventory Alert</span>
                                <span className="text-gray-500 text-sm">
                                    Draft
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Message Stats
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>Messages Sent (MTD)</span>
                                <span className="font-medium">0</span>
                            </div>
                            {/* <div className="flex justify-between items-center">
                                <span>Avg. Response Rate</span>
                                <span className="font-medium">0%</span>
                            </div> */}
                            <div className="flex justify-between items-center">
                                <span>Active Campaigns</span>
                                <span className="font-medium">0</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">
                            Quick Actions
                        </h3>
                        <div className="space-y-2">
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <span className="mr-2">+</span> New Template
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <span className="mr-2">+</span> Import Contacts
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                            >
                                <span className="mr-2">↓</span> Export Reports
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
};

export default Home;
