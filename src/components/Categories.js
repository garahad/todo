import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCategory, setTodo, setSubject } from '../modules/displaySet';
import { categories, data } from '../fakeData';
import CatergoryEntry from './CatergoryEntry';

// 삭제 기능도 만들어야 하고, todo도 다 같이 삭제되게...
// data로 푸쉬하는데 어떻게 기억하는거지? data가 어디에 저장되는거지?
// 전체 뜨고, 전체 안뜨게 하는 것도 만들어야 하고.
// 질문 시간이 부족.
// 전체 todo에서는 + 누르는 것 없애버리자. or 항목 선택하게 만들거나. 
// help-desk에 질문한 내용 
// 코드 리팩토링, component / container도 나눠야 하고, 새로 배운 메쏘드들도 다 써봐야 하고.. 
// recastly test처럼 props 최대한 품고 있고..  코드 가독성 좋게 만들고 여러가지 손볼 곳들 

//state로 안 만져주고, data를 직접 만져서 이런 문제가 발생하는 듯함. 계속  dispatch관련 문제가... data대신 state로 저장해야 하나봄. data를 직접 건들면 안 될듯. ------> setState가 안 먹히는 문제... 

class Categories extends Component {
	constructor(props) {
		super(props);
		this.todosFilterShow = this.todosFilterShow.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.showAllTodo = this.showAllTodo.bind(this);
	}

	// componentDidMount() {
	// 	this.props.showCategory(categories);
	// }

	todosFilterShow(e) {
		//this.props.todo를 전체 todo로 재설정. data로 불러와야하나? state로 불러와야 하나? 보이는 부분은 data만이니까.
		let filteredTodos = data.filter(todo => {
			return todo.category === e.target.className;
		});
		this.props.showSubject(e.target.className);
		this.props.showTodos(filteredTodos);
		this.props.showCategory(categories);
	}

	addCategory() {
		if (categories.some(cate => cate.name === '')) {
			alert('동일 카테고리 이름이 존재합니다');
		} else {
      let newKey = categories.length === 0 ? 0 : categories[categories.length - 1].key + 1;
			categories.push({
				key: newKey,
				name: '',
			});
			//이런식으로 push를 해도 되나? immutability 원칙을 지켜서 concat하고 set 하는게 맞지 않은가? immtuable 원칙에 대한 이해
			this.props.showCategory(categories.slice());
			// 왜 여기서 바로 category라고 하면 안되고, 저렇게 함수 모양처럼 써줘야하지?? virtual DOM 관련 변경 문제? 저 함수가 불린다고 무조건 render를 하지 않는가?
		}
		//꼭 this.props.categories라고 할 필요있나? fakeData에서 바로 가져오면 그냥 categories인데...
  }
  
  showAllTodo() {
    this.props.showTodos(data)
  }

	render() {
		const categoryList =
			this.props.categories.length === 0
				? null
				: this.props.categories.map(category => {
						return (
							<CatergoryEntry
								key={category.key}
								category={category}
								todosFilterShow={this.todosFilterShow}
							/>
						);
				  });

		return (
			<div>
				<button onClick={this.addCategory}>+</button>
        <div>
          <button onClick={this.showAllTodo}>전체 todo 보기</button>
        </div>
				<ul>{categoryList}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		categories: state.displaySet.category,
		todos: state.displaySet.todo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showCategory: data => dispatch(setCategory(data)),
		showTodos: ele => dispatch(setTodo(ele)),
		showSubject: ele => dispatch(setSubject(ele)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Categories);
