import React, { Component } from 'react';

import logo from '../../assets/logo.svg'

export default class NavBar extends Component {
  render() {
    return (
      <footer>
        <div className='container cplr'>
          <div className='container'>
            <div>
              <a href='/'>Ajuda e contato</a>
            </div>
            <div className='item'>
              <a href='/'>Dicas de segurança</a>
            </div>
            <div className='item'>
              <a href='/'>Vender na OLX</a>
            </div>
            <div className='item'>
              <a href='/'>Plano Profissional</a>
            </div>
          </div>
          <div className='container'>
            <div className='item'>
              <a href='/'>
                <i className="fab fa-facebook fa-lg" />
              </a>
            </div>
            <div className='item'>
              <a href='/'>
                <i className="fab fa-youtube fa-lg" />
              </a>
            </div>
            <div className='item'>
              <a href='/'>
                <i className="fab fa-instagram fa-lg" />
              </a>
            </div>
            <div className='item'>
              <a href='/'>
                <i className="fab fa-linkedin fa-lg" />
              </a>
            </div>
            <div className='item'>
              <a href='/'>
                <i className="fab fa-twitter fa-lg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
