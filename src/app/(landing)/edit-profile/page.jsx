import ProfileCard from "../profile/edit/ProfileCard";
import FormEditProfile from "./FormEditProfile";
import { cookies } from "next/headers";

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

export default async function page() {
    // const { fetchData, userData } = useUser()
    // useEffect(() => {
    //     fetchData()
    // }, []);

    // if (!userData) {
    //     return (<Spinner />)
    // }

    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')
    const userId = cookieStore.get('userId')
    const data = await getData(`${process.env.API_URL}/workers/${userId.value}`, token.value)

    const userData = data.data

    return (
        <div className="flex flex-col gap-5 px-5 py-20 sm:flex-row sm:justify-between sm:px-32">
            <ProfileCard
                photo={userData.photo}
                name={userData.name}
                job={userData.detail_worker.job_desc}
                location={userData.detail_worker.domisili}
            />
            <FormEditProfile token={token.value} api={'http://103.214.113.5:5000'} />
        </div>
    )
}