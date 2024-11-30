import React from 'react'

const Home = () => {
    return (
        <section className='w-full' id='home'>
            <h1
                className='text-[#fc6011] font-bold text-center text-lg md:text-3xl mt-5'
            >
                مع توصيلات التوصيل صار اسهل و اسرع
            </h1>
            <ul
                className='mt-3 flex flex-col justify-center items-center'
            >
                <li
                    className='my-0.5'
                >توصيلات هو التطبيق الامثل</li>
                <li
                    className='my-0.5'
                >لتوصيل الطعام من المطاعم</li>
                <li
                    className='my-0.5'
                >المفضلة اليك</li>
                <li
                    className='my-0.5'
                >بسرعة و امان جربه الان</li>
            </ul>
        </section>
    )
}

export default Home