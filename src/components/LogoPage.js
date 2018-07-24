import React, { Component } from 'react'
import { logoAnimation, logoAnimationClear } from '../logoAnimation'

import '../anim.css'

export default class LogoPage extends Component {
  componentDidMount() {
    logoAnimation()
  }

  render() {
    return (
      <div className="mainbg row">
        <div className="studio-name">Katadze Digital agency</div>
        <div className="hero hero--home">
          <ul className="messages" id="messages">
            <li data-message="Katadze.">
              <span data-message="Katadze.">Katadze.</span>
            </li>
            <li data-message="Develop.">
              <span data-message="Develop.">Develop.</span>
            </li>
            <li data-message="Product." className="active">
              <span data-message="Product.">Product.</span>
            </li>
            <li data-message="Design.">
              <span data-message="Design.">Design.</span>
            </li>
            <li data-message="Digital.">
              <span data-message="Digital.">Digital.</span>
            </li>
            <li data-message="Experience.">
              <span data-message="Experience.">Experience.</span>
            </li>
          </ul>
        </div>
        <div className="bot-hint" style={{ fontSize: '3.750em', color: '#F7FF80', userSelect: 'none' }}>↓</div>
      </div>
    )
  }
}
