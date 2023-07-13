// "use client"

import Link from 'next/link'
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGitlab, FiGithub } from "react-icons/fi";
import Avatar from '../talents/Avatar';
import About from '../talents/About';
import Tab from '../talents/Tab';
// import { Spinner } from "@material-tailwind/react";
// import { useEffect, useState } from 'react';
import useUser from './useUser';
import Skills from './Skills';
import { cookies } from 'next/headers'


async function getData(API, token) {
    const res = await fetch(API, {
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/json",
        },
        credentials: "include"
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Layout({ children }) {
    // const { fetchData, userData } = useUser()
    // useEffect(() => {
    //     fetchData()
    // }, []);

    // if (!userData) {
    //     return (<Spinner />)
    // }

    // let dataKeys = Object.keys(userData.data.skill)

    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')
    const userId = cookieStore.get('userId')
    const data = await getData(`${process.env.API_URL}/workers/${userId.value}`, token.value)

    const dataUser = data.data
    // console.log(dataUser);


    return (
        <div className="my-5 sm:py-7 sm:px-12 px-7 sm:flex sm:gap-7">

            {/* {userData ? <Spinner /> : <div>{userData}</div>} */}

            <div className="py-4 bg-white shadow-md rounded-xl sm:w-[30%]">
                <Avatar url={dataUser.photo} />

                <div className="flex flex-col px-7">
                    {/* About */}
                    <About
                        name={dataUser.name}
                        job={dataUser.detail_worker.job_desc}
                        location={dataUser.detail_worker.domisili}
                        tempKerja={dataUser.detail_worker.temp_kerja}
                        desc={dataUser.detail_worker.description}
                    />
                    {/* Button Hire */}
                    <Link href={`/edit-profile`}>
                        <div
                            className={
                                `flex justify-center px-32 py-4 my-4 text-base 
                                    font-semibold text-white rounded-md w-ful 
                                    hover:cursor-pointer bg-[#5E50A1]`
                            }
                        >
                            Edit
                        </div>
                    </Link>

                    <Skills />

                    {/* Contact */}
                    <div className="flex flex-col gap-3 text-[#9EA0A5] my-4">
                        <div className="flex items-center gap-3">
                            <div className="text-2xl"><MdOutlineMail /></div>
                            <p>Kokolopo321@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-2xl"><AiOutlineInstagram /></div>
                            <p>@Me_fah</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-2xl"><FiGithub /></div>
                            <p>@Kokolopo</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-2xl"><FiGitlab /></div>
                            <p>@Kokolopo</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Content */}
            <div className="py-2 shadow-md rounded-xl sm:w-[70%] sm:h-fit">
                <Tab portoLink={"/my-profile"} expeLink={"my-profile/experiences"} />
                {children}
            </div>
        </div>
    )
}