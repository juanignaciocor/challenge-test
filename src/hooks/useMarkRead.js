import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { rest } from "../config/axios";
import { useSnackbar } from "react-simple-snackbar";

const useMarkRead = () => {
  const [openSnackbar] = useSnackbar();

  const { user } = useUserContext();
  const { size } = new URLSearchParams(window.location.pathname);

  const handlerRefreshArticle = async (id) => {
    await rest.put(
      `/feeds/${size}/articles/${id}/toggle_read`,
      {},
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user}`,
        },
      }
    );
    openSnackbar("Marcado como leido");
  };

  return { handlerRefreshArticle };
};

export default useMarkRead;
