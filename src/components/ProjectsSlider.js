// data
import {Swiper, SwiperSlide} from "swiper/react";
import {RxArrowRight} from "react-icons/rx";
import Image from "next/image";
import {Pagination} from "swiper/modules";

const projectSlides = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb4.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb2.jpg',
                },
                {
                    title: 'title',
                    path: '/thumb3.jpg',
                },
            ],
        },
    ],
};

const ProjectsSlider = () => {
    return <Swiper
        spaceBetween={10}
        pagination={{
            clickable: true
        }}
        modules={[Pagination]}
        className='h-[280px] sm:h-[480px]'
    >
        {
            projectSlides.slides.map((slide, index) => {
                return <SwiperSlide key={index}>
                    <div>
                        {
                            slide.images.map((image , index) => {
                                return <div>
                                    <div>
                                        <Image src={image.path} alt='' width={500} height={300}/>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>
};

export default ProjectsSlider;
