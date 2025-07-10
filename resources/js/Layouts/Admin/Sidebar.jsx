import { Button } from "@/Components/frontend/ui/button";
import {
    BarChart2,
    Calendar,
    MessageSquare,
    Settings,
    Users,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar({ activeTab }) {
    const mockItems = useState([
        {
            tabName: "compose",
            icon: <MessageSquare className="mr-2 h-4 w-4" />,
            text: "Compose Message",
        },
        {
            tabName: "recipients",
            icon: <Users className="mr-2 h-4 w-4" />,
            text: "Select Recipients",
        },
        {
            tabName: "schedule",
            icon: <Calendar className="mr-2 h-4 w-4" />,
            text: "Schedule",
        },
        {
            tabName: "analytics",
            icon: <BarChart2 className="mr-2 h-4 w-4" />,
            text: "Analytics",
        },
        {
            tabName: "configuration",
            icon: <Settings className="mr-2 h-4 w-4" />,
            text: "Configuration",
        },
    ]);

    return (
        <>
            {mockItems.map((nav_) => (
                <Button
                    key={nav_.tabName}
                    variant={activeTab == nav_.tabName ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                        setActiveTab(nav_.tabName);
                    }}
                >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {nav_.text}
                </Button>
            ))}
        </>
    );
}
