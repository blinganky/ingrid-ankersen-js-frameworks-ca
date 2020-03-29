import React from 'react';
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";
import './sass/style.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Heading title="Home" />
      </Layout>
    </div>
  );
}

export default App;
