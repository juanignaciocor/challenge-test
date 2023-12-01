import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { rest } from "../config/axios";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { user } = useUserContext();
  const { size } = new URLSearchParams(window.location.pathname);

  const handlerFetchArticles = async () => {
    const articlesResponse = await rest.get(`/feeds/${size}/articles`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    });
    setArticles(articlesResponse.data);
  };

  const handlerRefresh = () => setRefresh(!refresh);

  useEffect(() => {
    handlerFetchArticles();
  }, [refresh]);

  return { articles, handlerRefresh };
};

export default useFetchArticles;
