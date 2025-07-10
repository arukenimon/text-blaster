import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect } from "react";
import RecipientSelector from "./RecipientSelector";
import { router, useForm, usePage } from "@inertiajs/react";
import PrintErrors from "@/Components/PrintErrors";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/frontend/ui/input";
import PrimaryButton from "@/Components/PrimaryButton";
export default function AccSettings({}) {
    // useEffect(() => {
    //     console.log("wew");
    // });

    const { user } = usePage().props.auth;
    const {
        data: dataPw,
        setData: setDataPw,
        post: postPw,
        recentlySuccessful: recentSuccessPw,
        errors: errorsPw,
        processing: proccessPw,
        put: putPw,
        clearErrors: clearErrorsPw,
        reset: resetPw,
    } = useForm({
        //email: user?.email,
        current_password: "",
        password: "",
        confirmpw: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        putPw(route("admin.settings.password.update"), {
            onSuccess: () => {
                clearErrorsPw();
                resetPw();
            },
            onFinish: () => {
                router.reload({
                    only: ["flash", "auth"],
                });
            },
        });
    };

    const {
        data: dataEmail,
        setData: setDataEmail,
        post: postEmail,
        recentlySuccessful: recentSuccessEmail,
        errors: errorsEmail,
        processing: proccessEmail,
        put: putEmail,
    } = useForm({
        email: user?.email,
        //password: user?.password,
    });

    const updateEmail = (e) => {
        e.preventDefault();

        putEmail(route("admin.settings.email.update"), {
            onFinish: () => {
                router.reload({
                    only: ["flash", "auth"],
                });
            },
        });
    };
    return (
        <AdminLayout tabActive="accsettings">
            <PrintErrors errors={errorsEmail} />
            <h3>Change your email here</h3>

            <div>
                <InputLabel value={"Email"} />
                <Input
                    value={dataEmail.email}
                    className=" w-full"
                    onChange={(e) => setDataEmail("email", e.target.value)}
                />
            </div>
            <PrimaryButton disabled={proccessEmail} onClick={updateEmail}>
                Save New Email
            </PrimaryButton>

            <div>
                <PrintErrors errors={errorsPw} />
                <div className=" grid grid-cols-2 gap-4">
                    <div>
                        <InputLabel value={"Current Password"} />
                        <Input
                            value={dataPw.current_password}
                            className=" w-full"
                            type="password"
                            onChange={(e) =>
                                setDataPw("current_password", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <InputLabel value={"New Password"} />
                        <Input
                            value={dataPw.password}
                            className=" w-full"
                            type="password"
                            onChange={(e) =>
                                setDataPw("password", e.target.value)
                            }
                        />
                    </div>
                </div>
                <div>
                    <InputLabel value={"Confirm Password"} />
                    <Input
                        value={dataPw.confirmpw}
                        className=" w-full"
                        type="password"
                        onChange={(e) => setDataPw("confirmpw", e.target.value)}
                    />
                </div>
            </div>
            <PrimaryButton disabled={proccessPw} onClick={updatePassword}>
                Save new password
            </PrimaryButton>
        </AdminLayout>
    );
}
