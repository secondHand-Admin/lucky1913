import axios from '../utils/axios'
class Article {
  // 审核信息列表列表
  dataList(page, pageSize) {
    let url = '/lucky/news'
    return axios.get(url,{ params: { page, pageSize } })
  }
}
export default new Article()