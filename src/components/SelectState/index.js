import React, { Component } from 'react';

import images from '../../assets'

const states = [
  'RJ', 'SP', 'MG', 'PR', 'RS', 'SC', 'ES', 'BA', 'PE', 'DF', 'CE', 'MS', 'GO',
  'AM', 'RN', 'PB', 'PA', 'MT', 'AL', 'SE', 'MA', 'AC', 'RO', 'TO', 'PI', 'AP',
  'RR', 'BRASIL'
]

export default class RecentAds extends Component {
  render() {
    return (
      <div className='cplr cptb'>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#4A4A4A' }}>
          <i className='fas fa-map-marker-alt fa-2x' />
          <h2 style={{ marginLeft: 5 }}>Escolha o seu estado:</h2>
        </div>
        <div className='container wrap' style={{ justifyContent: 'flex-start', alignContent: 'flex-start' }} >
          {states.map(item => (
            <div className='state'>
              <a href='/'>
                {item}
              </a>
            </div>
          ))}
        </div>
      </div >
    );
  }
}
