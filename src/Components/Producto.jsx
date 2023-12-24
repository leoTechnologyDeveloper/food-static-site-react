const Producto = ({ producto }) => {
  const { nombre, categoria, precio, imagen } = producto;

  return (
    <div className="m-2 bg-white p-2 rounded-md flex flex-col  gap-3 w-full md:w-1/4 h-auto overflow-hidden">
      <img
        src={imagen}
        className="w-full h-full object-cover"
        alt={`Imagen de ${nombre}`}
      />
      <h2>Plato : {nombre}</h2>
      <p>Precio : ${precio}</p>
      <p>Categoría: {categoria}</p>
    </div>
  );
};

export default Producto;
