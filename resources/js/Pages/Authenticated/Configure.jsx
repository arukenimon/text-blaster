import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect } from "react";
import MessageComposer from "./MessageComposer";

import Configuration from "./Configuration";
export default function Configure({ cloudconfig, config }) {
    // useEffect(() => {
    //     console.log("wew");
    // });
    return (
        <AdminLayout tabActive="configuration">
            <Configuration config={config} cloudconfig={cloudconfig} />
        </AdminLayout>
    );
}
