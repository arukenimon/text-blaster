import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect } from "react";
import MessageComposer from "./MessageComposer";

export default function Compose({ templates }) {
    // useEffect(() => {
    //     console.log("wew");
    // });
    return (
        <AdminLayout tabActive="compose">
            <MessageComposer messagetemps={templates} />
        </AdminLayout>
    );
}
