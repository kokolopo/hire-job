import React, { useState } from 'react'
import FieldInput from '../profile/edit/FieldInput'
import DatePicker from './DatePicker'
import { Button, Spinner, Textarea } from '@material-tailwind/react'
import useEditWorker from './useEditWorker'
import { useRouter } from 'next/navigation'

const FormExperience = ({ API, JWT }) => {
    const [position, setPosition] = useState('')
    const [comapany, setCompany] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    const { addExperience, loading, responseAPI } = useEditWorker()

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        const input = {
            position, company_name: comapany,
            start_date: startDate, end_date: endDate, description
        }
        console.log(input);
        addExperience(API, JWT, input)
        setTimeout(() => router.push('/my-profile/experiences'), 1500)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-2/3 mt-7"
        >
            <div
                className="flex flex-col px-6 py-10 space-y-4 rounded-lg shadow-md "
            >
                <div className="border-b">Pengalaman kerja</div>

                <FieldInput label={"Posisi"} value={position} setter={e => setPosition(e.target.value)} />
                <FieldInput label={"Nama Perusahaan"} value={comapany} setter={e => setCompany(e.target.value)} />
                <div className="flex gap-2">
                    <DatePicker setStart={setStartDate} setEnd={setEndDate} />
                </div>
                <div className="w-full">
                    <Textarea label="Deskripsi singkat" value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                {loading ? <div className="flex justify-center ">
                    <Spinner className="w-8 h-8" />
                </div> :
                    <Button onClick={handleSubmit}
                        color="amber" variant="outlined" className='font-semibold text-amber-500'
                    >Tambah pengalaman kerja</Button>
                }
            </div>
        </form>
    )
}

export default FormExperience