import { useCallback, useEffect, useState } from "react"

const useFetch = ({url, method}) => {
    const [response, setResponse] = useState(null)

    const onFetch = useCallback(() => {
        fetch(url, {
            method,
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            .then((res) => {
                if(!res.ok) throw new Error("Response Failed")
                return res.json()})
            .then(data => setResponse(data))
            .catch(err => console.log(err))


            return () => {
                setResponse(null)
            }
    }, [url, method])

    useEffect(() => {
        onFetch()
    }, [onFetch])

    return {response, resendRequest: onFetch}
}

export default useFetch