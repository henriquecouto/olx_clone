import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='cplr cptb'>
        <h2>Sobre a OLX</h2>
        <div className='container wrap' style={{ justifyContent: 'flex-start', alignContent: 'flex-start' }} >
          <a href='/'>
            <div className='about-item'>
              <p>Todo mundo tem algo para desapegar em casa e fazer um dinheiro extra.</p>
              <button>
                Quero vender
            </button>
            </div>
          </a>

          <a href='/'>
            <div className='about-item' style={{ alignItems: 'flex-start', textAlign: 'start' }}>
              <button style={{ width: 50 }}>
                <i className="fas fa-play" />
              </button>
              <p style={{ fontSize: 20 }}>Imóveis de todo tipo, para todo mundo</p>
              <p style={{ fontSize: 13, marginTop: -10 }}>Na OLX imóveis tem.</p>
            </div>
          </a>
        </div>
      </div >
    );
  }
}
