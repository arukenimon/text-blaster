import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect } from "react";
import RecipientSelector from "./RecipientSelector";

export default function Recipients({ allrecipients, allsegments }) {
    // useEffect(() => {
    //     console.log("wew");
    // });
    return (
        <AdminLayout tabActive="recipients">
            <RecipientSelector
                allrecipients={allrecipients}
                allsegments={allsegments}
            />
        </AdminLayout>
    );
}
