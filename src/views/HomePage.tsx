import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function HomePage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>
      <h1>Home page</h1>
    </>
  );
};

export default HomePage;
