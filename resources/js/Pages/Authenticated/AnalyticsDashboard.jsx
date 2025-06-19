import React, { useEffect, useState, useMemo } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/frontend/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/Components/frontend/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/frontend/ui/select";
import { Button } from "@/Components/frontend/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/frontend/ui/table";
import {
    BarChart,
    LineChart,
    PieChart,
    Download,
    Calendar,
    RefreshCcw,
} from "lucide-react";
import { Progress } from "@/Components/frontend/ui/progress";

import DataTable from "react-data-table-component";
import PrimaryButton from "@/Components/PrimaryButton";

import moment from "moment";
import { router } from "@inertiajs/react";
const columns = [
    {
        name: "From",
        selector: (row) => row.fromnum,
        sortable: true,
    },
    {
        name: "To",
        selector: (row) => row.tonum,
        sortable: true,
    },
    {
        name: "Message",
        selector: (row) => row.message,
        sortable: true,
        style: { "white-space": "unset" },
    },
    {
        name: "Date",
        selector: (row) =>
            moment(row.created_at, "YYYY-MM-DD HH:mm:ss").format(
                "MMM Do YYYY, h:mm a"
            ),
        sortable: true,
    },
];

export default function AnalyticsDashboard({
    deliveryRate = 0, //98.7,
    responseRate = 0, //14.2,
    engagementRate = 0, //8.5,

    messages,
}) {
    const [DATA, setDATA] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchWebhookData() {
        setIsLoading(true);
        try {
            router.reload({
                only: ["messages"],
            });
            // const response = await fetch(
            //     route("admin.settings.webhook.gather")
            // );

            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            // const data = await response.json();
            // const RESP = data.data.map((d) => JSON.parse(d.content));
            // //console.log("Webhook data:", RESP);
            // setDATA(RESP);
            //return data;
        } catch (error) {
            console.error("Failed to fetch webhook data:", error);
            return null;
            // Handle error in UI
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchWebhookData();
    }, []);

    useEffect(() => {
        if (DATA) {
            //console.log("data::::", DATA);
        }
    }, [DATA]);

    return (
        <div className="bg-background p-6 w-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
                <div className="flex items-center gap-4">
                    <Select defaultValue="30days">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select time period" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7days">Last 7 days</SelectItem>
                            <SelectItem value="30days">Last 30 days</SelectItem>
                            <SelectItem value="90days">Last 90 days</SelectItem>
                            <SelectItem value="year">Last year</SelectItem>
                            <SelectItem value="custom">Custom range</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        Date Range
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export Report
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Delivery Rate
                        </CardTitle>
                        <CardDescription className="text-2xl font-bold">
                            {deliveryRate}%
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={deliveryRate} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            Messages successfully delivered to recipients
                        </p>
                    </CardContent>
                </Card>
                {/* <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Response Rate
                        </CardTitle>
                        <CardDescription className="text-2xl font-bold">
                            {responseRate}%
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={responseRate} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            Recipients who responded to messages
                        </p>
                    </CardContent>
                </Card> */}
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                            Engagement Rate
                        </CardTitle>
                        <CardDescription className="text-2xl font-bold">
                            {engagementRate}%
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress value={engagementRate} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            Recipients who clicked on links or offers
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="overview" className="mb-6">
                <TabsList>
                    <TabsTrigger value="overview">
                        <BarChart className="h-4 w-4 mr-2" />
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="delivery">
                        <LineChart className="h-4 w-4 mr-2" />
                        Delivery Metrics
                    </TabsTrigger>
                    <TabsTrigger value="responses">
                        <PieChart className="h-4 w-4 mr-2" />
                        Response Analysis
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Campaign Performance Overview</CardTitle>
                            <CardDescription>
                                Summary of all text blast campaigns
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                                <p className="text-muted-foreground">
                                    Bar chart visualization would appear here
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="delivery" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Delivery Metrics Over Time</CardTitle>
                            <CardDescription>
                                Tracking message delivery success rates
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                                <p className="text-muted-foreground">
                                    Line chart visualization would appear here
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="responses" className="mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Response Analysis</CardTitle>
                            <CardDescription>
                                Breakdown of customer response types
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                                <p className="text-muted-foreground">
                                    Pie chart visualization would appear here
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Deliveries</CardTitle>
                    <CardDescription>
                        Overview of your text blast messages
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className=" float-right">
                        <PrimaryButton
                            disabled={isLoading}
                            onClick={(e) => {
                                e.preventDefault();
                                fetchWebhookData();
                            }}
                        >
                            <RefreshCcw className=" mr-2" />
                            Refresh
                        </PrimaryButton>
                    </div>
                    <DataTable
                        columns={columns}
                        noWrap={false}
                        data={messages}
                    />
                    {/* <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Campaign Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Recipients</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {campaigns.map((campaign) => (
                                <TableRow key={campaign.id}>
                                    <TableCell className="font-medium">
                                        {campaign.name}
                                    </TableCell>
                                    <TableCell>{campaign.date}</TableCell>
                                    <TableCell>{campaign.recipients}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                campaign.status === "completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : campaign.status ===
                                                      "scheduled"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : "bg-red-100 text-red-800"
                                            }`}
                                        >
                                            {campaign.status
                                                .charAt(0)
                                                .toUpperCase() +
                                                campaign.status.slice(1)}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table> */}
                </CardContent>
            </Card>
        </div>
    );
}
