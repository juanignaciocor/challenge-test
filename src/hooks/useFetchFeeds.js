import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { rest } from "../config/axios";

const useFetchFeeds = () => {
  const [feeds, setFeeds] = useState([]);
  const { user } = useUserContext();

  const handlerFetchFeeds = async () => {
    const feedsResponse = await rest.get("/feeds", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user}`,
      },
    });
    setFeeds(feedsResponse.data);
  };

  useEffect(() => {
    handlerFetchFeeds();
  }, []);

  return { feeds };
};

export default useFetchFeeds;
