import React, { Component } from 'react'
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll'

export default class main extends Component {
    render() {
        return (
            <ScrollContainer>
                <ScrollSection className='logo' pageId={0}>
                    <div className="logo">
                        <span>Katadze</span>
                        <span>Digital</span>
                        <span>agency</span>
                    </div>
                </ScrollSection>
                <ScrollSection pageId={1}>
                    <div className="title">Кто?</div>
                    <div className="description">
                        <p>
                            Katadze digital в первую очередь - это сплоченная команда высококлассных специалистов, способных решать задачи любой сложности
                            в различных областях.
              <br />
                            <br /> Мы любим свое дело и разрабатыватываем продукты такими, какими они должны быть.
                </p>
                    </div>
                </ScrollSection>
                <ScrollSection pageId={2}>
                    <div className="title right-title">Почему?</div>
                    <div className="description">
                        <p>
                            Мы просто делаем свою работу добросовестно. Искренне переживаем за ваше дело и стараемся помочь.
              <br />
                            <br /> Ищем смысл анализируя, заботимся об эстетике отсекая лишнее, вдохновляем на изменения
                </p>
                    </div>
                </ScrollSection>
                <ScrollSection pageId={3}>
                    <div className="title">Клиенты <span>Большинство наших клиентов - это стартапы поэтому о некоторых из них вы еще не слышали, но скоро это измениться.</span></div>
                    <div className="description">
                        <div className="clients-container">
                            <div className="client-logo">
                                <img src="http://via.placeholder.com/120" />
                            </div>
                            <div className="client-logo">
                                <img src="http://via.placeholder.com/120" />
                            </div>
                            <div className="client-logo">
                                <img src="http://via.placeholder.com/120" />
                            </div>
                            <div className="client-logo">
                                <img src="http://via.placeholder.com/120" />
                            </div>
                            <div className="client-logo">
                                <img src="http://via.placeholder.com/120" />
                            </div>
                            <div className="client-logo">
                                <img src="http://via.placeholder.com/120" />
                            </div>
                        </div>
                    </div>
                </ScrollSection>
                <ScrollSection pageId={4}>
                    <div className="title">В чем сила?</div>
                    <div className="description">
                        <p>
                            Мы ставим пользовательский опыт превыше всего — и тестируем десятки гипотез перед тем, как предложить клиенту первую концепцию.
                            Идея становится интерактивным прототипом, а затем готовым продуктом.
                </p>
                        <div className="servises">
                            <div className="offer">
                                <h3>Разработка</h3>
                                <ul>
                                    <li>Веб-сайты</li>
                                    <li>Приложения</li>
                                    <li>Боты</li>
                                    <li>Плагины</li>
                                </ul>
                            </div>
                            <div className="offer">
                                <h3>Дизайн</h3>
                                <ul>
                                    <li>Логотипы</li>
                                    <li>Интерфейсы</li>
                                    <li>Бизнес-презентации</li>
                                    <li>Любые продукты</li>
                                </ul>
                            </div>
                            <div className="offer">
                                <h3>Спецпроекты</h3>
                                <ul>
                                    <li>Брендинг</li>
                                    <li>Поддержка и развитие сайтов</li>
                                    <li>Работа с блогерами</li>
                                    <li>Видеосъемка</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollSection>
                <ScrollSection pageId={5}>
                    <div className="title right-title">Контакты</div>
                    <div className="description">
                        <p>
                            Откладывая вопрос с сайтом, вы стоите на месте. А это равнозначно регрессу.
              <br />
                            <br />Мы и есть решение. Делаем больше, чем от нас ожидают.
                </p>
                    </div>
                </ScrollSection>
            </ScrollContainer>
        )
    }
}
