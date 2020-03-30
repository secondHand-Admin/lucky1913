import axios from '../utils/axios'

class Admin{
    AdminiStratorAdd({userName,passWord}){
        let url='/lucky/admin/create'
        return axios.post(url,{userName,passWord})
    }
    List(){
        let url='/lucky/admin'
        return axios.get(url)
    }
    del(_id){
        let url='/lucky/admin'
        return axios.delete(url+'/'+_id)
    }
    amend(_id,userName,article){
        let url='/lucky/admin'
        return axios.PUT(url+'/'+_id,{userName,article})

    }
}
export default new Admin()