import axios from '../utils/axios'
class Goods {
    // 登录接口
    login(payload) {
        let url = '/lucky/admin/login'
        return axios.post(url, payload)
    }
    // 查询数据
    list(page = 1, pageSize = 2) {
        let url = '/lucky/goods'
        return axios.get(url, { params: { page, pageSize } })
    }
}
export default new Goods()