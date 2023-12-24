const Producto = ({ producto }) => {
  const { id, nombre, categoria, precio, imagen } = producto;

  return (
    <div className="m-2 bg-white p-2 rounded-md flex flex-col  gap-3 w-full md:w-1/4 h-auto overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={imagen}
        alt={`Imagen de ${nombre}`}
      />
      <h2>{nombre}</h2>
      <p>{precio}</p>
    </div>
  );
};

export default Producto;
