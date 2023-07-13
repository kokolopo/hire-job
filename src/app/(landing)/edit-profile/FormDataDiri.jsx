import React, { useEffect, useState } from 'react'
import FieldInput from '../profile/edit/FieldInput'
import { Spinner, Textarea } from '@material-tailwind/react'
import Link from 'next/link'
import useEditWorker from './useEditWorker'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'

const FormDataDiri = ({ API, JWT, profile }) => {
    const { updateProfile, loading } = useEditWorker()

    const [name, setName] = useState(profile.name)
    const [jobDesc, setJobDesc] = useState(profile.detail_worker.job_desc)
    const [domisili, setDomisili] = useState(profile.detail_worker.domisili)
    const [tempKerja, setTempKerja] = useState(profile.detail_worker.temp_kerja)
    const [description, setDescription] = useState(profile.detail_worker.description)

    console.log(profile);

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        const input = { name, job_desc: jobDesc, domisili, temp_kerja: tempKerja, description }

        updateProfile(API + '/workers/profile', JWT, input)
        setTimeout(() => router.push('/my-profile'), 1500)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-2/3"
        >

            <div
                className="flex flex-col px-6 py-10 space-y-4 rounded-lg shadow-md "
            >
                <div className="border-b">Data Diri</div>

                <FieldInput label={"Nama Lengkap"} value={name} setter={e => setName(e.target.value)} />
                <FieldInput label={"Job Desc"} value={jobDesc} setter={e => setJobDesc(e.target.value)} />
                <FieldInput label={"Domisili"} value={domisili} setter={e => setDomisili(e.target.value)} />
                <FieldInput label={"Tempat Kerja"} value={tempKerja} setter={e => setTempKerja(e.target.value)} />
                <div className="w-full">
                    <Textarea label="Deskripsi singkat" value={description} onChange={e => setDescription(e.target.value)} />
                </div>

            </div>

            {loading ? <div className="flex justify-center ">
                <Spinner className="w-8 h-8" />
            </div> :
                <div className="flex flex-col gap-2 mt-5 space-y-2">
                    <div onClick={handleSubmit} className="bg-[#5E50A1] text-white py-2 text-center rounded-lg hover:cursor-pointer">Simpan</div>
                    <Link href={"/my-profile"} className="text-[#5E50A1] text-center py-2 rounded-lg bg-white border border-[#5E50A1]">Batal</Link>
                </div>
            }
        </form>
    )
}

export default FormDataDiri