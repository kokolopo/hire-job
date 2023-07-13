import { cookies } from "next/headers";
import ExperienceCard from "../../talents/experiences/ExperienceCard";
import { redirect } from "next/navigation";
// import useUser from "../useUser";
// import { Spinner } from "@material-tailwind/react";

async function getData(API, token) {
    const res = await fetch(API, {
        cache: 'no-store',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Cookie": `accessToken=${token}`
        },
        credentials: "include",
    })

    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }

    return res.json()
}

export default async function Page() {
    // const { fetchData, userData } = useUser()
    // useEffect(() => {
    //     fetchData()
    // }, []);

    // if (!userData) {
    //     return (<Spinner />)
    // }

    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')
    if (!token) {
        return redirect('/login')
    }

    const data = await getData(`${process.env.API_URL}/experiences`, token.value)
    const dataExpe = data.data

    let dataKeys = Object.keys(dataExpe)

    // console.log(dataExpe);

    return (
        <div
            className={
                `flex flex-wrap items-center justify-center 
                    gap-3 mt-4 sm:items-start sm:justify-normal sm:px-7`
            }
        >
            {dataKeys.map((key) => {
                let item = dataExpe[key]
                return <ExperienceCard
                    company={item.company_name}
                    desc={item.description}
                    started={"10 Jul"}
                    end={"22 Ags"}
                    title={item.position}
                    total={"6 mounth"}
                />
            })}
        </div>
    )

}