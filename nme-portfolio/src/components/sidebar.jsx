import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="navbar" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
    
              <h1 id="colorlib-logo"><a href="index.html">Navid Ebrahimi</a></h1>
              <span className="email"><i className="icon-mail"></i> navidmebrahimi22@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li> <a href="https://www.facebook.com/navid.ebrahimi.10" target="_blank" style={{color: "red"}} rel="noopener noreferrer"><i className="icon-facebook2 bg-warning" />Facebook</a></li>
                <li> <a href="https://github.com/nme22" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i>Github</a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
            </div>
          </aside>
        </div>
      </div>
    )
  }
}