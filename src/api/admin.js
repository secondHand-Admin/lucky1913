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
    amend(_id,userName,passWord,img){
        let url='/lucky/admin'
        return axios.put(url+'/'+_id,{userName,passWord,img})
    }
    img(Img){
        let url='/lucky/upload/uploadImg'
        return axios.post(url,Img)
    }
   
}
export default new Admin()