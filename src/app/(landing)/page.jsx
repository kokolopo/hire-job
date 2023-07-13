import Image from "next/image"
import CarouselOpinion from "./CarouselOpinion"
import Link from "next/link"
import { redirect } from "next/navigation"
import { cookies } from "next/headers";

export default async function page() {
    const token = cookies().get('accessToken')

    if (!token) {
        return redirect('/login')
    }

    return (
        <>
            <div className="px-7">
                {/* screen1 */}
                <div className="mb-12 sm:flex">
                    <div className="w-full sm:w-1/2 sm:h-[90vh] sm:p-12 sm:items-center sm:justify-center flex">
                        <div className='flex flex-col space-y-5'>
                            <div className="w-[75%]">
                                <p className='text-4xl text-[#1F2A36] font-semibold leading-tight'>Talenta terbaik negri untuk perubahan revolusi 4.0</p>
                            </div>
                            <div className="w-[90%]">
                                <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                            </div>
                            <Link href={"/home"}>
                                <button
                                    className='text-white bg-[#5E50A1] w-fit px-6 py-[22px] rounded-lg'
                                >
                                    Mulai Dari Sekarang
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Gambar */}
                    <div className="hidden w-1/2 p-14 sm:block">
                        <div className="relative w-full h-full ">
                            <Image src={"/images/Landing1.png"} alt="landing1" fill />
                        </div>
                    </div>
                </div>

                {/* screen2 */}
                <div className="mb-12 sm:flex">
                    {/* gambar */}
                    <div className="hidden w-1/2 h-[70vh] px-14 sm:block">
                        <div className="relative w-full h-full ">
                            <Image src={"/images/landing2.png"} alt="landing1" fill />
                        </div>
                    </div>

                    {/* content */}
                    <div className="flex flex-col mt-6 sm:justify-center space-y-7 sm:w-1/2">
                        <div className='flex flex-col space-y-5'>
                            <p className='text-4xl text-[#1F2A36] font-semibold'>Kenapa harus mencari tallent di peworld</p>

                            <ul
                                className='space-y-5 text-base text-gray-500 list-image-none'
                            >
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklistLogo.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklistLogo.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklistLogo.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Lorem ipsum dolor sit amet.
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklistLogo.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Lorem ipsum dolor sit amet.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* screen3 */}
                <div className="flex mb-12">
                    {/* content */}
                    <div className="flex flex-col sm:justify-center sm:px-10 space-y-7 sm:w-1/2">
                        <div className=''>
                            <p className='text-4xl text-[#1F2A36] font-semibold leading-3'>Skill Tallent</p>
                        </div>

                        <div className=''>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        </div>

                        <div className="flex justify-between text-gray-500 sm:w-3/4">
                            <ul className='space-y-5 text-base list-image-none'>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Java
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Kotlin
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    PHP
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    JavaScript
                                </li>
                            </ul>

                            <ul className='space-y-5 text-base list-image-none'>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Golang
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    C++
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    Ruby
                                </li>
                                <li className='flex gap-3'>
                                    <Image
                                        src={"images/checklist2.svg"} alt="ceklis"
                                        width={20} height={20}
                                    />
                                    10+ Bahasa lainnya
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* gambar */}
                    <div className="hidden w-1/2 h-[70vh] px-14 sm:block">
                        <div className="relative w-full h-full ">
                            <Image src={"/images/landing3.png"} alt="landing1" fill />
                        </div>
                    </div>
                </div>

            </div>
            {/* screen4 */}
            <div className="mb-12">
                <div className="flex-col h-full px-3 space-y-5 ">
                    <div className="text-4xl text-[#1F2A36] font-semibold text-center">
                        <p>Their opinion about peworld</p>
                    </div>

                    <CarouselOpinion />
                </div>
            </div>

            {/* screen5 */}
            <div className="flex items-center justify-center py-7 sm:px-12">
                <div
                    className={
                        `bg-[#5E50A1] flex flex-col items-center
            w-fit py-11 px-11 rounded-ss-[40px] rounded-ee-[40px]
            sm:w-full sm:flex-row sm:justify-between`
                    }
                >
                    <p className="text-white sm:text-2xl sm:w-52">Lorem ipsum dolor sit amet</p>

                    <button
                        className="text-[#5E50A1] w-40 h-fit px-6 py-[22px] bg-white rounded-md font-semibold sm:w-52"
                    >
                        Mulai Dari Sekarang
                    </button>
                </div>
            </div>
        </>
    )
}