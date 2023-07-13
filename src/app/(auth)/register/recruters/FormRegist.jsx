'use client'

import FieldInput from '@/app/FieldInput';
import useRegister from '@/app/(auth)/register/useRegister';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

// async function postData(data) {
//     const response = await fetch('http://103.214.113.5:5000/recruters/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//         credentials: 'include'
//     });
//     const result = await response.json();
//     // console.log(result);

//     // const response = await axios.post(url, data, { withCredentials: true })
//     // const result = await response.data;
//     return result;
// }

const FormRegist = ({ API }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [perusahaan, setPerusahaan] = useState('')
    const [jabatan, setjabatan] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [err, setErr] = useState('')

    const { recruterRegister, message, responseStatus } = useRegister()

    const router = useRouter();

    useEffect(() => {
        if (responseStatus == 200) {
            router.push("/login/recruters")
        }
    }, [responseStatus])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const input = {
            name, email,
            company: perusahaan, position: jabatan,
            phone, password, confPassword
        }

        recruterRegister(API, input)
    }

    // console.log(responseStatus);

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
                    title={"Perusahaan"}
                    type={"text"}
                    name={"perusahaan"}
                    placeholder={"Masukan nama perusahaan"}
                    value={perusahaan}
                    setter={setPerusahaan}
                />
            </div>

            <div className="">
                <FieldInput
                    title={"Jabatan"}
                    type={"text"}
                    name={"jabatan"}
                    placeholder={"Posisi di perusahaan anda"}
                    value={jabatan}
                    setter={setjabatan}
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