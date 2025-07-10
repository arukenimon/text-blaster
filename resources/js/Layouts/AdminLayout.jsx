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
    UserCog,
    UserCog2,
    Building2,
} from "lucide-react";
import MessageComposer from "@/Pages/Authenticated/MessageComposer";
import RecipientSelector from "@/Pages/Authenticated/RecipientSelector";
import AnalyticsDashboard from "@/Pages/Authenticated/AnalyticsDashboard";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useRecipientStore } from "@/Pages/Authenticated/RecipientSelector";

import { useMessageStore } from "@/Pages/Authenticated/MessageComposer";
import Configuration from "@/Pages/Authenticated/Configuration";

import { create } from "zustand";
import Sidebar from "./Admin/Sidebar";

export const useTabStore = create((set) => ({
    activeTab: "",

    setActiveTab: (activeTab) => set({ activeTab }),
}));
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/frontend/ui/input";
import PrintErrors from "@/Components/PrintErrors";
import PrimaryButton from "@/Components/PrimaryButton";
const AdminLayout = ({ tabActive = "compose", templates, children }) => {
    //const [activeTab, setActiveTab] = useState(tabActive);
    const { recipients } = useRecipientStore();

    const { activeTab, setActiveTab } = useTabStore();

    useEffect(() => {
        setActiveTab(tabActive);
    }, [tabActive]);

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

    const sendMessage = () => {
        post(route("admin.message.send"), {
            onSuccess: () => {
                alert("success");
            },
            onError: (e) => {
                console.log(e);
                alert("error");
            },
        });
    };

    const [isLoading, setIsLoading] = useState(false);

    const { user } = usePage().props.auth;

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
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="border-b bg-card">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <div className="font-bold text-xl flex items-center">
                            <span className="text-primary">Auto</span>
                            <span>Blitz</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5" />
                        </Button>
                        <Avatar>
                            <AvatarImage
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
                                alt="User"
                            />
                            <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <Link method="POST" href={route("logout")}>
                            Logout
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="hidden md:flex w-64 flex-col border-r bg-card p-4">
                    <div className="space-y-4">
                        <div className="py-2">
                            <h2 className="text-lg font-semibold mb-2">Menu</h2>
                            <div className="space-y-1">
                                <Button
                                    variant={
                                        activeTab === "compose"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={() => {
                                        router.visit(
                                            route("admin.compose.index")
                                        );
                                        // setActiveTab("compose");
                                    }}
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Compose Message
                                </Button>
                                <Button
                                    variant={
                                        activeTab === "recipients"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={() => {
                                        router.visit(
                                            route("admin.recipients.index")
                                        );
                                        // setActiveTab("recipients");
                                        // router.visit(route("admin.recipients"));
                                    }}
                                >
                                    <Users className="mr-2 h-4 w-4" />
                                    Select Recipients
                                </Button>
                                <Button
                                    variant={
                                        activeTab === "schedule"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={(e) =>
                                        router.visit(
                                            route("admin.schedule.index")
                                        )
                                    }
                                >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Schedule
                                </Button>
                                <Button
                                    variant={
                                        activeTab === "analytics"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={() =>
                                        router.visit(
                                            route("admin.analytics.index")
                                        )
                                    }
                                >
                                    <BarChart2 className="mr-2 h-4 w-4" />
                                    Analytics
                                </Button>
                                <Button
                                    variant={
                                        activeTab === "configuration"
                                            ? "secondary"
                                            : "ghost"
                                    }
                                    className="w-full justify-start"
                                    onClick={() =>
                                        router.visit(
                                            route("admin.configuration.index")
                                        )
                                    }
                                >
                                    <Settings className="mr-2 h-4 w-4" />
                                    {/* <BarChart2 className="mr-2 h-4 w-4" /> */}
                                    Configuration
                                </Button>
                            </div>
                            <h2 className="text-lg font-semibold mb-2">
                                Events
                            </h2>
                            <Button
                                variant={
                                    activeTab === "campaigns"
                                        ? "secondary"
                                        : "ghost"
                                }
                                className="w-full justify-start"
                                onClick={() => {
                                    // setActiveTab("campaigns");
                                    router.visit(
                                        route("admin.campaigns.index")
                                    );
                                }}
                            >
                                <Building2 className="mr-2 h-4 w-4" />
                                {/* <BarChart2 className="mr-2 h-4 w-4" /> */}
                                Campaigns
                            </Button>
                            <h2 className="text-lg font-semibold mb-2">
                                Settings
                            </h2>
                            <Button
                                variant={
                                    activeTab === "accsettings"
                                        ? "secondary"
                                        : "ghost"
                                }
                                className="w-full justify-start"
                                onClick={() => {
                                    router.visit(
                                        route("admin.accsettings.index")
                                    );
                                }}
                            >
                                <UserCog2 className="mr-2 h-4 w-4" />
                                Account Settings
                            </Button>

                            {/* <Sidebar activeTab={activeTab} /> */}
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-6 overflow-auto">
                    {/* <div className="container mx-auto">{children}</div> */}

                    <h1 className="text-3xl font-bold mb-6">Text Blaster</h1>

                    <Card className="mb-6">
                        <CardContent className="p-6">
                            <Tabs
                                value={activeTab}
                                // onValueChange={setActiveTab}
                                // onClick={(e) => console.log("clicked:", e)}
                                className="w-full"
                            >
                                <TabsList className="grid grid-cols-5 mb-6">
                                    <TabsTrigger
                                        value="compose"
                                        onClick={
                                            (e) =>
                                                router.visit(
                                                    route("admin.compose.index")
                                                )
                                            //alert("compose clicked!")
                                        }
                                    >
                                        Compose
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="recipients"
                                        onClick={
                                            (e) =>
                                                router.visit(
                                                    route(
                                                        "admin.recipients.index"
                                                    )
                                                )
                                            //alert("Recipients clicked!")
                                        }
                                    >
                                        Recipients
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="schedule"
                                        onClick={
                                            (e) =>
                                                router.visit(
                                                    route(
                                                        "admin.schedule.index"
                                                    )
                                                )
                                            //alert("Recipients clicked!")
                                        }
                                    >
                                        Schedule
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="analytics"
                                        onClick={
                                            (e) =>
                                                router.visit(
                                                    route(
                                                        "admin.analytics.index"
                                                    )
                                                )
                                            //alert("Recipients clicked!")
                                        }
                                    >
                                        Analytics
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="configuration"
                                        onClick={
                                            (e) =>
                                                router.visit(
                                                    route(
                                                        "admin.configuration.index"
                                                    )
                                                )
                                            //alert("Recipients clicked!")
                                        }
                                    >
                                        Configuration
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent
                                    value={activeTab}
                                    className="space-y-4"
                                >
                                    <div className="container mx-auto">
                                        {children}
                                    </div>
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
                                        <span className="font-medium">
                                            {/* {messages.length} */}0
                                        </span>
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
                                        <span className="mr-2">+</span> New
                                        Template
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                    >
                                        <span className="mr-2">+</span> Import
                                        Contacts
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                    >
                                        <span className="mr-2">↓</span> Export
                                        Reports
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
