import React, { Component } from 'react';

import iphone from '../../assets/iphone.jpg'

export default class RecentAds extends Component {
  render() {
    return (
      <div className='cplr cptb'>
        <h2>Descubra</h2>
        <div className='container wrap item-disc' style={{ justifyContent: 'flex-start', alignContent: 'flex-start' }} >
          <div className='container cdc'>
            <img src={iphone} className='img-disc' style={{ width: 270, height: 390 }} />
          </div>
          <div className='container cdc'>
            <img src={iphone} className='img-disc' style={{ width: 270, height: 210, marginLeft: 3 }} />
            <img src={iphone} className='img-disc' style={{ width: 270, height: 177, marginLeft: 3, marginTop: 3 }} />
          </div>
          <div className='container cdc'>
            <img src={iphone} className='img-disc' style={{ width: 270, height: 177, marginLeft: 3 }} />
            <img src={iphone} className='img-disc' style={{ width: 270, height: 210, marginLeft: 3, marginTop: 3 }} />
          </div>
          <div className='container cdc'>
            <img src={iphone} className='img-disc' style={{ width: 270, height: 210, marginLeft: 3 }} />
            <img src={iphone} className='img-disc' style={{ width: 270, height: 177, marginLeft: 3, marginTop: 3 }} />
          </div>
        </div>
      </div >
    );
  }
}
