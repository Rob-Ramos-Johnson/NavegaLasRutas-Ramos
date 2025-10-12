function ItemDetail({ item }) {
  return (
    <div className="card mx-auto" style={{ maxWidth: "500px" }}>
      <img src={item.imagen} className="card-img-top" alt={item.nombre} />
      <div className="card-body text-center">
        <h4>{item.nombre}</h4>
        <p>{item.descripcion}</p>
        <p><strong>${item.precio}</strong></p>
        <button className="btn btn-success">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;
