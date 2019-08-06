import React, { Component } from 'react';
// import { connect } from 'react-redux'


import Search from './Search'
import Categories from './Categories'
import Todos from './Todos'


export default class App extends Component {
	render() {
		return (
      <div>
        <div>
          <Search />
        </div>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
            Categories
            <Categories />
          </div>
					<div className="col-md-9">
            <Todos />
          </div>
				</div>
			</div>
      </div>

		);
	}
}
