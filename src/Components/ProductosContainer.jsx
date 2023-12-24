import { pedirDatos } from "../helpers/pedirDatos";
import { useState, useEffect } from "react";
import Producto from "./Producto";

const ProductosContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos().then((response) => {
      setProductos(response);
    });
  }, []);

  console.log(productos);

  return (
    <div className=" bg-slate-200">
      <h2 className="text-center py-3 bg-orange-500 text-white font-medium text-2xl">
        PRODUCTOS
      </h2>
      <div className="mx-auto my-2 flex flex-col md:flex-row flex-wrap justify-around  w-full  border-solid m-auto p-7  ">
        {productos.map((item) => (
          // <p key={item.id}> {item.nombre} </p>
          <Producto key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductosContainer;
