import axios from '../utils/axios'
class Article {
  // 审核信息列表列表
  dataList() {
    let url = '/lucky/news'
    return axios.get(url)
  }
}
export default new Article()