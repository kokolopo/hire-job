import FieldInput from '@/app/FieldInput'
import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Page = async () => {
    // const cookieStore = cookies()
    // const token = cookieStore.get('accessToken')

    // if (token) {
    //     return redirect('/')
    // }

    return (
        <div className="sm:w-1/2 sm:px-[70px] sm:py-[100px] w-screen">
            <div className="space-y-1">
                <p className='text-3xl font-semibold'>Halo, Pewpeople</p>
                <p className='text-gray-400'>Selamat Datang di Peworld.</p>
            </div>

            <div className="flex flex-col items-center justify-center w-full text-base font-semibold text-white sm:h-full h-1/2">
                <Link
                    href={'/login/recruters'}
                    className="bg-[#9681EB] sm:w-1/2 w-full py-3 text-center rounded-xl hover:cursor-pointer"
                >Login as Recruter</Link>
                <div className="w-full my-4 border border-gray-500 sm:w-1/2"></div>
                <Link
                    href={'/login/workers'}
                    className="bg-[#45CFDD] py-3 sm:w-1/2 w-full text-center rounded-xl hover:cursor-pointer"
                >Login as Worker</Link>
            </div>
        </div>
    )
}

export default Page