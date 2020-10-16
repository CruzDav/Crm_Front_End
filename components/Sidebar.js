import React from "react";
import Link from "next/link";
import { useRouter } from "next/router"; //Detecta la pagina actual que tenga "/"  y la datecta

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5  sm:min-h-screen p-5 ">
      <div>
        <p className="text-white text-2xl font-black">CRM CLIENTE</p>
      </div>

      <nav className="mt-5 list-none">
        <a className="text-white block">
          {/*------espacio */}
          <li className={router.pathname === "/" ? "bg-blue-800 p-2" : "p-2"}>
            {/*si tiene "/" asignar bg.... si no solo asignar p-2*/}
            {/*------enlace con mejor performance (reemplaza al <a></a> ) */}
            {/*---importamos el compenente Link */}
            {/*------listas */}
            <Link href="/">Clientes</Link>
          </li>
        </a>

        <a className="text-white block">
          <li
            className={
              router.pathname === "/pedidos" ? "bg-blue-800 p-2" : "p-2"
            }
          >
            <Link href="/pedidos">Pedidos</Link>
          </li>
        </a>

        <a className="text-white ">
          <li
            className={
              router.pathname === "/productos" ? "bg-blue-800 p-2" : "p-2"
            }
          >
            <Link href="/productos">Productos</Link>
          </li>
        </a>
      </nav>
    </aside>
  );
};
export default Sidebar;
