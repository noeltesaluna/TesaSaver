import { useEffect, useState } from "react";
import axios from "axios";

const API_ENDPOINT = 'http://localhost:3000/'

const useFetch = (endpoint: string) => {
    const [data, setData] = useState({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(API_ENDPOINT + endpoint)
                setData(response)
            } catch (error: any) {
                setError(error.message)
            }
        }
        fetchData()
    }, [])
    return {
        data,
        error
    }
}