import useFetchArticles from "../../../hooks/useFetchArticle";
import InformationArticle from "./InformationArticle";

const ArticlesFeed = () => {
  // Probe el endpoint para hacer refresh y no funcionaba , siempre daba 404 asi que hice mi custom refresh
  const { articles, handlerRefresh } = useFetchArticles();

  const onSubmit = (e) => {
    e.preventDefault();
    handlerRefresh();
  };

  // TODO: Haria una mejora para que se pueda ver con una paginacion mas prolijo, en forma de tabla.
  // 10 articulos por pagina y enviaria filtros a la api que sean size=10 page=1
  return (
    <>
      <h2>Lista de articulos</h2>
      <button onClick={onSubmit}>Refrescar</button>
      {articles.length
        ? articles.map((element) => <InformationArticle article={element} />)
        : null}
    </>
  );
};

export default ArticlesFeed;
