import React, { useEffect, useState, useRef } from "react";
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
    Save,
    Trash,
    Trash2,
    Pencil,
} from "lucide-react";
import * as XLSX from "xlsx"; // Import the library

import { create } from "zustand";
import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "@/Components/frontend/ui/table";

import Modal from "@/Components/Modal";
import { router, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

import DataTable from "react-data-table-component";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import CustomModal from "@/Components/CustomModal";
export const useRecipientStore = create((set) => ({
    recipients: [],
    setRecipients: (recipients) => set({ recipients }),
}));

const RecipientSelector = ({
    onBack = () => {},
    onNext = () => {},
    allrecipients,
    allsegments,
}) => {
    // useEffect(() => {
    //     console.log("allrecips:", allrecipients);
    // }, [allrecipients]);
    const { recipients, setRecipients } = useRecipientStore();

    const [selectedSegments, setSelectedSegments] = useState([]);
    const [csvFile, setCsvFile] = useState(null);
    const [activeTab, setActiveTab] = useState("import");
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const [IsModalSaveContacts, setIsModalSaveContacts] = useState(false);

    // Handle drag events
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // Handle file drop
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (validateFileType(file)) {
                setCsvFile(file);
                processFile(file);
            }
        }
    };

    // Handle file selection via browse
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (validateFileType(file)) {
            setCsvFile(file);
            processFile(file);
        }
    };

    // Validate file type
    const validateFileType = (file) => {
        const validTypes = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "text/csv",
            "application/csv",
        ];

        // Check by MIME type
        if (validTypes.includes(file.type)) {
            return true;
        }

        // Fallback check by extension
        const fileExt = file.name.split(".").pop().toLowerCase();
        if (["xls", "xlsx", "csv"].includes(fileExt)) {
            return true;
        }

        alert("Please upload only Excel (.xls, .xlsx) or CSV files");
        return false;
    };

    const [newcontacts, setNewContacts] = useState([]);

    const {
        data,
        setData,
        post,
        recentlySuccessful,
        processing,
        errors,
        clearErrors,
    } = useForm({
        contacts: [],
    });

    useEffect(() => {
        if (newcontacts) {
            setData("contacts", newcontacts);
        }
    }, [newcontacts]);
    // Process the uploaded file
    const processFile = (file) => {
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
                            segment: row.segment_id,
                        };
                    })
                    .filter(Boolean); // Remove null entries

                setNewContacts(formattedData);
                //setRecipients(formattedData);
                clearErrors();
            } catch (error) {
                console.error("Error parsing file:", error);
                alert(
                    "Error processing file. Please check the format and try again."
                );
            }
        };
        reader.readAsArrayBuffer(file);
    };

    // Trigger file input click
    const onButtonClick = () => {
        inputRef.current?.click();
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
    //     //console.log("recipientsxxxx:", recipients);
    // }, [recipients]);

    // const [selectedSegments, setSelectedSegments] = useState([]);
    // const [csvFile, setCsvFile] = useState(null); // Fixed useState declaration
    // const [activeTab, setActiveTab] = useState("import");

    // const segments = [
    //     { id: "recent-service", label: "Recent Service Customers", count: 156 },
    //     { id: "new-customers", label: "New Customers", count: 87 },
    //     { id: "inactive", label: "Inactive Customers", count: 243 },
    //     { id: "premium", label: "Premium Service Customers", count: 62 },
    // ];

    const [segments, setSegments] = useState([]);

    useEffect(() => {
        if (allsegments) {
            setSegments(allsegments);
        }
    }, [allsegments, segments]);

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

        // setRecipients((prev) => [
        //     ...
        // ])
    };

    const handleRemoveRecipient = (id) => {
        setRecipients((prev) =>
            prev.filter((recipient) => recipient.id !== id)
        );
    };

    const totalRecipients = recipients.length;

    const saveDatabase = (e) => {
        e.preventDefault();

        post(route("admin.contacts.add"), {
            onFinish: () => {
                setCsvFile(null);
                setRecipients([]);
                setNewContacts([]);
                router.reload({
                    only: ["flash"],
                });
            },
            onError: (xx) => {
                console.log("error: ", errors);
                console.log("error: ", xx);
            },
        });
    };

    const columns = [
        {
            name: "Client",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Contact #",
            selector: (row) => row.contactno,
            sortable: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <>
                    <PrimaryButton>
                        <Pencil />
                    </PrimaryButton>
                    <DangerButton>
                        <Trash2 />
                    </DangerButton>
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const [recipientsdata, setRecipientsData] = useState([]);

    const [selectedSegmentID, setSelectedSegmentID] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (selectedSegmentID) {
            getRecipients(selectedSegmentID);
        }
    }, [selectedSegmentID]);

    const getRecipients = async (segmentid) => {
        let zxcdata = null;
        fetch(`/admin/get-recipients/${segmentid}`)
            .then((res) => res.json())
            .then((data) => {
                //console.log("get:", data);
                setRecipientsData(data);
                //return data;
                //zxcdata = data;
            });
        //const get_ = await fetch(`/admin/get-recipients/${segmentid}`);

        //alert(get_);
        //return zxcdata.json();
    };
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
                    <PrimaryButton
                        className="mb-2"
                        onClick={() =>
                            (window.location.href = route("download.template"))
                        }
                    >
                        Download Template
                    </PrimaryButton>
                    <Card>
                        <CardContent className="pt-6">
                            <div
                                className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg ${
                                    dragActive
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-300 bg-gray-50"
                                }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <Upload className="h-10 w-10 text-gray-400 mb-4" />
                                <p className="mb-2 text-sm text-gray-600">
                                    Drag and drop an Excel/CSV file or click to
                                    browse
                                </p>
                                <p className="text-xs text-gray-500 mb-4">
                                    Supported formats: .xls, .xlsx, .csv
                                </p>

                                <input
                                    ref={inputRef}
                                    id="file-upload"
                                    type="file"
                                    accept=".xlsx,.xls,.csv"
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />

                                <Label
                                    htmlFor="file-upload"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={onButtonClick}
                                    >
                                        Browse File
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
                                            type="button"
                                            onClick={() => {
                                                setCsvFile(null);
                                                setRecipients([]);
                                                setNewContacts([]);
                                            }}
                                        >
                                            <X size={14} />
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <div className=" mt-2">
                                <Label>Selected Contacts:</Label>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Phone</TableHead>
                                            <TableHead>Segment</TableHead>
                                            <TableHead>Description</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {newcontacts.map((c, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{c.name}</TableCell>
                                                <TableCell>{c.phone}</TableCell>
                                                <TableCell>
                                                    {c.segment}
                                                </TableCell>
                                                <TableCell>
                                                    {c.description}
                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="h-6 w-6 p-0"
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            const updatedContacts =
                                                                newcontacts.filter(
                                                                    (
                                                                        _,
                                                                        index
                                                                    ) =>
                                                                        index !==
                                                                        i
                                                                );
                                                            setNewContacts(
                                                                updatedContacts
                                                            );
                                                        }}
                                                    >
                                                        <Trash size={14} />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                                {Object.keys(errors).length > 0 && (
                                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className="h-5 w-5 text-red-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <ul className="text-sm text-red-600">
                                                    {Object.entries(errors).map(
                                                        ([key, error]) => (
                                                            <li key={key}>
                                                                {error}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between mt-2">
                                <Button
                                    variant="outline"
                                    onClick={(e) => {
                                        setRecipients(newcontacts);
                                        setActiveTab("segments");
                                    }}
                                    className="flex items-center gap-2"
                                >
                                    <ArrowRight size={16} />
                                    Add to Recipients
                                </Button>
                                <Button
                                    //variant="outline"
                                    onClick={saveDatabase}
                                    disabled={processing}
                                    className="flex justify-content-end items-center gap-2"
                                >
                                    <Save size={16} />
                                    Save to Database
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="segments" className="mt-4">
                    <Card>
                        <CardContent className="pt-6">
                            {/* <DataTable columns={columns} data={allrecipients} /> */}
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
                                                    {segment.id}
                                                </Label>
                                                <p className="text-sm text-gray-500">
                                                    {segment.label}
                                                </p>
                                            </div>
                                        </div>

                                        <Badge
                                            variant="outline"
                                            onClick={() => {
                                                setSelectedSegmentID(
                                                    segment.ID
                                                );
                                                setIsModalOpen((prev) =>
                                                    prev ? false : true
                                                );

                                                // alert("asd");
                                            }}
                                        >
                                            {segment.count} contacts
                                        </Badge>
                                    </div>
                                ))}
                            </div>

                            <CustomModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                title="Recipients"
                                className=" m-5"
                            >
                                <DataTable
                                    columns={columns}
                                    data={recipientsdata}
                                />
                            </CustomModal>
                        </CardContent>
                    </Card>
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="text-lg">
                                Selected Recipients
                            </CardTitle>
                            <CardDescription>
                                {totalRecipients} contacts will receive your
                                message
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px] rounded-md border p-4">
                                <div className="space-y-2">
                                    {recipients.length > 0 ? (
                                        recipients.map((recipient, ii) => (
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
                                                        onClick={
                                                            () => {
                                                                setRecipients(
                                                                    recipients.filter(
                                                                        (
                                                                            nnn,
                                                                            index
                                                                        ) =>
                                                                            index !==
                                                                            ii
                                                                    )
                                                                );
                                                            }
                                                            // handleRemoveRecipient(
                                                            //     recipient.id
                                                            // )
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
                                                Import contacts or select
                                                segments above
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
                </TabsContent>
            </Tabs>
            <Modal show={IsModalSaveContacts}></Modal>
        </div>
    );
};

export default RecipientSelector;
