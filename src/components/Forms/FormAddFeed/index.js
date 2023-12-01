import { useCallback, useState } from "react";
import useAddFeed from "../../../hooks/useAddFeed";

// TODO: agregaria que el input tenga que tener un valor requerido.

const FormAddFeed = () => {
  const [feed, setFeed] = useState("");

  const { handlerAddFeed } = useAddFeed();

  const handlerSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handlerAddFeed(feed);
    },
    [feed, handlerAddFeed]
  );

  const onChange = (e) => setFeed(e.target.value);

  return (
    <article>
      <h2>Agrega tu propio feed</h2>
      <form onSubmit={handlerSubmit}>
        <div>
          <label>Link Url</label>
          <input type="text" name="url" onChange={onChange} value={feed} />
        </div>

        <input type="submit" value="Enviar" onClick={handlerSubmit} />
      </form>
    </article>
  );
};

export default FormAddFeed;
