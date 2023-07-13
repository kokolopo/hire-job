"use client"

import FieldInput from '@/app/FieldInput'
import React, { useEffect, useState } from 'react'
import useRegister from '../useRegister'
import { useRouter } from 'next/navigation'

const FormRegist = ({ API }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const router = useRouter();

    const { workerRegister, message, responseStatus } = useRegister()

    useEffect(() => {
        if (responseStatus == 200) {
            router.back()
        }
    }, [responseStatus])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const input = { name, email, phone, password, confPassword }
        console.log(input);

        workerRegister(API, input)
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className='flex flex-col justify-center mt-6 space-y-5 '
        >
            <div className="">
                <FieldInput
                    title={"Nama"}
                    type={"text"}
                    name={"nama"}
                    placeholder={"Masukan nama lengkap"}
                    value={name}
                    setter={setName}
                />
            </div>

            <div className="">
                <FieldInput
                    title={"Email"}
                    type={"text"}
                    name={"email"}
                    placeholder={"Masukan alamat email"}
                    value={email}
                    setter={setEmail}
                />
            </div>

            <div className="">
                <FieldInput
                    title={"No.handphone"}
                    type={"number"}
                    name={"phone"}
                    placeholder={"Masukan no handphone"}
                    value={phone}
                    setter={setPhone}
                />
            </div>

            <div className="">
                <FieldInput
                    title={"Kata Sandi"}
                    type={"password"}
                    name={"sandi"}
                    placeholder={"Masukan kata sandi"}
                    value={password}
                    setter={setPassword}
                />
            </div>

            <div className="">
                <FieldInput
                    title={"Konfirmasi kata Sandi"}
                    type={"password"}
                    name={"confSandi"}
                    placeholder={"Masukan konfirmasi kata sandi"}
                    value={confPassword}
                    setter={setConfPassword}
                />
            </div>

            <div className="">
                <button className='w-full py-4 mt-5 font-semibold rounded shadow-md text-white bg-[#FBB017] px-36'>
                    Daftar
                </button>
            </div>

        </form>
    )
}

export default FormRegist