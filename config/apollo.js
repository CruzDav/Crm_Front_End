//import { ApolloClient } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"; // Apollo..es un cliente, httm..conecta con Apollo
import fetch from "node-fetch"; // obtiene los resulados de Query y trae hacia los componentes

const cliente = new ApolloClient({
  connectToDevTools: true, // para conectar con apollo
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/", // es el link de el servidor
    fetch,
  }),
});

export default cliente;
