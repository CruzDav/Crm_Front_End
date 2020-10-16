import React from "react";
import Layout from "../components/layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const nuevacuenta = () => {
  // Validacion de formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es Obligatorio"),
      apellido: Yup.string().required("El apellido es Obligatorio"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es Obligatorio"),
      password: Yup.string()
        .required("El password no puede ir vacio")
        .min(6, "El password debe ser de al menos 6 carcteres"),
    }),

    onSubmit: (valores) => {
      console.log("///////////////////////valores");
      console.log(valores);
    },
  });
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-center text-white text-2xl font-light">
            Registrar Nuevo Usuario
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit} //en cada envio de formulario chequea lo que esta adentro
            >
              <div className="mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlForP="nombre"
                >
                  Nombre
                </label>
                <input //inp"sombra,-app--, borde  redondeo,all ancho,paddin en y, paddin en x, texto gris obsc, ensancha todo, si hay cursor no linea de borde, si hay cursor sombrear linea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Nombre de Usuario" // nombre al fondo
                  value={formik.values.nombre} // valida cada campo
                  onChange={formik.handleChange} // Va leyendo lo que el usuario agrega en el campo
                  onBlur={formik.handleBlur} // si se sale del campo manda a obligar llear campo
                ></input>
              </div>
              {formik.touched.nombre && formik.errors.nombre ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.nombre}</p>
                </div>
              ) : null}

              <div className="mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlForP="apellido"
                >
                  Apellido
                </label>
                <input //inp"sombra,-app--, borde  redondeo,all ancho,paddin en y, paddin en x, texto gris obsc, ensancha todo, si hay cursor no linea de borde, si hay cursor sombrear linea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="apellido"
                  type="text"
                  placeholder="Apellido de Usuario" // nombre al fondo
                  value={formik.values.apellido} // valida cada campo
                  onChange={formik.handleChange} // Va leyendo lo que el usuario agrega en el campo
                ></input>
              </div>
              {formik.errors.apellido ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.apellido}</p>
                </div>
              ) : null}

              <div className="mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlForP="email"
                >
                  Email
                </label>
                <input //inp"sombra,-app--, borde  redondeo,all ancho,paddin en y, paddin en x, texto gris obsc, ensancha todo, si hay cursor no linea de borde, si hay cursor sombrear linea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email de Usuario" // nombre al fondo
                  value={formik.values.email} // valida cada campo
                  onChange={formik.handleChange} // Va leyendo lo que el usuario agrega en el campo
                ></input>
              </div>
              {formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}

              <div className="mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlForP="Password"
                >
                  Password
                </label>
                <input //inp"sombra,-app--, borde  redondeo,all ancho,paddin en y, paddin en x, texto gris obsc, ensancha todo, si hay cursor no linea de borde, si hay cursor sombrear linea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" //
                  id="password" //
                  type="password"
                  placeholder="Password de Usuario" // nombre al fondo
                  value={formik.values.password} // valida cada campo
                  onChange={formik.handleChange} // Va leyendo lo que el usuario agrega en el campo
                ></input>
              </div>
              {formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-1">
                  <p className="font-bold">Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}

              <input
                type="submit" // agrega un boton por def "enviar"
                className="bg-blue-900 mt-5 p-2 w-full text-white uppercase hover:bg-blue-700" //colo fondo azul absuc, margin de arriba, paddin 2, toma todo el ancho, texto en blanco, todo en Mayuscula
                value="Crear CuentA" // Agreda nombre al Boton
              ></input>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default nuevacuenta;
