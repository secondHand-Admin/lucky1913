import axios from '../utils/axios'
class Article {
  // 审核信息列表列表
  dataList(page, pageSize) {
    let url = '/lucky/news'
    return axios.get(url, { params: { page, pageSize } })
  }
  // 删除信息
  delList(id) {
    let url = `/lucky/news/${id}`
    return axios.delete(url)
  }
  // 修改状态信息
  updateList(id, state) {
    let url = `/lucky/news/state/${id}`
    return axios.put(url,  { state })
  }
}
export default new Article()