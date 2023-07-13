'use client'

import React, { useState } from 'react'
import FieldInput from './FieldInput'
import { Select, Option } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';

async function postData(token, data, id) {
    const response = await fetch(`http://103.214.113.5:5000/hirings/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        credentials: 'include'
    });
    const result = await response.json();
    // console.log(result);

    // const response = await axios.post(url, data, { withCredentials: true })
    // const result = await response.data;
    return result;
}

const FormHiring = ({ id, token }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Gunakan selectedOption sesuai kebutuhan
        const input = { hiring_type: selectedOption, recruter_name: name, email, phone, description: desc }

        try {
            const result = await postData(token, input, id);
            // console.log(result);
            if (!result.msg) {
                alert('Berhasil Hiring!')
                router.replace('/home')
            }
            setErr(result.msg)
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
            // Tangani kesalahan jika ada
        }
    };

    return (
        <form className='flex flex-col gap-8 mt-4' onSubmit={handleSubmit}>
            <div>
                <label className='text-xs text-secondaryText'>Tujuan Pemesanan</label>
                <div className="flex flex-col w-full pl-5 bg-white rounded-md shadow-md text-secondaryText">
                    <Select
                        variant='static'
                        className='border-none'
                        value={selectedOption}
                        onChange={e => setSelectedOption(e)}
                    >
                        <Option value='Proyek'>Proyek</Option>
                        <Option value='Mentor'>Mentor</Option>
                        <Option value='Freelance'>Freelance</Option>
                    </Select>
                </div>
            </div>

            <FieldInput
                title={"Nama Lengkap"}
                placeholder={"Masukan nama lengkap"}
                type={"text"}
                name={"nama"}
                value={name}
                setter={setName}
            />
            <FieldInput
                title={"Email"}
                placeholder={"Masukan email"}
                type={"email"}
                name={"email"}
                value={email}
                setter={setEmail}
            />
            <FieldInput
                title={"No Handphone"}
                placeholder={"Masukan no handphone"}
                type={"text"}
                name={"hp"}
                value={phone}
                setter={setPhone}
            />
            <label className='text-xs text-secondaryText'>Deskripsi
                <textarea
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                    name="desc"
                    rows={8}
                    placeholder='Deskripsikan/jelaskan lebih detail'
                    className='w-full px-5 py-3 mt-1 bg-white border-none rounded-md shadow-md placeholder:text-base '
                ></textarea>
            </label>

            <button
                className='py-4 mt-4 text-base font-semibold
                         text-white rounded-xl bg-[#FBB017] shadow-sm'
            >
                Hire
            </button>
        </form>
    )
}

export default FormHiring