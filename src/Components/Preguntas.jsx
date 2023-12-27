import { useState } from "react";
import Accordion from "./Accordion";

const Preguntas = () => {
  const [list, setList] = useState([
    {
      question: "Cuales son los métodos de pago ?",
      answer: "Efectivo, Nequi, Transferencia",
      active: 1,
    },
    {
      question: "Cómo compro los productos ?",
      answer: "Contacto en nuestra página y vía WhatsApp",
    },
    {
      question: "Cómo es la forma de entrega ?",
      answer: "Immediata de acuerdo a la distancia",
    },
    {
      question: "Hacen devoluciones ?",
      answer: "Siempre y cuando este en el tiempo de garantía",
    },
  ]);

  return (
    // <div className="w-10/12 flex-col  mx-auto">
    //   <h2 className="text-3xl my-8">Preguntas Frecuentes </h2>
    //   <div className="flex flex-col md:flex-row  mx-auto justify-around"></div>
    // </div>

    <div className="flex flex-col items-center mx-auto wrapper w-full text-center">
      <h2 className="text-2xl md:text-3xl my-8 font-bold">
        Preguntas Frecuentes{" "}
      </h2>
      {/* <div className="flex flex-col md:flex-row  mx-auto justify-around"></div> */}
      <div className="  py-5  max-w-screen-lg">
        <div className="list w-11/12 md:w-3/5  mx-auto flex justify-center items-center flex-wrap">
          {list.map((item, key) => (
            <Accordion key={key} datas={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
