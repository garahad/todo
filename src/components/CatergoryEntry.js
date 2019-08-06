import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setTodo, setCategory } from '../modules/displaySet'


import { categories, data } from '../fakeData';

class CatergoryEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: this.props.category.name,
		};
    this.writeCategory = this.writeCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
	}

	writeCategory(e) {
		this.setState({
			description: e.target.value,
		}, ()=> {
      selectedData.forEach(todo => {
        todo.category = this.state.description;
      });
      this.props.category.name = this.state.description;
    });
    const selectedData = data.filter(
      oneTodo => oneTodo.category === this.state.description
    );
  }
  
  deleteCategory() {
    //카테고리 삭제 
    const categoryNames = [];
    categories.forEach(ele => {
      categoryNames.push(ele.name)
    })
    const index = categoryNames.indexOf(this.state.description)
    categories.splice(index, 1)

    // this.props.showCategory(categories)
    //여긴 카테고리 지우고, 카테고리 re-render하는 과정이 없이도 알아서 잘 re-render가 되는데 차이가 뭘까? 

    //카테고리에 딸린 todos 삭제 
    const indexArray = [];
    data.forEach(
      (oneTodo, idx) => {
        if (oneTodo.category === this.state.description) {
          indexArray.push(idx);
        }
      }
    );
    for (let i = data.length - 1; i >= 0; i -= 1) {
      if (indexArray.indexOf(i) !== -1) {
        data.splice(i,1)
      }
    }
    console.log(data)
    // data = newData 이런식으로 쓰는 법 없나? 이런 식으로 data를 직접 삭제하는게 위험한가? setState만 바꾸기보다? 
    this.props.showTodos(data.slice())
    //얘도 작동을 안 하네. 자꾸 setState애들이 말썽이네. category는 지우자마자 render가 되는데 todos는 render가 안되는 이유 ? reducer가 자극 받으면 전체 페이지가 render되나? 아님 여기 이 코드 아래 딸린 render만 render되나? 
  }

	render() {
		return (
			<li
				className={this.state.description}
				onClick={this.props.todosFilterShow}>
        
				<input
					type="text"
					value={this.state.description}
					className={this.state.description}
					onClick={this.props.todosFilterShow}
          onChange={this.writeCategory}
				/>
        <button onClick={this.deleteCategory}>삭제</button>
			</li>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCategory: data => dispatch(setCategory(data)),
    showTodos: ele => dispatch(setTodo(ele))
  }
}

export default connect(null, mapDispatchToProps)(CatergoryEntry)

