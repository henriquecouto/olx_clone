import React, { Component } from 'react';
import Form from './Form';

const categories = [
  { id: 1, name: 'Imóveis', icon: 'fa-home' },
  { id: 2, name: 'Auto e peças', icon: 'fa-car' },
  { id: 3, name: 'Para a sua casa', icon: 'fa-bed' },
  { id: 4, name: 'Eletrônicos e celulares', icon: 'fa-mobile-alt' },
  { id: 5, name: 'Músicas e hobbies', icon: 'fa-guitar' },
  { id: 6, name: 'Esportes e lazer', icon: 'fa-volleyball-ball' },
  { id: 7, name: 'Artigos infantis', icon: 'fa-baby-carriage' },
  { id: 8, name: 'Animais de estimação', icon: 'fa-paw' },
  { id: 9, name: 'Moda e beleza', icon: 'fa-tshirt' },
  { id: 10, name: 'Agro e indústria', icon: 'fa-tractor' },
  { id: 11, name: 'Todas as categorias', icon: 'fa-list' },
]

export default class NavBar extends Component {
  render() {
    return (
      <div className='search'>
        <div className='container cplr cptb cdc'>
          <Form />
          <div className='container cptb cplr' style={{ alignItems: 'flex-start', paddingLeft: 85 }}>
            {
              categories.map(category => (
                <div key={category.id} className='category'>
                  <button><i className={`fas ${category.icon} fa-2x`} /></button>
                  {category.name}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
