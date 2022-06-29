import { id } from 'date-fns/locale';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const body = await response.json();
                setPost(null);
                setError(body.message);

                if (body.status === 'error') {
                    setPost(null);
                    setError(body.message);
                    console.log(error);
                } else {
                    setPost(body.data.post);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);
    return post;
};

export default useFetch;