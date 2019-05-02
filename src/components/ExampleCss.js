import React, { Component } from 'react'
export class ExampleCss extends Component {
    // handle click to toggle class
    handleClick(){
        console.log(
            'click'
        )
        const wrapper =  document.getElementById('wrapper');
        wrapper.classList.toggle('is-nav-open');
    }

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <div className="nav">
            <div 
                className="nav__icon"
          
                onClick={()=>this.handleClick()}
            >icon</div>
            <div className="nav__body">
                lorem stuff
            </div>
        </div>
        
      </div>
    )
  }
}

export default ExampleCss
