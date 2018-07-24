import React, { Component } from 'react'

export default class Portfolio extends Component {

  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
		window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="row" style={{height: '100vh', alignItems: 'center'}}>
        <div className="col-12" style={{textAlign: 'center'}}><h1 className="elect">
            Раздел в разработке
        </h1></div>
      </div>
    )
  }
}
