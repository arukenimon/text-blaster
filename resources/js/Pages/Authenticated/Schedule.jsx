import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect, useState } from "react";

import { useMessageStore } from "@/Pages/Authenticated/MessageComposer";
import { useRecipientStore } from "./RecipientSelector";

import { Button } from "@/Components/frontend/ui/button";
export default function Schedule({}) {
    // useEffect(() => {
    //     console.log("wew");
    // });

    const { message, template_ } = useMessageStore();

    const { recipients } = useRecipientStore();
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post("/services/send-sms", {
                message: message,
                phoneNumbers: recipients.map((r) => r.phone), //["+639273630590"],
                recipients: recipients,
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

            router.reload({
                only: ["messages"],
            });
        }
    };

    return (
        <AdminLayout tabActive="schedule">
            <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-semibold">Schedule Your Message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="send-now"
                                name="schedule"
                                defaultChecked
                            />
                            <label htmlFor="send-now">Send Immediately</label>
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
                        <h3 className="font-medium mb-2">Message Summary</h3>
                        <div className="space-y-2 text-sm">
                            <p>
                                <strong>Template:</strong> {template_}
                            </p>
                            <p>
                                <strong>Recipients:</strong> {recipients.length}{" "}
                                contacts
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
                        // onClick={() => setActiveTab("recipients")}
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
        </AdminLayout>
    );
}
