import InformationFeed from "./InformationFeed";
import useFetchFeeds from "../../../hooks/useFetchFeeds";
import useRemoveFeed from "../../../hooks/useRemoveFeed";

const ListFeeds = () => {
  const { feeds } = useFetchFeeds();
  const { handlerRemoveFeed } = useRemoveFeed();
  return (
    <article>
      <h2>Mira el listado de tus feeds</h2>

      {feeds.length
        ? feeds.map(({ id, title, url }) => {
            return (
              <InformationFeed
                id={id}
                url={url}
                title={title}
                onRemove={handlerRemoveFeed}
              />
            );
          })
        : null}
    </article>
  );
};

export default ListFeeds;
