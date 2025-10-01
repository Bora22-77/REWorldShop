import axios from "axios"

const fetchApi = async () => {
    const res = await axios("https://electronic-json-1.onrender.com/Electronic");
    // console.log(res.data);
    
    return res.data;
}
export default fetchApi;