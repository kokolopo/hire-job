import { Input } from "@material-tailwind/react";

const FieldInput = ({ label, placeHolder, value, setter }) => {
    return (
        <div className="w-full">
            <Input
                className=""
                label={label}
                value={value}
                onChange={setter}
            // placeholder={placeHolder}
            />
        </div>
    )
}

export default FieldInput