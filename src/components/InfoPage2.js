import React from 'react'

import bgImage from '../resourses/infoPage2.png'

export default () => {
    return (
        <div className="row page-container">
            <div className="d-none d-lg-block offset-lg-1 col-lg-5 parallaxbg" style={{
                height: '500px',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left'
            }}></div>
            <div className="col-12 offset-lg-1 col-lg-4">
                <p className="lead">Мы просто делаем свою работу добросовестно.
                                    Искренне переживаем за ваше дело и стараемся помочь.</p>
            </div>
            <div className="col-12 offset-lg-1 col-lg-4" style={{position: 'absolute', bottom: '5%'}}><p>
                Ищем смысл анализируя, заботимся об эстетике отсекая лишнее, вдохновляем на изменения
            </p></div>
        </div>
    )
}
