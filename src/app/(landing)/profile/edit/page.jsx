"use client"

import { useEffect } from "react";
import useUser from "../../my-profile/useUser";
import FormEditProfile from "./FormEditProfile";
import ProfileCard from "./ProfileCard";
import { Spinner } from "@material-tailwind/react";

export default function Page() {
    const { fetchData, userData } = useUser()
    useEffect(() => {
        fetchData()
    }, []);

    if (!userData) {
        return (<Spinner />)
    }

    // console.log(userData);
    return (
        <div className="flex flex-col gap-5 px-5 py-20 sm:flex-row sm:gap-12 sm:px-32">
            <ProfileCard
                photo={userData.data.photo}
                name={userData.data.name}
                job={userData.data.detail_worker.job_desc}
                location={userData.data.detail_worker.domisili}
            />
            <FormEditProfile />
        </div>
    )
}