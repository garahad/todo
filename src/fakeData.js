export let data = [
  { id: 0, description: 'react play', category: 'exercise' },
	{ id: 1, description: 'react study', category: 'study' },
	{ id: 2, description: 'redux study', category: 'study' },
	{ id: 3, description: 'hooks study', category: 'study' },
	{ id: 4, description: 'baseball', category: 'exercise' },
	{ id: 5, description: 'soccer', category: 'exercise' },
	{ id: 6, description: 'work out', category: 'exercise' },
	{ id: 7, description: 'movie', category: 'play' },
	{ id: 8, description: 'bed rest', category: 'play' },
	{ id: 9, description: 'travel', category: 'play' },
	{ id: 10, description: 'go to pub', category: 'play' },
	{ id: 11, description: 'make todolist', category: 'study' },
];

//data에 변화를 주는데 왜 이 js파일에선 반영이 안될까??

const temps = [];
export const categories = [];

for (let i = 0; i < data.length; i += 1) {
	if (temps.indexOf(data[i].category) === -1) {
		let key = temps.length;
		temps.push(data[i].category);
		categories.push({ key: key, name: data[i].category });
	}
}

export const completed = [];