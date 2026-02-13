export default function Products() {
  const products = [
    { id: 1, name: "Arome Lavande", price: 15, stock: 10 },
    { id: 2, name: "Arome Citron", price: 12, stock: 5 },
    { id: 3, name: "Arome Vanille", price: 18, stock: 3 },
  ];

  return (
    <div>
      <h1>Nos Produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Prix: {product.price}€</p>
            <p>Stock disponible: {product.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
