import axios from '../utils/axios'
const getGoods = e => axios.get('/lucky/analysis/goods')
export {
    getGoods
}