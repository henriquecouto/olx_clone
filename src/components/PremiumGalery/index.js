import React, { Component } from 'react';

import images from '../../assets'

const ads = [
  { title: 'Wii Nintendo original! Dez 10 itens', price: '350', image: images.wii },
  { title: 'Iphone 8 Plus 256', price: '3.299', image: images.iphone },
  { title: 'Chow-chow Lindos e Fofos Filhotes', price: '1.700', image: images.chowchow },
  { title: 'IPhone 8 Plus 64GB, Lacrado com 1 ano de Garantia Apple', price: '3.600', image: images.iphone2 },
  { title: 'Cordao de prata', price: '220', image: images.cordaoprata },
  { title: 'Sofa de couro ETNA', price: '220', image: images.sofacouro },
  { title: 'Monitor LG 19" com tudo funcionando. Não faço entregas. Leia antes de chamar', price: '250', image: images.monitorlg },
  { title: 'IPhone X prata 64gb estado de zero! Na caixa completinho! Ac Cartao', price: '3.950', image: images.iphonex },
  { title: 'Apple Ipad mini 2 tela retina 4G wifi 64 Gb', price: '1.100', image: images.ipad },
  { title: 'Roland Fone Rh 5 Produto Novo Loja Fisica', price: '252', image: images.fone },
  { title: 'Vendo ou troco', price: '26.000', image: images.moto },
  { title: 'Vendo jogo para console xbox 360', price: '50', image: images.gtaxbox },
]

export default class RecentAds extends Component {
  render() {
    return (
      <div className='premium-galery cplr cptb'>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <i className='fas fa-bookmark fa-2x' style={{ color: '#28B5D9' }} />
          <h2 style={{ marginLeft: 5 }}>Galeria Premium</h2>
        </div>
        <div className='container row' >
          {ads.map(item => (
            <div className='ads ads-premium'>
              <a href='/' >
                <img src={item.image} />
                <p>{item.title}</p>
                <h5>R$ {item.price}</h5>
              </a>
            </div>
          ))}
        </div>
      </div >
    );
  }
}
