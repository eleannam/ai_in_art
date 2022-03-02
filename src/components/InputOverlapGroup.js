import ContactForm from './ContactForm'
import InputComponent from './InputComponent' 

function InputOverlapGroup({label, className, inputName, inputPlaceholder, inputType, inputRequired, checkboxLabel, linkLabel, onChange }) {
    return (
        <div className='label-input-group'>
            { label && <label>{label}</label> }
            <div className={`overlap-group-form- ${className || ''}`}>
                <InputComponent
                    className={`enter-your-${inputName==='message' ? 'message' : ''}${inputType==='checkbox' ? 'checkbox' : ''} poppins-thin-white-24px`}
                    inputName={inputName}
                    inputPlaceholder={inputPlaceholder}
                    inputType={inputType}
                    inputRequired={inputRequired}
                    checkboxLabel={checkboxLabel}
                    linkLabel={linkLabel}
                    onChange={onChange}
                />
                <div className={`rectangle-${inputName==='message' ? 'message' : ''} fun-blue-border-4px`}></div>
            </div>
        </div>
    )
}

export default InputOverlapGroup
