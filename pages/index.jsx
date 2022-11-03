import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const Home = () => {
  const session = useSession();

  const supabase = useSupabaseClient();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase
        .from("servicios")
        .delete()
        .eq("id", id)
        .eq("creator_id", session.user.id);
      supabase
        .from("servicios")
        .select("*")
        .then((res) => setData(res.data));
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    supabase
      .from("servicios")
      .select("*")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl font-bold">Servicios</h1>
      {data.length > 5 && (
        <div className="flex gap-10">
          {page > 0 && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setPage(page - 1)}
            >
              Anterior
            </button>
          )}
          {page * 5 + 5 < data.length && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setPage(page + 1)}
            >
              Siguiente
            </button>
          )}
        </div>
      )}
      {data.length === 0 ? <p>No hay servicios</p> : null}
      {data.length > 0 && (
        <ul>
          <li className="px-4 py-2 shadow my-2 rounded text-lg grid grid-cols-5">
            <span>Nombre</span>
            <span>Patente</span>
            <span>Direccion</span>
            <span>Valor</span>
            <span></span>
          </li>
          {data.slice(page * 5, 5 * page + 5).map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 my-2 rounded text-lg grid grid-cols-5 bg-white"
            >
              <p>{item.nombre}</p>
              <p>{item.patente}</p>
              <p>{item.direccion}</p>
              <p>{item.valor}</p>
              <p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-2 rounded"
                >
                  Eliminar
                </button>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
