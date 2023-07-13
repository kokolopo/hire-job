'use client'

import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import useUser from "./useUser";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function DeleteDialog({ children, portoId }) {
    const { deletePorto } = useUser()
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const token = getCookie('accessToken')

    const handleOpen = () => setOpen(!open);
    const handleOK = () => {
        deletePorto(token, portoId)
        // setTimeout(() => { }, 1500)
        setOpen(!open)
        router.push('/my-profile')
    }

    return (
        <Fragment>
            <div onClick={handleOpen} className="">
                {children}
            </div>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Warning!</DialogHeader>
                <DialogBody divider>
                    Apakah kamu ingin menghapus data ini?{portoId}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOK}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}

