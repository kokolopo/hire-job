import PortofolioCard from "../talents/portofolios/PortofolioCard";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import DeleteDialog from "./DeleteDialog";

async function getData(API, token) {
    const res = await fetch(API, {
        // next: { revalidate: 5 },
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Cookie": `accessToken=${token}`
        },
        credentials: "include",
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')

    if (!token) {
        return redirect('/login')
    }

    const data = await getData(process.env.API_URL + '/portofolios', token.value)

    const dataPorto = data.data

    let dataKeys = Object.keys(dataPorto)
    // console.log(data.data);

    // console.log(process.env.API_URL);
    // const { fetchData, userData } = useUser()
    // useEffect(() => {
    //     fetchData()
    // }, []);
    // console.log(userData);

    // if (!userData) {
    //     return (<Spinner />)
    // }

    return (
        <div
            className={
                `flex flex-wrap items-center justify-center 
                    gap-3 mt-4 sm:items-start sm:justify-normal sm:px-7`
            }
        >
            {dataKeys.map((key) => {
                let item = dataPorto[key]
                return <DeleteDialog portoId={item.id} key={item.id}>
                    <PortofolioCard img={item.screen_shot} title={item.app_name} key={item.id} />
                </DeleteDialog>
            })}


        </div>
    )
}