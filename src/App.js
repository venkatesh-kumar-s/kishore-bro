import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import { AppRoutes } from "./routes";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Apollo GraphQL Client
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://kishore-natte.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "h9CaXvV0POt6RlOQtyauZaHmLn0NijZ4r1cF1UPT4xqbp2JrTG8LRIC4VVM2USi0",
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client] = useState(createApolloClient());

  return (
    <ApolloProvider client={client}>
      <div className="App h-100">
        <Router>
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              {AppRoutes?.map((r, i) => (
                <Route key={i} path={r?.path} element={r?.component} />
              ))}
            </Routes>
          </React.Suspense>
        </Router>
        <ScrollToTop />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
