import { ApolloProvider } from "@apollo/client";
import cliente from "../config/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // apolloProvider integra a apollo todos los componentes de cada page creada
    <ApolloProvider client={cliente}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
