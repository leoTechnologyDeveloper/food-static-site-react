const Producto = ({ producto }) => {
  const { nombre, categoria, precio, imagen } = producto;

  return (
    <div className="m-2 bg-white p-2  rounded-md flex flex-col  gap-3 w-full md:w-1/4 h-[300px] overflow-hidden">
      <figure className="h-2/3 overflow-hidden">
        <img
          src={imagen}
          className="w-full h-full object-cover"
          alt={`Imagen de ${nombre}`}
        />
      </figure>
      <h2>Plato : {nombre}</h2>
      <p>Precio : ${precio}</p>
      <p className="text-right text-orange-200 bg-black p-2">
        Categoría: {categoria}
      </p>
    </div>
  );
};

export default Producto;
