import axios from 'axios';

const URL="http://localhost:3001/"

const obtenerEstado = async () => {
    try {
        let {data}=await axios.get(URL)
    
        return data;
    } catch (error) {
        return(error);
    }
}

export {obtenerEstado}