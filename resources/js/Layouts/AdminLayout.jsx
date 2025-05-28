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
} from "lucide-react";
import MessageComposer from "@/Pages/Authenticated/MessageComposer";
import RecipientSelector from "@/Pages/Authenticated/RecipientSelector";
import AnalyticsDashboard from "@/Pages/Authenticated/AnalyticsDashboard";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
import { useRecipientStore } from "@/Pages/Authenticated/RecipientSelector";

import { useMessageStore } from "@/Pages/Authenticated/MessageComposer";

import { create } from "zustand";

export const useTabStore = create((set) => ({
    activeTab: "",

    setActiveTab: (activeTab) => set({ activeTab }),
}));

const AdminLayout = ({ tabActive = "compose", templates, children }) => {
    //const [activeTab, setActiveTab] = useState(tabActive);
    const { recipients } = useRecipientStore();

    const { activeTab, setActiveTab } = useTabStore();

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
                                        setActiveTab("compose");
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
                                        setActiveTab("recipients");
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
                                    onClick={() => setActiveTab("schedule")}
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
                                    onClick={() => setActiveTab("analytics")}
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
                                        setActiveTab("configuration")
                                    }
                                >
                                    <Settings className="mr-2 h-4 w-4" />
                                    {/* <BarChart2 className="mr-2 h-4 w-4" /> */}
                                    Configuration
                                </Button>
                            </div>
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
                                    setActiveTab("accsettings");
                                }}
                            >
                                <UserCog2 className="mr-2 h-4 w-4" />
                                Account Settings
                            </Button>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-6 overflow-auto">
                    <div className="container mx-auto">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
