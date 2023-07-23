'use client'

const TooltipBottom = ({content , title , position}) => {

    return (
        <div className="group flex relative">
                        <span className='text-4xl xl:text-3xl w-1/3 hover:text-accent transition-all duration-300'>
                          {content}
                        </span>
            <span
                className={`xl:group-hover:opacity-100 z-10 transition-opacity bg-white px-2 text-sm text-primary ${position === 'top' && '-top-16'} rounded-sm absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto inline-block min-w-max`}>
                                {title}
                            </span>
        </div>
    )
}
export default TooltipBottom
