'use client'

const Button = (props) => {
    const { children , icon } = props

    return (
        <button
            {...props}
            className="text-accent font-semibold flex items-center w-[100%]">
            <spna>{icon}</spna>
            <span className='pl-1'>{children}</span>
        </button>
    )
}
export default Button
