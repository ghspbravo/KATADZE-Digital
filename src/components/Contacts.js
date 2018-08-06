import React, { Component } from 'react'

import cityImg from '../resourses/contacts/ekb-city.png'

export default class Contacts extends Component {
    componentDidMount() {
        document.body.style.overflow = 'visible'
    }

    componentWillUnmount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div style={{ height: '90vh', alignItems: 'center' }} className="row">
                        <div className="col-lg-6">
                            <p>Мы работаем с крупными и малыми компаниями по всему миру и в разных часовых поясах. Говорим на нескольких языках.
                        И независимо от ваших потребностей, мы с нетерпением ждем от вас обратной связи.
                        </p>
                        </div>
                        <div className="col-lg-6">
                            <form action="post">
                                <input autoComplete="off" type="text" placeholder="Имя" name="name" id="name" />
                                <input autoComplete="off" type="email" placeholder="Электронная почта" name="email" id="email" />
                                <input autoComplete="off" type="text" placeholder="Ваш вопрос" name="question" id="question" />
                                <button type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row justify-center contacts-box">
                    <div className="row d-sm-flex d-none col-xl-10 col-lg-12 m-bot-m">
                        <p className="col-sm-6">KATADZE DIGITAL</p>
                        <p className="col-sm-6 text-right" style={{ color: 'white' }}>КОНТАКТЫ</p>
                    </div>
                    <div className="row col-12">
                        <h3 className="text-center col-12 col-sm-6">Давайте работать <br />вместе</h3>
                        <h3 style={{ color: 'white' }} className="text-center col-12 col-sm-6">Ленина 66 <br />Екатеринбург</h3>
                    </div>
                    <div className="col-12 row">
                        <div className="col-12 col-sm-6 col-lg-5 offset-lg-1 order-fix" style={{ display: 'flex',  flexWrap: 'wrap', alignItems: 'flex-end' }}>
                            <div className="row">
                                <p className="col-12">katadze.digital</p>
                                <p className="col-12" style={{ fontFamily: "'Open Sans', sans-serif" }}>+7 (982) 602 61 98</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 row justify-center">
                            <img className="col-md-10" src={cityImg} alt='cityImage' style={{ height: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
