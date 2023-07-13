"use client"

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ setStart, setEnd }) => {

    const [value, setValue] = useState({

        startDate: new Date(),
        endDate: new Date().setMonth(11)

    });


    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setStart(newValue.startDate)
        setEnd(newValue.endDate)
        setValue(newValue);

    }

    return (
        <Datepicker
            value={value}
            onChange={handleValueChange}
        />

    );
};
export default DatePicker;