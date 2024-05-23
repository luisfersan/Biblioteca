import "./App.css";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";

function App() {
  const libros = [
    {
      imagen: "https://picsum.photos/200",
      title: "Titulo1",
      description: "Descripcion1",
      generos: [
        { text: "Fantasía", color: "primary" },
        { text: "Clásico", color: "secondary" },
      ],
    },
    {
      imagen: "https://picsum.photos/id/237/200",
      title: "Titulo2",
      description: "Descripcion2",
      generos: [
        { text: "Fantasía", color: "primary" },
        { text: "Clásico", color: "secondary" },
      ],
    },
    {
      imagen: "https://picsum.photos/seed/picsum/200",
      title: "Titulo3",
      description: "Descripcion3",
      generos: [
        { text: "Fantasía", color: "primary" },
        { text: "Clásico", color: "secondary" },
      ],
    },
  ];
  return (
    <>
      <Navbar title="Biblioteca de Libros" />
      <div className="container mt-3">
        <div className="row">
          {libros.map((libro, index) => (
            <div
              className="col-md-4"
              key={index}
            >
              <BookCard {...libro} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
