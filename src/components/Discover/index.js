import React, { Component } from 'react';

import iphone from '../../assets/iphone.jpg'

export default class RecentAds extends Component {
  render() {
    return (
      <div className='cplr cptb'>
        <h2>Descubra</h2>
        <div className='container wrap' style={{ justifyContent: 'flex-start', alignContent: 'flex-start' }} >
          <div className='container cdc item-disc' style={{ width: 270, height: 390 }}>
            <img src={iphone} className='img-disc' />
          </div>
          <div className='container cdc'>
            <div className='container cdc item-disc' style={{ width: 260, height: 210, marginLeft: 5 }}>
              <img src={iphone} className='img-disc' />
            </div>
            <div className='container cdc item-disc' style={{ width: 260, height: 175, marginTop: 5, marginLeft: 5 }}>
              <img src={iphone} className='img-disc' />
            </div>
          </div>
          <div className='container cdc'>
            <div className='container cdc item-disc' style={{ width: 260, height: 175, marginLeft: 5 }}>
              <img src={iphone} className='img-disc' />
            </div>
            <div className='container cdc item-disc' style={{ width: 260, height: 210, marginTop: 5, marginLeft: 5 }}>
              <img src={iphone} className='img-disc' />
            </div>
          </div>
          <div className='container cdc'>
            <div className='container cdc item-disc' style={{ width: 260, height: 210, marginLeft: 5 }}>
              <img src={iphone} className='img-disc' />
            </div>
            <div className='container cdc item-disc' style={{ width: 260, height: 175, marginTop: 5, marginLeft: 5 }}>
              <img src={iphone} className='img-disc' />
            </div>
          </div>
        </div>
      </div >
    );
  }
}
