import axios from '../utils/axios'

class Admin{
    AdminiStratorAdd({userName,passWord}){
        let url='/lucky/admin/create'
        return axios.post(url,{userName,passWord})
    }
}
export default new Admin()