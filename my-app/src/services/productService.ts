import { sendGet } from "../api-client/axios-client"

export const getProducts = async () => {
    try { 
        const res = await sendGet('/posts')
        console.log("ress", res)
        return res;
    } catch(error) {
        console.log("error", error)
    }
}