import React from 'react'
import Image from "next/image";
import { FiEdit2, FiMapPin } from "react-icons/fi";

const ProfileCard = ({ photo = '/images/opinion2.png', name, job, location }) => {
    return (
        <>
            <div
                className="flex flex-col items-center w-full px-5 space-y-3 bg-white rounded-lg shadow-md h-fit sm:justify-center py-7 sm:w-fit "
            >
                <div className="">
                    <img
                        src={photo} alt="avatar"
                        width={100} height={100}
                    />
                </div>
                <div className="flex items-center gap-1 text-sm text-center text-gray-400">
                    <FiEdit2 className="text-xs" />
                    <div>Edit</div>
                </div>
                <div>{name}</div>
                <div className="text-sm font-light">{job}</div>
                <div className="flex items-center gap-1 text-sm font-light text-gray-400">
                    <FiMapPin />
                    <div>{location}</div>
                </div>
            </div>

        </>
    )
}

export default ProfileCard