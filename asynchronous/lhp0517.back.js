import axios from 'axios';

export const fetchData = (fn) => {
	// 接口地址为本地使用node模拟的接口
	axios.get('http://127.0.0.1:8001/data').then(res => {
		fn(res.data);
	});
};


