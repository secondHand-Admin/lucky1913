import axios from '../utils/axios'
class User {
  // 用户列表
  userList(page, pageSize) {
    let url = '/lucky/user'
    return axios.get(url, { params: { page, pageSize } })
  }
  // 删除用户
  userdel(id) {
    let url = `/lucky/user/${id}`
    return axios.delete(url)
  }
}
export default new User()