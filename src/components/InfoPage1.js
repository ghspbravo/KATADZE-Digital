import React from 'react'

import bgImage from '../resourses/infoPage1.png'

export default () => {
    return (
        <div className="row page-container">
            <div className="col-12 offset-lg-1 col-lg-5">
                <h1>Кто мы ?</h1>
                <p>Katadze digital в первую очередь - это сплоченная команда высококлассных специалистов,
                    способных решать задачи любой сложности в различных областях.
                    Мы любим свое дело и разрабатыватываем продукты такими, какими они должны быть.</p>
            </div>
            <div className="d-none d-lg-block col-lg-5 parallaxbg" style={{
                height: '500px',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'
            }}></div>
        </div>
    )
}
