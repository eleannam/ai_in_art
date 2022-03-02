function InputComponent({ inputName, inputType, inputPlaceholder, inputRequired, className, checkboxLabel, onChange }) {

    return (
        <div>
            { inputType ==='textarea' ?
             (<TextAreaInputField
                className={className}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                inputRequired={inputRequired}
                onChange={onChange} />) :
                (<InputField
                className={className}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                inputType={inputType}
                inputRequired={inputRequired}
                onChange={onChange} />)
            }
            { inputType === 'checkbox' ?
                (<label htmlFor={inputName}>
                   <h>{checkboxLabel}</h>
                 </label>) : <></>
            } 
        </div>
    )
}

function TextAreaInputField({ inputName, inputPlaceholder, inputRequired, className, onChange }) {
    return (
        <textarea
                className={className}
                name={inputName}
                placeholder={inputPlaceholder}
                required={inputRequired}
                onChange={onChange} />
    )
}

function InputField({ inputName, inputType, inputPlaceholder, inputRequired, className, onChange }) {
    return (
        <input
                className={className}
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
                onChange={onChange} />
    )
}

export default InputComponent
