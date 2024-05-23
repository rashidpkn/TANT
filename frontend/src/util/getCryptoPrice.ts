import axios from "axios"

export const getCryptoPrice = async (currency:string):Promise<number> =>{
    
        try {
            const { data } = await axios.post(`https://api.livecoinwatch.com/coins/single`, { "currency": "USD", code: currency.toUpperCase().trim() }, { headers: { "x-api-key": "552311ac-2c14-49ab-bcb9-7e3b2f7d1309", } })
            const {rate}:{rate:number} = data
            return rate
        } catch (error) {
            console.error(error)
            return 1
        }
    
}

