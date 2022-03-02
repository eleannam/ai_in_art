function Button({ label, className, onClick, type }) {
    return (
        <button 
            className={className} 
            onClick={onClick} 
            type={type}>{label}
        </button>
    )
}

export default Button
