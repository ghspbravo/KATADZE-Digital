import React, { Component } from 'react'

export default class Contacts extends Component {
    componentDidMount() {
        document.body.style.overflow = 'visible'
    }

    render() {
        return (
            <div className="container">
                <div style={{ height: '90vh', alignItems: 'center' }} className="row">
                    <div className="col-lg-6">
                        <p>Мы работаем с крупными и малыми компаниями по всему миру и в разных часовых поясах. Говорим на нескольких языках.
                    И независимо от ваших потребностей, мы с нетерпением ждем от вас обратной связи.
                    </p>
                    </div>
                    <div className="col-lg-6">
                        <form action="post">
                            <input type="text" placeholder="Имя" name="name" id="name" />
                            <input type="email" placeholder="Электронная почта" name="email" id="email" />
                            <input type="text" placeholder="Ваш вопрос" name="question" id="question" />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="contacts-box row col-12" style={{marginBottom: '200px', alignItems: 'center'}}> 
                        <div className="offset-lg-1 col-lg-5"><p>
                        <span>Давайте работать вместе</span><br />katadze.digital <br />+7 777 777 77 77
                </p></div>
                        <div className="offset-lg-1 col-lg-5"><p>
                        <span>Екатеринбург</span> <br /> Ленина 66
                </p></div>
                    </div>
                </div>
            </div>
        )
    }
}
