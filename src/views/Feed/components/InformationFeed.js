import { NavLink } from "react-router-dom";

const InformationFeed = ({ id, title, url, onRemove }) => {
  return (
    <div key={id}>
      <span>{title}</span>
      <span>{url}</span>
      <div onClick={() => onRemove(id)}>
        <span className="remove_button">Remover</span>
      </div>
      <NavLink to={`/article/${id}`}>Ver mas</NavLink>
    </div>
  );
};

export default InformationFeed;
