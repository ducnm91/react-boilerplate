import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MouseTracker from "components/RenderProp";

function HomePage() {
  const { t } = useTranslation(["translation"]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>
      <h2>{t("Welcome to React")}</h2>
      {/* <MouseTracker /> */}
    </>
  );
}

export default HomePage;
