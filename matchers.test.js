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
