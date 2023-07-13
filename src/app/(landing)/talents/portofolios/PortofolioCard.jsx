import Image from 'next/image'
import React from 'react'

const PortofolioCard = ({ img, title }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-1">
                <img src={img} alt={img} width={250} height={140} />
                <p className='hidden text-sm sm:block'>{title}</p>
            </div>
        </>
    )
}

export default PortofolioCard