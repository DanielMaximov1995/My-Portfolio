'use client'

import TooltipBottom from "@/components/TooltipBottom";

const SkillContent = (props) => {
    const { setIndex , index , indexComp , title , data } = props

    return (
        <div>
            <div
                className={`${index === indexComp && 'text-accent after:bg-red-600 after:transition-all after:duration-300'} relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            >
                <p className={`${index === indexComp && 'text-red-600 after:bg-red-600 after:transition-all after:duration-300'} text-white font-medium xl:text-lg`}>{title}</p>
                <div>
                </div>

            </div>
            <div
                className='my-5 flex flex-wrap items-center gap-x-5'
                onMouseEnter={() => setIndex(indexComp)}
                onMouseLeave={() => setIndex(null)}
            >
                {data.map((frontSkill, frontIndex) => {
                    return <div key={frontIndex}>
                        <TooltipBottom title={frontSkill.name} content={frontSkill.icon}/>
                    </div>
                })}
            </div>
        </div>
    )
}
export default SkillContent
