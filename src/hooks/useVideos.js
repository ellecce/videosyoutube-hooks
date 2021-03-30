import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    console.log(term + " desde la app");
    //call API
    let response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]; // Esta es la convencion (como la de useState), en donde se devuelve un array con la variable, y una funcion que permite editar dicha variable

  // return {videos, search} // la comunidad suele usar object
};

export default useVideos;
