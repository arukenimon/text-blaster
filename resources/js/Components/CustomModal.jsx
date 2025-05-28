import React, { useState } from "react";
import { Button } from "@/Components/frontend/ui/button";
import {
    DialogContent,
    DialogHeader,
    DialogPortal,
    DialogDescription,
} from "@/Components/frontend/ui/dialog";
import { Input } from "@/Components/frontend/ui/input"; //@/components/tempo/components/ui/input
import { Label } from "@/Components/frontend/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/frontend/ui/select";

import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
    DialogTitle,
} from "@headlessui/react";

// interface ReorderModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   item: {
//     id: string;
//     name: string;
//     supplier: string;
//     quantity: number;
//     unit: string;
//   } | null;
//   suppliers: string[];
//   onReorder: (itemId: string, quantity: number, supplier: string) => void;
// }

const CustomModal = ({
    isOpen,
    onClose = () => {},
    title = "",
    description = "",
    savetext = "Save",
    hasCancel = true,
    canceltext = "Cancel",
    className = "",
    children,
    maxWidth = "2xl",
    //   item,
    //   suppliers = [],
    //   onReorder,
}) => {
    //   const [quantity, setQuantity] = useState(0);
    //   const [supplier, setSupplier] = useState("");

    //   React.useEffect(() => {
    //     if (item) {
    //       setQuantity(item.quantity > 0 ? item.quantity : 50);
    //       setSupplier(item.supplier);
    //     }
    //   }, [item]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (item && quantity > 0) {
        //   onReorder(item.id, quantity, supplier);
        //   onClose();
        // }
    };

    //   if (!item) return null;
    const maxWidthClass = {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
    }[maxWidth];
    return (
        <Transition show={isOpen} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className="fixed p-5 inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0"
                onClose={onClose}
            >
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-gray-500/75" />
                </TransitionChild>
                {/* "sm:max-w-[425px]" +  */}

                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <DialogPanel
                        className={`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${maxWidthClass}`}
                    >
                        <DialogTitle>{title}</DialogTitle>
                        {children}
                    </DialogPanel>
                </TransitionChild>
                {/* <DialogContent className={className + ` ${maxWidthClass}`}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    {children}
                </DialogContent> */}
            </Dialog>
        </Transition>
    );
};

export default CustomModal;
