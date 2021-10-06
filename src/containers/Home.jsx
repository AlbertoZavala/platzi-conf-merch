import React from "react";
import Products from "../components/Products";
import initialState from '../initialState';
import { Helmet } from "react-helmet";

const Home = () => (
    <>
      <Helmet>
        <title>Platzi Conf Merge - Productos</title>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@gndx"/>
        <meta name="twitter:creator" content="@gndx"/>
        <meta name="twitter:title" content="Platzi Conf Store"/>
        <meta
          name="twitter:description"
          content="Platzi Conf Store"
        />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />

        <meta property="og:title" content="Platzi Conf Store"/>
        <meta
          property="og:description"
          content="Platzi Conf Store"
        />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="platzistore.xyz"/>
        <meta property="og:site_name" content="Platizi Conf Store"/>
        <meta property="og:locale" content="es_ES"/>
        <meta property="og:type" content="article"/>
        <meta property="fb:app_id" content="285513459106600"/>
      </Helmet>
      <Products products={initialState.products} />
    </>
  );

export default Home;