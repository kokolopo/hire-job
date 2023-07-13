import Image from 'next/image'
import React from 'react'

const ExperienceCard = ({ img, title, company, started, end, total, desc }) => {
    return (
        <>
            <div className="flex w-full gap-4">
                <div className="pl-4 sm:pl-0">
                    <Image src={'/images/tokped.png'} alt="gambar" width={75} height={75} />
                </div>

                <div className="flex flex-col border-b border-[#E2E5ED] w-full">
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-lg text-[#46505C]'>{company}</p>
                    <p className='text-[16px] text-[#9EA0A5]'>{started}-{end} <span>{total}</span></p>
                    <p className='my-4 text-sm'>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard