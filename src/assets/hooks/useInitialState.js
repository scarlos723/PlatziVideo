import { useEffect, useState } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);// inicializa videos vacio

    useEffect(() => {  //recibe una funcion anonima
        fetch(API) //link API
            .then(response => response.json())
            .then(data => setVideos(data));

    }, []);
    return videos;
}

export default useInitialState;