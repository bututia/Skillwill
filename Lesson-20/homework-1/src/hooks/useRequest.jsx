const useRequest = ({url, method}) => {
const sendRequest =  async (body, custom) => {
    const res = await fetch(url || custom, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        body: !!body && method !== "GET" ? JSON.stringify(body) : undefined
    })


    const data = await res.json()

    return data
}

return {sendRequest}

}

export default useRequest