import Genero from "./Genero";
function BookCard({ imagen, title, description, generos }) {
  return (
    <div className="card">
      <img
        src={imagen}
        alt={title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Genero generos={generos} />
      </div>
    </div>
  );
}
export default BookCard;
