'use client'
const Button = (props) => {
    const { children , icon , classes } = props

    let className = `rounded ${classes} `

    return (
        <button
            {...props}
            className={className}>
            <div className='inline-flex items-center p-1.5 rounded font-semibold text-center hover:opacity-60 transition-all duration-300'>
                <spna>{icon}</spna>
                <span className='pl-1'>{children}</span>
            </div>
        </button>
    )
}
export default Button
