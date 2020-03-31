import axios from '../utils/axios'
class Goods {
    // 登录接口
    login(payload) {
        let url = '/lucky/admin/login'
        return axios.post(url, payload)
    }
    // 查询数据
    list(page = 1, pageSize = 10) {
        let url = '/lucky/goods'
        return axios.get(url, { params: { page, pageSize } })
    }
    // 上传图片
    Img(Img) {
        let url = '/lucky/upload/uploadImg'
        return axios.post(url, Img)
    }
    // 删除商品
    del(id) {
        let url = `/lucky/goods/${id}`
        return axios.delete(url)
    }
    putaway(_id, putaway) {
        let url = `/lucky/goods//putaway/${_id}`
        return axios.put(url, { putaway })
    }
    add(payload) {
        let url = '/lucky/goods/create'
        return axios.post(url, payload)
    }
}
export default new Goods()