import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

const Genero = ({ generos }) => {
  return (
    <div>
      {generos.map((genero) => (
        <Badge
          bg={genero.color}
          className="me-1"
        >
          {genero.text}
        </Badge>
      ))}
    </div>
  );
};

export default Genero;
