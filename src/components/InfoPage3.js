import React from 'react'

import bgImage from '../resourses/infoPage3.png'

export default () => {
    return (
        <div className="row page-container">
            <div className="offset-lg-1 col-lg-5">
                <h1>В чем сила?</h1>
                <p>Мы ставим пользовательский опыт превыше всего —
                    и тестируем десятки гипотез перед тем, как предложить клиенту первую концепцию.
                    Идея становится интерактивным прототипом, а затем готовым продуктом.</p>
            </div>
            <div className="col-lg-5 parallaxbg" style={{
                height: '500px',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'
            }}></div>
        </div>
    )
}
