import React from 'react'
import './miniblog.css'
import IMG1 from '../../assets/eyebrow1.png'
import IMG2 from '../../assets/eyebrow2.png'
import IMG3 from '../../assets/avatar1.png'
import IMG4 from '../../assets/avatar2.png'
import IMG5 from '../../assets/closed.png'
import IMG6 from '../../assets/kpop.png'
import IMG7 from '../../assets/choir.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";


const miniblogdata = [
    {
        image: IMG1,
        title: 'Got my eye brows done', 
        date: '12/27/22'
    },
    {
        image: IMG2,
        title: 'With her',
        date: '12/27/22'
    },
    {
        image: IMG3,
        title: 'Avatar 2',
        date: '12/18/22'
    },
    {
        image: IMG4,
        title: 'Four of us',
        date: '12/18/22'
    },
    {
        image: IMG5,
        title: 'Gym was closed because of snowstorm',
        date: '12/23/22'
    },
    {
        image: IMG6,
        title: 'A song that I like currently',
        date: '12/23/22'
    },
    {
        image: IMG7,
        title: 'After choir concert',
        date: '11/05/22'
    }
]
const Miniblog = () => {
    return (
        <section id='miniblog'>
            <h5>more about myself</h5>
            <h2>miniblog</h2>

            <Swiper pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            spaceBetween={40}
            className="container miniblog__container">
                {
                    miniblogdata.map(({image, title, date}, index) => {
                        return (
                            <SwiperSlide key={index} className="miniblog">
                                <div className="blog-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h5 className="blog__title">{title}</h5>
                                <small className="blog__date">{date}</small>
                            </SwiperSlide>
                        )
                    })
                }
            
            </Swiper>
        </section>
       
    )
}
export default Miniblog