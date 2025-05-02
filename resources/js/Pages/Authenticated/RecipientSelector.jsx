import React, { useEffect, useState } from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/Components/frontend/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/frontend/ui/card";
import { Button } from "@/Components/frontend/ui/button";
import { Input } from "@/Components/frontend/ui/input";
import { Label } from "@/Components/frontend/ui/label";
import { Checkbox } from "@/Components/frontend/ui/checkbox";
import { Badge } from "@/Components/frontend/ui/badge";
import { ScrollArea } from "@/Components/frontend/ui/scroll-area";
import {
    ArrowLeft,
    ArrowRight,
    Upload,
    Users,
    UserCheck,
    UserPlus,
    X,
} from "lucide-react";
import * as XLSX from "xlsx"; // Import the library

import { create } from "zustand";

export const useRecipientStore = create((set) => ({
    recipients: [],
    setRecipients: (recipients) => set({ recipients }),
}));

const RecipientSelector = ({
    onBack = () => {},
    onNext = () => {},
    selectedRecipients = [],
}) => {
    const { recipients, setRecipients } = useRecipientStore();

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setCsvFile(file); // Store the file for UI display

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // Normalize column names (case-insensitive)
                const normalizedData = jsonData.map((row) => {
                    const normalizedRow = {};
                    Object.keys(row).forEach((key) => {
                        normalizedRow[key.toLowerCase()] = row[key];
                    });
                    return normalizedRow;
                });

                // Transform data with validation
                const formattedData = normalizedData
                    .map((row, index) => {
                        // Validate required fields
                        if (!row.name && !row.phone) {
                            console.warn(
                                `Skipping row ${
                                    index + 1
                                }: Missing both name and phone`
                            );
                            return null;
                        }

                        return {
                            id: row.id || String(index + 1),
                            name: row.name || "Unknown",
                            phone: formatPhoneNumber(String(row.phone || "")),
                            segment:
                                row.segment ||
                                determineSegment(row) ||
                                "Not Set",
                        };
                    })
                    .filter(Boolean); // Remove null entries

                setRecipients(formattedData);
            } catch (error) {
                console.error("Error parsing file:", error);
                // Add user-facing error message here
            }
        };
        reader.readAsArrayBuffer(file);
    };

    // Helper function to determine segment
    const determineSegment = (row) => {
        if (row.tags) {
            if (row.tags.includes("premium")) return "Premium";
            if (row.tags.includes("new")) return "New Customer";
        }
        return null;
    };

    // Helper function to format phone numbers
    const formatPhoneNumber = (phone) => {
        // Basic formatting - extend as needed
        const cleaned = phone.replace(/\D/g, "");
        if (cleaned.length === 10) {
            return `(${cleaned.substring(0, 3)}) ${cleaned.substring(
                3,
                6
            )}-${cleaned.substring(6)}`;
        }
        return phone; // Return original if formatting fails
    };

    // useEffect(() => {
    //     console.log(recipients);
    // }, []);

    const [selectedSegments, setSelectedSegments] = useState([]);
    const [csvFile, setCsvFile] = useState(null); // Fixed useState declaration
    const [activeTab, setActiveTab] = useState("import");

    const segments = [
        { id: "recent-service", label: "Recent Service Customers", count: 156 },
        { id: "new-customers", label: "New Customers", count: 87 },
        { id: "inactive", label: "Inactive Customers", count: 243 },
        { id: "premium", label: "Premium Service Customers", count: 62 },
    ];

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setCsvFile(e.target.files[0]);
            // In a real implementation, you would parse the CSV file here
            // and update the recipients state
        }
    };

    const handleSegmentToggle = (segmentId) => {
        setSelectedSegments((prev) =>
            prev.includes(segmentId)
                ? prev.filter((id) => id !== segmentId)
                : [...prev, segmentId]
        );
    };

    const handleRemoveRecipient = (id) => {
        setRecipients((prev) =>
            prev.filter((recipient) => recipient.id !== id)
        );
    };

    const totalRecipients = recipients.length;

    return (
        <div className="w-full max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <CardHeader className="px-0">
                <CardTitle className="text-2xl font-bold">
                    Select Recipients
                </CardTitle>
                <CardDescription>
                    Choose who will receive your message by importing contacts
                    or selecting customer segments.
                </CardDescription>
            </CardHeader>

            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="mt-6"
            >
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                        value="import"
                        className="flex items-center gap-2"
                    >
                        <Upload size={16} />
                        Import Contacts
                    </TabsTrigger>
                    <TabsTrigger
                        value="segments"
                        className="flex items-center gap-2"
                    >
                        <Users size={16} />
                        Select Segments
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="import" className="mt-4">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                                <Upload className="h-10 w-10 text-gray-400 mb-4" />
                                <p className="mb-2 text-sm text-gray-600">
                                    Drag and drop a CSV file or click to browse
                                </p>
                                <p className="text-xs text-gray-500 mb-4">
                                    Your file should include name and phone
                                    number columns
                                </p>
                                {/* <Input
                                    id="csv-upload"
                                    type="file"
                                    accept=".csv"
                                    className="hidden"
                                    onChange={handleFileChange}
                                /> */}
                                <Input
                                    id="excel-upload"
                                    type="file"
                                    accept=".xlsx, .xls, .csv"
                                    onChange={handleFileUpload}
                                />
                                <Label
                                    htmlFor="csv-upload"
                                    className="cursor-pointer"
                                >
                                    <Button variant="outline">
                                        Browse Files.
                                        {/* <Input
                                            id="excel-upload"
                                            type="file"
                                            accept=".xlsx, .xls, .csv"
                                            onChange={handleFileUpload}
                                        /> */}
                                    </Button>
                                </Label>
                                {csvFile && (
                                    <div className="mt-4 flex items-center gap-2 p-2 bg-gray-100 rounded">
                                        <span className="text-sm">
                                            {csvFile.name}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-6 w-6 p-0"
                                            onClick={() => setCsvFile(null)}
                                        >
                                            <X size={14} />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="segments" className="mt-4">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="grid gap-4">
                                {segments.map((segment) => (
                                    <div
                                        key={segment.id}
                                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Checkbox
                                                id={segment.id}
                                                checked={selectedSegments.includes(
                                                    segment.id
                                                )}
                                                onCheckedChange={() =>
                                                    handleSegmentToggle(
                                                        segment.id
                                                    )
                                                }
                                            />
                                            <div>
                                                <Label
                                                    htmlFor={segment.id}
                                                    className="font-medium cursor-pointer"
                                                >
                                                    {segment.label}
                                                </Label>
                                                <p className="text-sm text-gray-500">
                                                    {segment.id ===
                                                    "recent-service"
                                                        ? "Customers who had service in the last 30 days"
                                                        : segment.id ===
                                                          "new-customers"
                                                        ? "Customers who joined in the last 60 days"
                                                        : segment.id ===
                                                          "inactive"
                                                        ? "No service in the last 6 months"
                                                        : "Customers enrolled in premium service plans"}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge variant="outline">
                                            {segment.count} contacts
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="text-lg">
                        Selected Recipients
                    </CardTitle>
                    <CardDescription>
                        {totalRecipients} contacts will receive your message
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[200px] rounded-md border p-4">
                        <div className="space-y-2">
                            {recipients.length > 0 ? (
                                recipients.map((recipient) => (
                                    <div
                                        key={recipient.id}
                                        className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                {recipient.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {recipient.phone}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {recipient.segment && (
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {recipient.segment}
                                                </Badge>
                                            )}
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 p-0"
                                                onClick={() =>
                                                    handleRemoveRecipient(
                                                        recipient.id
                                                    )
                                                }
                                            >
                                                <X size={16} />
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center h-[150px] text-center">
                                    <Users className="h-10 w-10 text-gray-300 mb-2" />
                                    <p className="text-gray-500">
                                        No recipients selected
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Import contacts or select segments above
                                    </p>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={onBack}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Message
                    </Button>
                    <Button
                        onClick={() => onNext(recipients)}
                        disabled={recipients.length === 0}
                        className="flex items-center gap-2"
                    >
                        Continue to Schedule
                        <ArrowRight size={16} />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RecipientSelector;
