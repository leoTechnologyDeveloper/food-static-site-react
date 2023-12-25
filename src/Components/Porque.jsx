const Porque = () => {
  return (
    <div className="bg-slate-200 my-10 p-5">
      <div className="w-10/12 flex-col  mx-auto">
        <h2 className="text-3xl my-8">Por que Nosotros ?</h2>
        <p className="text-xl ">
          Italian experience es una exquicita experiencia de Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Provident laborum animi
          perspiciatis quibusdam error eaque autem nulla earum.
        </p>
        <div className="flex flex-col md:flex-row  mx-auto justify-around  gap-6 my-8">
          <img
            className="w-full md:w-1/2 rounded-lg mx-auto "
            src="https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen nosotros pasta"
          />
          <div className="flex flex-col gap-8 justify-center items-start">
            <h3 className="text-blue-700 text-4xl">Calidad</h3>
            <p className="text-xl tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, vero cupiditate deleniti fugiat iusto dolore,
              molestias a sit fugit recusandae nisi non, dolorum perspiciatis
              aliquid.{" "}
            </p>
            <button className="text-2xl p-3 bg-blue-800 text-white rounded-3xl px-6 py-4 hover:bg-blue-600 m-auto">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porque;
