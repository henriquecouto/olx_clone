import React, { Component } from 'react';

import logo from '../../assets/logo.svg'

export default class NavBar extends Component {

  state = {
    search: '',
  }

  handleInput = e => {
    this.setState({ search: e.target.value })
  }

  clearInput = () => {
    this.setState({ search: '' })
  }

  render() {
    const { search } = this.state
    return (
      <div className='search'>
        <div className='container-column cplr cptb cdc'>
          <form>
            <div className='container'>
              <input
                value={search}
                onChange={this.handleInput}
                placeholder='Estou procurando por...'
              />
              {search && <button type='button' onClick={this.clearInput}>
                <i className='fas fa-times fa-lg' />
              </button>}
              <button className='searchButton'>
                <i className='fas fa-search fa-lg' />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
