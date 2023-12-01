import useMarkRead from "../../../hooks/useMarkRead";

const InformationArticle = ({ article }) => {
  const { handlerRefreshArticle } = useMarkRead();
  return (
    <div className="information_article" key={article.title}>
      <span>{article.title}</span>
      <span>{article.url}</span>
      <span>{article.content}</span>
      <div
        className="container_mark_read"
        onClick={() => handlerRefreshArticle(article.id)}
      >
        <span>Marcar como leido</span>
      </div>
    </div>
  );
};

export default InformationArticle;
