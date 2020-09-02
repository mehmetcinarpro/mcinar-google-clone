import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "7ce8c8dcaf07f575c";

const useGoogleSearch = (term: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result);
                });
        };
        fetchData();

    }, [term]);

    return { data };
}

export default useGoogleSearch
