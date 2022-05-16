// ------------------------------------------------------------------------------
// name: lhp0516
// author: lhp( lhp )
// created: 2022/5/16 21:00
// ------------------------------------------------------------------------------

function baojian1(money) {
  return money >= 200 ? '至尊享受' : '基本';
}

function baojian2(money) {
  return money >= 1000 ? '双人服务' : '单人服务';
}

module.exports = {
  baojian1,
  baojian2
};

// 单元测试： unit testing    模块
// 集成测试：
