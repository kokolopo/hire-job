'use client'

import { useParams } from "next/navigation";
import ExperienceCard from "../ExperienceCard";
import { getCookie } from "cookies-next";
import useEditWorker from "@/app/(landing)/edit-profile/useEditWorker";
import { useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

export default function page() {
    const params = useParams()
    const { id } = params

    const token = getCookie('accessToken')

    const { fetchProfile, profile } = useEditWorker()

    useEffect(() => {
        fetchProfile(`http://103.214.113.5:5000/workers/${id}`, token)
    }, [])

    let dataKeys = Object.keys(profile.experience)

    if (!profile) {
        return (<Spinner />)
    }
    return (
        <div
            className={
                `flex flex-wrap items-center justify-center 
                    gap-3 mt-4 sm:items-start sm:justify-normal sm:px-7`
            }
        >
            {dataKeys.map((key) => {
                let item = profile.experience[key]
                return <ExperienceCard
                    company={item.company_name}
                    desc={item.description}
                    started={"10 Jul"}
                    end={"22 Ags"}
                    title={item.position}
                    total={"6 mounth"}
                    key={item.id}
                />
            })}
            {/* <ExperienceCard
                company={"Tokopedia"}
                desc={"Membuat Aplikasi"}
                started={"10 Jul"}
                end={"22 Ags"}
                title={"Fullstack"}
                total={"6 mounth"}
            />
            <ExperienceCard
                company={"Tokopedia"}
                desc={"Membuat Aplikasi"}
                started={"10 Jul"}
                end={"22 Ags"}
                title={"Fullstack"}
                total={"6 mounth"}
            /> */}
        </div>
    )
}