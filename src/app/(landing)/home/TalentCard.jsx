import React from 'react'
import { FiMapPin } from "react-icons/fi";
import Image from 'next/image';

const TalentCard = ({ name = "Thomas Jude", job = "Full-Stack Dev", location = "New York", image = "/images/opinion3.png" }) => {
    return (
        <>
            <div
                className={
                    `flex flex-col items-center justify-center
                     px-4 shadow-md w-fit py-9 rounded-xl space-y-3
                     sm:w-full sm:flex-row sm:justify-between`
                }
            >

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4">
                    <div className="rounded-full">
                        <img src={image} alt='avatar' height="100" width="100" />
                        {/* <Image src="/images/opinion3.png" alt='avatar' height="100" width="100" /> */}
                    </div>

                    <div className='flex flex-col items-center space-y-2 leading-3 sm:items-start'>
                        {/* <p className='font-semibold'>Louis Tomlinson</p> */}
                        <p className='font-semibold'>{name}</p>
                        <p className='text-sm text-[#9EA0A5]'>{job}</p>
                        {/* <p className='text-sm text-[#9EA0A5]'>Web developer</p> */}

                        <div className='flex gap-2 items-center text-sm text-[#9EA0A5]'>
                            <FiMapPin />
                            <p>{location}</p>
                        </div>

                        <div className="hidden space-x-3 sm:flex">
                            <div className='skill'>PHP</div>
                            <div className='skill'>JavaScript</div>
                            <div className='skill'>HTML</div>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <button className='px-5 py-2 text-white rounded-lg bg-primaryColor'>Lihat Profile</button>
                </div>
            </div>
        </>
    )
}

export default TalentCard