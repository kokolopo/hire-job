import Image from 'next/image'
import React from 'react'

const Avatar = ({ url }) => {
    return (
        <div className="flex flex-col items-center my-4">
            <div className="avatar">
                <div className="rounded-full">
                    <img src={url} alt='avatar' width={100} height={100} />
                </div>
            </div>
        </div>
    )
}

export default Avatar