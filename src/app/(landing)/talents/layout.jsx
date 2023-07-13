'use client'

import React, { useEffect } from 'react'
import Avatar from './Avatar'
import About from './About'
import Link from 'next/link'
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGitlab, FiGithub } from "react-icons/fi";
import Tab from './Tab';
import { useParams } from 'next/navigation';
import useEditWorker from '../edit-profile/useEditWorker'
import { getCookie } from 'cookies-next'
import { Spinner } from '@material-tailwind/react'

const layout = ({ children }) => {
    const params = useParams()
    const { id } = params
    const token = getCookie('accessToken')

    const { fetchProfile, profile } = useEditWorker()

    useEffect(() => {
        fetchProfile(`http://103.214.113.5:5000/workers/${id}`, token)
    }, [])


    if (!profile) {
        return (<Spinner />)
    }
    let dataKeys = Object.keys(profile.skill)
    return (
        <div className="my-5 sm:py-7 sm:px-12 px-7 sm:flex sm:gap-7">
            {/* Detail Talent */}
            <div className="py-4 bg-white shadow-md rounded-xl sm:w-[30%]">
                <Avatar url={profile.photo} />

                <div className="flex flex-col px-7">
                    {/* About */}
                    <About
                        name={profile.name}
                        job={profile.detail_worker.job_desc}
                        location={profile.detail_worker.domisili}
                        tempKerja={profile.detail_worker.temp_kerja}
                        desc={profile.detail_worker.description}
                    />

                    {/* Button Hire */}
                    <Link href={`/hire/${id}`}>
                        <div
                            className={
                                `flex justify-center px-32 py-4 my-4 text-base 
                                    font-semibold text-white rounded-md w-ful 
                                    hover:cursor-pointer bg-[#5E50A1]`
                            }
                        >
                            Hire
                        </div>
                    </Link>

                    {/* Skill */}
                    <div className="flex flex-col gap-3 my-4">
                        <p className='text-xl font-semibold'>Skill</p>

                        <div className='flex flex-wrap w-full gap-2'>

                            {dataKeys.map((key) => {
                                let item = profile.skill[key]
                                return <div key={item.id} className='skill'>{item.name}</div>
                            })}
                            {/* <div className='skill'>Phyton</div>
                            <div className='skill'>Laravel</div>
                            <div className='skill'>Golang</div>
                            <div className='skill'>JavaScript</div>
                            <div className='skill'>PHP</div>
                            <div className='skill'>HTML</div>
                            <div className='skill'>C++</div>
                            <div className='skill'>Kotlin</div>
                            <div className='skill'>Swift</div> */}
                        </div>
                    </div>

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
                <Tab portoLink={`/talents/portofolios/${id}`} expeLink={`/talents/experiences/${id}`} />
                {children}
            </div>
        </div>
    )
}

export default layout