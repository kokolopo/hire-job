const FieldInput = ({ title, type, name, placeholder, value, setter }) => {
    return (
        <>
            <div className="relative w-full focus-within:text-primary">
                <label className="text-xs text-secondaryText">{title}
                    <input type={type} name={name}
                        className="shadow-md py-[10px] min-w-full mt-1 text-sm
                            placeholder:text-gray-400 rounded-[6px] 
                            pl-5 focus:outline-primary focus:outline-none bg-white"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        required
                    />
                </label>
            </div>
        </>
    )
}

export default FieldInput