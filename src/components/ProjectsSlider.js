// data

import { Swiper , SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {FreeMode, Pagination} from "swiper";
import ProjectCard from "@/components/Project Card";
import {useState} from "react";

const ProjectsSlider = ({data , skills}) => {

    return <Swiper
        breakpoints={{
            320 : {
                slidesPerView : 1,
                spaceBetween : 15,
            },
            640 : {
                slidesPerView : 3,
                spaceBetween : 15,
            }
        }}
        freeMode={true}
        pagination={{ clickable : true }}
        modules={[FreeMode , Pagination]}
        className='h-[280px] sm:h-[620px] md:w-[950px]'
    >
        {
            data?.map((item , index) => {
                return <SwiperSlide key={index}>
                    <div className='rounded-lg flex sm:flex-col gap-x-2 sm:gap-x-0 group transition-all duration-300'>
                        <ProjectCard skills={skills} data={item}/>
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>;
};

export default ProjectsSlider;
