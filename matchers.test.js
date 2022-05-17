test('测试', () => {
	// toBe  相当于 ===
	expect('007').toBe('007');
});

test('toEqual匹配器', () => {
	// 内容结果的匹配
	const a = { number: '007' };
	expect(a).toEqual({ number: '007' });
});

test('toNull匹配器', () => {
	const a = null;
	expect(a).toBeNull();
});

test('toUndefined匹配器', () => {
	const a = undefined;
	expect(a).toBeUndefined();
});

test('toBDdefined匹配器', () => {
	const a = '1';
	expect(a).toBeDefined();
});

test('toBeTruthy匹配器', () => {
	const a = 1;
	expect(a).toBeTruthy();
});

test('toBeFalsy匹配器', () => {
	const a = 0;
	expect(a).toBeFalsy();
});

test('toBeGreaterThan', () => {
	// toBeGreaterThan 相当于大于号
	const count = 10;
	expect(count).toBeGreaterThan(9);
});

test('toBeLessThan', () => {
	// toBeLessThan 相当于小于号
	const count = 10;
	expect(count).toBeLessThan(11);
});

test('toBeGreaterThanOrEqual', () => {
	// toBeGreaterThanOrEqual 相当于大于等于
	const count = 10;
	expect(count).toBeGreaterThanOrEqual(10);
});

test('toBeLessThanOrEqual', () => {
	// toBeGreaterThanOrEqual 相当于小于等于
	const count = 10;
	expect(count).toBeLessThanOrEqual(10);
});

// toBeCloseTo

test('toBeCloseTo', () => {
	// toBeCloseTo解决js的浮点类型的数
	const one = 0.1;
	const two = 0.2;
	expect(one + two).toBeCloseTo(0.3);
});

test('toMatch', () => {
	// 字符串匹配
	const str = '1,2,3';
	expect(str).toMatch('3');
});

test('toContain', () => {
	// toContain匹配数组中的值
	const a = ['1', '2', '3'];
	expect(a).toContain('3');
});

test('toContain ', () => {
	// toContain也可以匹配set类型中的值
	const arr = ['1', '2', '3'];
	const data = new Set(arr);
	expect(data).toContain('2');
});

const throwNewError = () => {
	// throw new Error('this is error');
};

test('toThrow', () => {
	// toThrow判断函数是否抛出异常
	// not取反
	expect(throwNewError).not.toThrow('this is error');
});
