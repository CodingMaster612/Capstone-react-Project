import axios from 'axios';

const Info_API_BASE_URL = "http://localhost:8080/api/v1/Exchange";

class InfoService {

    getPassword(Password){
        return axios.get(Info_API_BASE_URL);
    }

    createPassword(Password){
        return axios.post(Info_API_BASE_URL, information);
    }

   

    
    
    getEmailAddress(EmailId){
        return axios.get(Info_API_BASE_URL + '/' + EmailId);
    }
    createEmailAddress(EmailId){
        return axios.post(Info_API_BASE_URL, information);

    }

    updateEmailAddress(Email, EmailId){
        return axios.put(Info_API_BASE_URL + '/' + EmailId, Email);
    }

    deleteEmailAddress(EmailId){
        return axios.delete(Info_API_BASE_URL + '/' + EmailId);
    }
}

export default new InfoService()