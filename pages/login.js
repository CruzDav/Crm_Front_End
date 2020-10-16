import React from "react";
import Layout from "../components/layout";

const login = () => {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-center text-white text-2xl font-light">Login</h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
              <div className="mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlForP="Email"
                >
                  Email
                </label>
                <input //inp"sombra,-app--, borde  redondeo,all ancho,paddin en y, paddin en x, texto gris obsc, ensancha todo, si hay cursor no linea de borde, si hay cursor sombrear linea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="Email"
                  placeholder="Email de Usuario" // nombre al fondo
                ></input>
              </div>

              <div className="mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlForP="Password"
                >
                  Password
                </label>
                <input //inp"sombra,-app--, borde  redondeo,all ancho,paddin en y, paddin en x, texto gris obsc, ensancha todo, si hay cursor no linea de borde, si hay cursor sombrear linea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" //
                  id="Password" //
                  type="Password"
                  placeholder="Password de Usuario" // nombre al fondo
                ></input>
              </div>

              <input
                type="submit" // agrega un boton por def "enviar"
                className="bg-blue-900 mt-5 p-2 w-full text-white uppercase hover:bg-blue-700" //colo fondo azul absuc, margin de arriba, paddin 2, toma todo el ancho, texto en blanco, todo en Mayuscula
                value="Iniciar Sesión" // Agreda nombre al Boton
              ></input>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default login;
