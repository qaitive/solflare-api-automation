import axios from "axios";

const URL = "https://activity-api.solflare.com/v1/simulations/static";

class SimAPIService {
    //Post request with url, header and body
    async postRequest(data) {
        try {
            
            let response = await axios.post(URL, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response
        } catch (err) {
        }
    }
}

export default new SimAPIService();