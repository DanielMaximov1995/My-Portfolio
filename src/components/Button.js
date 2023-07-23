'use client'

const Button = (props) => {
    const { children , icon } = props

    return (
        <button
            {...props}
            className="bg-accent hover:bg-accent/60 text-customBlue font-bold py-1 px-2 rounded inline-flex items-center">
            <spna>{icon}</spna>
            <span className='pl-1'>{children}</span>
        </button>
    )
}
export default Button
