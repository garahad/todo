import {data, categories, completed} from '../fakeData'

const SET_CATEGORY = 'SET_CATEGORY';
const SET_TODO = 'SET_TODO';
const SET_SUBJECT = 'SET_SUBJECT';
const SET_COMPLETED = 'SET_COMPLETED';

export const setCategory = category => ({
	type: SET_CATEGORY,
	category
});
export const setTodo = todo => ({ type: SET_TODO, todo });
export const setSubject = subject => ({ type: SET_SUBJECT, subject });
export const setCompleted = completed => ({ type: SET_COMPLETED, completed });

// let initialState = {
// 	category: [],
//   todo: [],
//   subject: 'todos',
//   completed: false
// };

let initialState = {
  category: categories,
  todo: data,
  subject: 'todos',
  completed: completed
}

const displaySet = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORY:
			return {
				...state,
				category: action.category,
			};
		case SET_TODO:
			return {
				...state,
				todo: action.todo,
      };
    case SET_SUBJECT:
      return {
        ...state,
        subject: action.subject,
      };
    case SET_COMPLETED:
      return {
        ...state,
        completed: action.completed,
      };
		default:
			return state;
	}
};

export default displaySet;