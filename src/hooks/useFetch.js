import { useEffect, useState } from "react"

const useFetch = (url, initial) => {
    const [response, setResponse] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (url === '') return;
        const controller = new AbortController();

        (async () => {
            setLoading(true);
            try {
                const data = await fetch(url, { signal: controller.signal });
                const json = await data.json();
                setResponse(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();

        return () => {
            controller.abort();
        }

    }, [url]);

    return { response, loading, error };
}

export default useFetch;
