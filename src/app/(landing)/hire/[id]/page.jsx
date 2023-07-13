import { LuMapPin } from "react-icons/lu";
import { cookies } from "next/headers";
import FormHiring from "../FormHiring";

const getData = async (token, id) => {
    const response = await fetch(`http://103.214.113.5:5000/workers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const data = await response.json();
    return data;
}

export default async function Hire({ params }) {
    const { id } = params

    const cookieStore = cookies()
    const token = cookieStore.get('accessToken')
    // console.log(token.value);
    if (!token) {
        return redirect('/login')
    }

    const worker = await getData(token.value, id)

    let dataKeys = Object.keys(worker.data.skill)

    return (
        <div className="py-5 sm:flex sm:px-12">
            {/* detail talent */}
            <div className="w-[30%] h-fit bg-white shadow-md rounded-md py-4 hidden sm:block">
                {/* Avatar */}
                <div className="flex flex-col items-center my-4">
                    <div className="avatar">
                        <div className="rounded-full">
                            <img src={worker.data.photo} alt='avatar' width={150} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-7">
                    {/* About */}
                    <div className='flex flex-col my-4 space-y-2'>
                        <div className="text-2xl font-semibold">{worker.data.name}</div>
                        <div className="text-sm">{worker.data.detail_worker.job_desc}</div>
                        <div className='flex gap-1 items-center text-sm text-[#9EA0A5]'>
                            <LuMapPin />
                            <p>{worker.data.detail_worker.domisili}</p>
                        </div>
                        <div className="text-sm text-[#9EA0A5]">{worker.data.detail_worker.temp_kerja}</div>

                        <div className="text-sm text-[#9EA0A5] text-justify">
                            <p>{worker.data.detail_worker.description}</p>
                        </div>
                    </div>

                    {/* Skill */}
                    <div className="flex flex-col gap-3 my-4">
                        <p className='text-xl font-semibold'>Skill</p>

                        <div className='flex flex-wrap w-full gap-2'>
                            {dataKeys.map((key) => {
                                let item = worker.data.skill[key]
                                return <div key={item.id} className='skill'>{item.name}</div>
                            })}
                        </div>
                    </div>

                </div>

            </div>

            {/* form */}
            <div className="h-fit py-4 px-[30px]">
                <div className='flex flex-col gap-3'>
                    <p className='text-3xl font-semibold'>Hubungi {worker.data.name}</p>
                    <p className='text-[#46505C]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>

                {/* FormHiring */}
                <FormHiring id={id} token={token.value} />
            </div>
        </div>
    )
}