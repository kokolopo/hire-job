"use client"

import React, { useEffect } from 'react'
import FormSkill from './FormSkill'
import FormPortofolio from './FormPortofolio'
import FormExperience from './FormExperience'
import FormDataDiri from './FormDataDiri'
import { getCookie } from 'cookies-next'
import useEditWorker from './useEditWorker'
import { Spinner } from '@material-tailwind/react'

const FormEditProfile = ({ token, api }) => {
    const { profile, fetchProfile } = useEditWorker()
    const id = getCookie('userId')
    useEffect(() => {
        fetchProfile(`${api}/workers/${id}`, token)
    }, [])

    setTimeout(() => { }, 1500)
    return (
        <div className='flex flex-col w-[60vw]'>
            {
                profile ? <FormDataDiri API={api} JWT={token} profile={profile} /> : <div className="flex justify-center w-full"><Spinner /></div>
            }



            <FormSkill API={api + '/skills'} JWT={token} />

            <FormExperience API={api + '/experiences'} JWT={token} />

            <FormPortofolio API={api + '/portofolios'} JWT={token} />
        </div>
    )
}

export default FormEditProfile