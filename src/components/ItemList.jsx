import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
