import { fetchData } from './lhp0517.back';

test('FetchData 测试', (done) => {
	fetchData((data) => {
		expect(data).toEqual({
			data: {
				success: true
			}
		});
		done()
	});
});
