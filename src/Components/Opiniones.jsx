import CardOpinion from "./CardOpinion";

const opiniones = [
  {
    face: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Guido Otero",
    text: "Excelente predisposición y producto, muy atentos !! Super recomendable",
  },
  {
    face: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Emilia López",
    text: "Recomendable el producto, excelente calidad y servicio",
  },
  {
    face: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Tere López",
    text: "Muy Buena Calidad de Producto y Exelente Atención",
  },
];

const Opiniones = () => {
  return (
    <div className="w-10/12 flex-col  mx-auto">
      <h2 className="text-4xl my-8">Que dicen de Nuestros productos ?</h2>
      <div className="flex flex-col md:flex-row  mx-auto justify-around">
        {opiniones.map((item) => (
          <CardOpinion key={item.id} opinion={item} />
        ))}
      </div>
    </div>
  );
};

export default Opiniones;
