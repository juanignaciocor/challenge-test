import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { rest } from "../config/axios";

const useRefreshArticle = (setArticles) => {
  const { user } = useUserContext();
  const { size } = new URLSearchParams(window.location.pathname);

  const handlerRefreshArticle = async () => {
    const articlesResponse = await rest.get(`/feeds/${size}/refresh`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    });
    setArticles(articlesResponse.data);
  };

  return { handlerRefreshArticle };
};

export default useRefreshArticle;
