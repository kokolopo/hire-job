import PortofolioCard from "../PortofolioCard";
import useEditWorker from "@/app/(landing)/edit-profile/useEditWorker";
import { cookies } from "next/headers";

async function getData(API, token) {
    const res = await fetch(API, {
        next: { revalidate: 10 },
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

export default async function page({ params }) {
    const { id } = params
    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')

    const data = await getData(`${process.env.API_URL}/workers/${id}`, token.value)

    let dataKeys = Object.keys(data.data.portofolio)

    return (
        <div
            className={
                `flex flex-wrap items-center justify-center 
                        gap-3 mt-4 sm:items-start sm:justify-normal sm:px-7`
            }
        >
            {dataKeys.map((key) => {
                let item = data.data.portofolio[key]
                return <PortofolioCard img={item.screen_shot} title={item.app_name} key={item.id} />
            })}
        </div>
    )
}