import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTodo } from '../modules/displaySet';

import { data } from '../fakeData';
import TodoEntry from './TodoEntry';

class Todos extends Component {
	constructor(props) {
		super(props);
		this.addTask = this.addTask.bind(this);
	}

	// componentDidMount() {
	// 	this.props.showTodos(data);
	// }

	addTask() {
		let newId = data.length === 0 ? 0 : data[data.length - 1].id + 1;
		data.push({ id: newId, description: '', category: this.props.subject });
		//이런식으로 push를 해도 되나? immutability 원칙을 지켜서 concat하고 set 하는게 맞지 않은가? immtuable 원칙에 대한 이해. 이런식으로 state에 push해선 안되고, data에 푸쉬해야 할듯. state는 보여지는 부분일뿐. 그럼 initial state에 data를 넣는것의 의미가... 과연...

		this.props.showTodos(
			data.filter(ele => {
				return ele.category === this.props.subject;
			}),
		);
	}

	render() {
		const todoList =
			this.props.todos.length === 0
				? null
				: this.props.todos.map(oneTodo => {
						return <TodoEntry oneTask={oneTodo} key={oneTodo.id} />;
				  });

		return (
			<div>
        {this.props.subject}
        <div>
        완료됨
        보기
        </div>

				<div>
					<button onClick={this.addTask}>+</button>
					<ul>{todoList}</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.displaySet.todo,
		subject: state.displaySet.subject,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showTodos: ele => dispatch(setTodo(ele)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Todos);
