"use client"
import { Textarea } from "@material-tailwind/react";
import FieldInput from "./FieldInput";
import Link from "next/link";
const FormEditProfile = () => {
    return (
        <form
            className="sm:w-2/3"
        >
            <div
                className="flex flex-col px-6 py-10 space-y-4 rounded-lg shadow-md "
            >
                <div className="border-b">Data Diri</div>

                <FieldInput label={"Nama Perusahaan"} />
                <FieldInput label={"Bidang Perusahaan"} />
                <FieldInput label={"Kota"} />
                <div className="w-full">
                    <Textarea label="Deskripsi singkat" />
                </div>
                <FieldInput label={"Email"} />
                <FieldInput label={"Instagram"} />
                <FieldInput label={"No. Telpon"} />
                <FieldInput label={"LinkedIn"} />
            </div>

            <div className="flex flex-col gap-2 mt-5 space-y-2">
                <Link href={"/"} className="bg-[#5E50A1] text-white py-2 text-center rounded-lg">Simpan</Link>
                <Link href={"/"} className="text-[#5E50A1] text-center py-2 rounded-lg bg-white border border-[#5E50A1]">Batal</Link>
            </div>
        </form>
    )
}

export default FormEditProfile