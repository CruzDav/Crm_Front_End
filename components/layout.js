import React from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";

/*  --- Children ---- llama a cualquier pagina designada en este caso pedido, productos, index(se ejecuta por defoult), 
     ---Children--- se manda a llamar en el codigo ({Children})
En la pagina designada se ejecutan todos los estilos echos en Layout
*/

const Layout = ({ children }) => {
  {
    /* ------ Children = niños = paginas */
  }

  const router = useRouter();
  return (
    <>
      <Head>
        <title>CRM-ADMINISTRACION DE CLIENTES</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        ,
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      {router.pathname === "/login" || "nueva_cuenta" ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>{children}</div>
        </div>
      ) : (
        <div className="bg-gray-400 min-h-screen">
          <div className="flex min-h-screen ">
            <Sidebar />

            <main className="sm:w-2/3 xl:w-4/5  sm:min-h-screen p-5">
              {children} {/*--------LLAMAMOS A LA PAGINA  */}
            </main>
          </div>
        </div>
      )}
    </>
  );
};
export default Layout;
