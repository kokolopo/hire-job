"use client"

import React, { useEffect, useState } from 'react'
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import FieldInput from '@/app/FieldInput';
import useLogin from './useLogin';

const LoginForm = ({ role, API }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const {
        responseAPI,
        message,
        responseStatus,
        error,
        recruterLogin,
        workerLogin
    } = useLogin()

    const router = useRouter();

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const input = {
            email, password
        }
        console.log(role);
        switch (role) {
            case 'recruter':
                recruterLogin(API, input)
                break;
            case 'worker':
                workerLogin(API, input)
                break;
            default:
                break;
        }

    }

    useEffect(() => {
        if (responseStatus == 200 && role == 'recruter') {
            router.push('/')
        }
        if (responseStatus == 200 && role == 'worker') {
            router.push('/my-profile')
        }
    }, [responseStatus])

    return (
        <form
            onSubmit={handleOnSubmit}
            className='flex flex-col justify-center mt-6 space-y-5 '
        >
            {err && <p className="text-red-400">{err}</p>}
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
                    title={"Kata Sandi"}
                    type={"password"}
                    name={"sandi"}
                    placeholder={"Masukan kata sandi"}
                    value={password}
                    setter={setPassword}
                />
            </div>

            <div className="">
                <p className='text-sm text-right text-gray-400 hover:cursor-pointer'>Lupa kata sandi?</p>
            </div>

            <div className="">
                <button className='w-full py-4 font-semibold rounded shadow-md text-white bg-[#FBB017] px-36'>
                    Masuk
                </button>
            </div>

        </form>
    )
}

export default LoginForm