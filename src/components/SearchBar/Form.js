import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    search: '',
    formClass: undefined
  }

  handleInput = e => {
    this.setState({ search: e.target.value })
  }

  clearInput = () => {
    this.setState({ search: '' })
  }

  handleClick = () => {
    if (this.state.search === '') {
      this.setState({ formClass: 'shake-horizontal' })
      setTimeout(() => { this.setState({ formClass: undefined }) }, 2000);

    }
  }

  render() {
    const { search, formClass } = this.state;
    return (
      <form className={formClass}>
        <div className='container'>
          <input
            type='search'
            value={search}
            onChange={this.handleInput}
            placeholder='Estou procurando por...'
          />
          <div>
            {search && <button type='button' onClick={this.clearInput}>
              <i className='fas fa-times fa-lg' />
            </button>}
          </div>
          <div>
            <button
              type={search ? 'submit' : 'button'}
              onClick={this.handleClick}
              className='searchButton'
            >
              <i className='fas fa-search fa-lg' />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
