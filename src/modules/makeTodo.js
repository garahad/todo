const MAKE_TODO = 'MAKETODO';
const DONE_TODO = 'DONETODO';

export const makeTodo = () => {
	return {
		type: MAKE_TODO,
	};
};
export const doneTodo = id => {
	return {
		type: DONE_TODO,
		id,
	};
};

initialState = {
	categories: [],
	todos: [],
	searchInput: '',
};

export default todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case MAKE_TODO:
			return;

		default:
	}
};
