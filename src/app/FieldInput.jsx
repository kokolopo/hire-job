'use client'

import React from 'react'

const FieldInput = ({ title, type, name, placeholder, value, setter }) => {
    return (
        <>
            <div className="relative w-full focus-within:text-primary">
                <label className="text-xs text-secondaryText">{title}
                    <input
                        className="shadow-md py-[10px] min-w-full mt-1 text-sm
                            placeholder:text-gray-400 rounded-[6px] 
                            pl-5 focus:outline-primary focus:outline-none bg-white"
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        required
                        autoComplete='false'
                    />
                </label>
            </div>
        </>
    )
}

export default FieldInput