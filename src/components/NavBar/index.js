import React, { Component } from 'react';

import logo from '../../assets/logo.svg'

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className='container cplr'>
          <div className='container'>
            <div>
              <a href='/'><img src={logo} alt='logo' /></a>
            </div>
            <div className='item'>
              <a href='/'>Meus anúncios</a>
            </div>
            <div className='item'>
              <a href='/'>Lojas</a>
            </div><div className='item'>
              <a href='/'>Ajuda</a>
            </div>
          </div>
          <div className='container'>
            <div>
              <a href='/'>
                <i class="far fa-comment fa-lg" />
                {' '}
                Chat
              </a>
            </div>
            <div className='item'>
              <a href='/'>
                <i class="far fa-user fa-lg" />
                {' '}
                Minha conta
              </a>
            </div>
            <div className='item'>
              <button>
                Anunciar
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
