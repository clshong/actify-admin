import Mock from 'mockjs'

// 模拟login接口
Mock.mock('/api/getData', function () {
  let res = {
    code: 200,
    message: 'OK',
    data: {
      id: '001',
      nickname: 'charles',
      token: 'helloworld'
    }
  }
  return res
})
