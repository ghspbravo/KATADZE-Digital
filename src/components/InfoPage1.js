import React, { Component } from 'react';
import TimelineMax from 'gsap/TimelineMax'
import text from 'gsap/TextPlugin'
import { Linear } from 'gsap/EasePack'

export default class infoPage1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        // phrases: [
        //     'Hello, world!',
        //     'Созданы для достижений',
        //     'Глобальны и мультиязычны',
        //     'В ногу со временем',
        //     'Мы есть решение',
        //     'Делаем БОЛЬШЕ',
        //     'Нацелены на результат',
        // ],
        typeText: new TimelineMax()

        // typeText: new TimelineMax({onComplete: () => {
        //     this.state.typeText.to('#innerText', 1.5, {text: this.state.phrases[Math.floor(Math.random() * this.state.phrases.length)], ease:Linear.easeNone})
        //     .to('#innerText', 2, {text: '', delay: 2})
        // }})
      }
    }

    // var myObject = {
    //     firstName:"John",
    //     lastName: "Doe",
    //     fullName: function () {
    //         return this.firstName + " " + this.lastName;
    //     }
    // }
    // myObject.fullName();         // Will return "John Doe"
    
    
    componentDidMount() {
        let drawSection = new TimelineMax({onComplete: this.props.drawEnd})
        drawSection.delay(1)
            .from('.page-container h1', 0.5, { rotationX: '90' })
            .from('.page-container p', 0.3, { opacity: '0', x: '200px' })
            .from('#ipad1', 1, {opacity: '0', right: '-10%', bottom: '55%'}, '-=0.4')
        
        // this.state.typeText.to('#innerText', 1.5, {text: this.state.phrases[Math.floor(Math.random() * this.state.phrases.length)], ease:Linear.easeNone})
        // .to('#innerText', 2, {text: '', delay: 2})   

        this.state.typeText.delay(2.5)
        .to('#innerText1', 1.5, {text: 'let user = {', ease:Linear.easeNone})
        .to('#innerText2', 1, {text: 'human: true,', ease:Linear.easeNone})
        .to('#innerText3', 2.5, {text: 'sayHello: function() {', ease:Linear.easeNone}, '+=1')
        .to('#innerText4', 1.5, {text: 'return "Hello, world!"', ease:Linear.easeNone})
        .to('#innerText5', 0.5, {text: '}}', ease:Linear.easeNone})
        .to('#innerText6', 3, {text: 'user.sayHello()   // Hello, World!', ease:Linear.easeNone}, '+=1')

    }

    componentWillUnmount() {
        this.state.typeText.kill()
    }

    render() {
        return (
            <div className="row page-container">
                <div className="col-12 offset-lg-1 col-lg-5">
                    <h1>Кто мы ?</h1>
                    <h2></h2>
                    <p>Katadze digital в первую очередь - это сплоченная команда высококлассных специалистов,
                        способных решать задачи любой сложности в различных областях.
                Мы любим свое дело и разрабатыватываем продукты такими, какими они должны быть.</p>
                </div>
                    <svg version="1.1" className="d-none d-lg-block" id="ipad1"  x="0px" y="0px" width="87px" height="97.5px"
                    style={{transform: 'scale(9) rotate(55deg)', position: 'absolute', right: '15%', bottom: '25%'}}>
                        <g>
                            <path d="M79.873,0H17.619c-3.238,0-5.873,2.635-5.873,5.873v85.747c0,3.238,2.635,5.873,5.873,5.873h62.254
                                c3.238,0,5.873-2.635,5.873-5.873V5.873C85.746,2.634,83.111,0,79.873,0z M48.746,3.377c0.486,0,0.881,0.395,0.881,0.881
                                s-0.395,0.88-0.881,0.88c-0.486,0-0.881-0.395-0.881-0.881S48.26,3.377,48.746,3.377z M48.746,94.261
                                c-0.973,0-1.762-0.788-1.762-1.762s0.789-1.763,1.762-1.763c0.973,0,1.762,0.789,1.762,1.763S49.719,94.261,48.746,94.261z
                                M81.048,88.828H16.444V8.662h64.604V88.828z"/>
                            <text id="innerText" x="-85" y="20" fill="black" style={{transform: 'rotate(-90deg)', fontSize: '0.1rem'}}>
                                <tspan id="innerText1" x="-85" dy="1"></tspan>
                                <tspan id="innerText2" x="-85" dy="2"></tspan>
                                <tspan id="innerText3" x="-85" dy="3"></tspan>
                                <tspan id="innerText4" x="-85" dy="4"></tspan>
                                <tspan id="innerText5" x="-85" dy="5"></tspan>
                                <tspan id="innerText6" x="-85" dy="6"></tspan>
                            </text>
                        </g>
                    </svg>
                {/* <div className="d-none d-lg-block col-lg-5 parallaxbg" style={{
                    height: '500px',
                    backgroundImage: `url(${ipad})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right'
                }}></div> */}
            </div>
        )
    }
};
