import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setTodo } from '../modules/displaySet';


export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.writeTask = this.writeTask.bind(this);
		this.state = {
			description: this.props.oneTask.description,
		};
	}

	writeTask(e) {
		this.setState(
			{
				description: e.target.value,
			},
			() => {
				this.props.oneTask.description = this.state.description;
			},
		);
	}

	render() {
		return (
			<li>
				<input
					type="text"
					value={this.state.description}
					onChange={this.writeTask}
				/>
        <button>DONE</button>
			</li>
		);
	}
}

// const mapStateToProps = state => {
// 	return {
//     data: state.displaySet.todo
//   };
// };

// const mapDispatchToProps = dispatch => {
// 	return {
// 		rerender: data => dispatch(setTodo(data)),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Todo);
