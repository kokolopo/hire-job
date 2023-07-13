"use client"

import React, { useState } from 'react'
import FieldInput from '../profile/edit/FieldInput'
import { Button } from '@material-tailwind/react'
import useEditWorker from './useEditWorker'
import { useRouter } from 'next/navigation'

const FormSkill = ({ API, JWT }) => {
    const [skill, setSkill] = useState('')
    const {
        responseAPI,
        responseStatus,
        error,
        addSkill
    } = useEditWorker()

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const inp = { name: skill }

        addSkill(API, JWT, inp)
        setTimeout(() => router.push('/my-profile'), 1500)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-2/3 mt-7"
        >
            <div
                className="flex flex-col px-6 py-10 space-y-4 rounded-lg shadow-md "
            >
                <div className="border-b">Skill</div>

                <div className="flex flex-col gap-2 sm:flex-row">
                    <FieldInput label={"Skill"} value={skill} setter={(e) => setSkill(e.target.value)} />
                    <Button color="amber" className='text-white' onClick={handleSubmit}>Simpan</Button>
                </div>
            </div>
        </form>
    )
}

export default FormSkill