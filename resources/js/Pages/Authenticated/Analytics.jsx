import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect } from "react";
import AnalyticsDashboard from "./AnalyticsDashboard";

export default function Analytics({ messages }) {
    // useEffect(() => {
    //     console.log("wew");
    // });
    return (
        <AdminLayout tabActive="analytics">
            <AnalyticsDashboard messages={messages} />
        </AdminLayout>
    );
}
