import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/frontend/ui/card";
import { Button } from "@/Components/frontend/ui/button";
import { Textarea } from "@/Components/frontend/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/frontend/ui/select";
import { Input } from "@/Components/frontend/ui/input";
import { Label } from "@/Components/frontend/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/Components/frontend/ui/tabs";
import { Badge } from "@/Components/frontend/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/frontend/ui/tooltip";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/frontend/ui/alert-dialog";
import { Save, Send, Eye, Variable, AlertCircle } from "lucide-react";
import { create } from "zustand";
import { router, useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { toast } from "react-toastify";
// interface MessageComposerProps {
//     onNext?: () => void;
//     onSaveTemplate?: (template: { name: string; content: string }) => void;
// }

export const useMessageStore = create((set) => ({
    message: "",
    template_: "",
    setMessage: (message) => set({ message }),

    setTemplate_: (template_) => set({ template_ }),
}));

// export const useRecipientStore = create((set) => ({
//     recipients: [],
//     setRecipients: (recipients) => set({ recipients }),
// }));

const MessageComposer = ({
    messagetemps,
    onNext = () => {},
    onSaveTemplate = () => {},
}) => {
    const { message, setMessage, template_, setTemplate_ } = useMessageStore();

    useEffect(() => {
        if (template_) {
            console.log("templatex:", template_);
        }
    }, [template_]);

    const [selectedTemplate, setSelectedTemplate] = useState(0);
    ``;
    const [templateName, setTemplateName] = useState("");
    const [activeTab, setActiveTab] = useState("compose");

    const templates_ = [
        {
            id: 0,
            templatename: "Start from scratch",
            content: "",
        },
    ];

    const [templates, setTemplates] = useState(templates_);

    useEffect(() => {
        if (messagetemps) {
            // messagetemps.forEach(e => {
            //     setTemplate((prev) => )w
            // });
            setTemplates([
                ...templates_,
                ...messagetemps.map((e) => ({
                    id: e.id,
                    templatename: e.templatename,
                    content: e.content,
                })),
            ]);
        }
    }, [messagetemps]);

    // Mock templates data

    // Mock variables that can be inserted
    const variables = [
        { id: "name", label: "Customer Name", placeholder: "{{name}}" },
        { id: "vehicle", label: "Vehicle Model", placeholder: "{{vehicle}}" },
        { id: "date", label: "Last Service Date", placeholder: "{{date}}" },
        { id: "advisor", label: "Service Advisor", placeholder: "{{advisor}}" },
    ];

    const handleInsertVariable = (placeholder) => {
        setMessage(`${message} ${placeholder}`);
    };

    const { flash } = usePage().props;

    const { data, setData, post, processing, recentlySuccessful, errors } =
        useForm({
            template: "",
            content: "",
        });
    const handleTemplateChange = (value) => {
        setSelectedTemplate(value);
        // if (value === "start-from-scratch") {
        //     setMessage("");

        //     return;
        // }
        const template___ = templates.find((t) => t.id == value);
        if (template___) {
            setMessage(template___.content);

            setTemplate_(template___.templatename);
        }

        // console.log("templatezz:", template_);
    };

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
    const [SaveTemplateDialogOpen, setSaveTemplateDialogOpen] = useState(false);

    useEffect(() => {
        if (templateName) setData("template", templateName);
    }, [templateName]);
    useEffect(() => {
        if (message) {
            setData("content", message);
        }
    }, [message]);
    useEffect(() => {
        if (flash) {
            alert_toast(flash.title, flash.message, flash.icon);
        }
    }, [flash]);

    const handleSaveTemplate = (e) => {
        e.preventDefault();

        post(route("admin.template.save"), {
            onSuccess: () => {
                setSaveTemplateDialogOpen(false);
            },
            onError: (res) => {
                console.log(res);
            },
            onFinish: () => {
                router.reload({
                    only: ["flash"],
                });
            },
        });
        // if (templateName && message) {
        //     onSaveTemplate({ name: templateName, content: message });
        //     setTemplateName("");
        // }
    };

    const characterCount = message.length;
    const maxCharacters = 160;
    const isOverLimit = characterCount > maxCharacters;

    return (
        <Card className="w-full bg-white">
            <CardHeader>
                <CardTitle className="text-xl font-bold">
                    Message Composer
                </CardTitle>
            </CardHeader>

            <CardContent>
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <TabsList>
                        <TabsTrigger value="compose">Compose</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="compose" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="template">Select Template</Label>
                            <Select
                                value={selectedTemplate}
                                onValueChange={handleTemplateChange}
                            >
                                <SelectTrigger id="template">
                                    <SelectValue placeholder="Select a template" />
                                </SelectTrigger>
                                <SelectContent>
                                    {templates.map((template) => (
                                        <SelectItem
                                            key={template.id}
                                            value={template.id}
                                        >
                                            {template.templatename}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="message">Message</Label>
                                <div className="flex items-center space-x-2">
                                    <span
                                        className={`text-xs ${
                                            isOverLimit
                                                ? "text-red-500"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {characterCount}/{maxCharacters}
                                    </span>
                                    {isOverLimit && (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>
                                                        Message exceeds
                                                        character limit
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )}
                                </div>
                            </div>
                            <Textarea
                                id="message"
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="min-h-[200px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Insert Variables</Label>
                            <div className="flex flex-wrap gap-2">
                                {variables.map((variable) => (
                                    <Badge
                                        key={variable.id}
                                        variant="outline"
                                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                                        onClick={() =>
                                            handleInsertVariable(
                                                variable.placeholder
                                            )
                                        }
                                    >
                                        <Variable className="h-3 w-3 mr-1" />
                                        {variable.label}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="preview" className="space-y-4">
                        <div className="border rounded-md p-4 bg-gray-50 min-h-[200px]">
                            <div className="space-y-4">
                                <div className="bg-blue-100 rounded-lg p-3 max-w-[80%] ml-auto">
                                    <p className="text-sm whitespace-pre-wrap">
                                        {message ||
                                            "Your message preview will appear here"}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end">
                                    <span className="text-xs text-gray-500">
                                        {characterCount} characters{" "}
                                        {isOverLimit && "(exceeds limit)"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>

            <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                    <AlertDialog
                        open={SaveTemplateDialogOpen}
                        onOpenChange={(open) => setSaveTemplateDialogOpen(open)}
                    >
                        <AlertDialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex items-center"
                            >
                                <Save className="h-4 w-4 mr-2" />
                                Save as Template
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Save as Template
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Enter a name for this template to save it
                                    for future use.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <div className="py-4">
                                <Input
                                    placeholder="Template name"
                                    value={templateName}
                                    onChange={(e) => {
                                        //setData("template", e.target.value);
                                        setTemplateName(e.target.value);
                                    }}
                                />
                                <InputError message={errors.template} />
                            </div>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    disabled={processing}
                                    onClick={handleSaveTemplate}
                                >
                                    Save
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

                <Button
                    onClick={onNext}
                    // disabled={message.trim() === "" || isOverLimit}
                    className="flex items-center"
                >
                    <Send className="h-4 w-4 mr-2" />
                    Next: Select Recipients
                </Button>
            </CardFooter>
        </Card>
    );
};

export default MessageComposer;
