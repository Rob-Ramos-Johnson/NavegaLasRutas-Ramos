import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.imagen} className="card-img-top" alt={product.nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{product.nombre}</h5>
          <p>${product.precio}</p>
          <Link to={`/item/${product.id}`} className="btn btn-dark">Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
