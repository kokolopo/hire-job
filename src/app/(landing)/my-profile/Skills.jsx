
import { cookies } from 'next/headers'
import useUser from './useUser'
// import { Spinner } from '@material-tailwind/react'

async function getData(API, token) {
    const res = await fetch(API, {
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

const Skills = async () => {
    // const { fetchSkill, skill } = useUser()

    // useEffect(() => {
    //     fetchSkill('http://103.214.113.5:5000/skills', token)
    // }, [])
    // if (!skill) {
    //     return (<Spinner />)
    // }

    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')

    const data = await getData(`${process.env.API_URL}/skills`, token.value)

    const dataSkill = data.data

    let dataKeys = Object.keys(dataSkill)

    return (
        <div className="flex flex-col gap-3 my-4">
            <p className='text-xl font-semibold'>Skill</p>

            <div className='flex flex-wrap w-full gap-2'>
                {dataKeys.map((key) => {
                    let item = dataSkill[key]
                    return <div key={item.id} className='skill'>{item.name}</div>
                })}

            </div>
        </div>
    )
}

export default Skills