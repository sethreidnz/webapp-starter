// npm imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// local components
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SampleData } from "./pages/SampleData";
import { SampleDataHooks } from "./pages/SampleDataHooks";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/sample-data" exact component={SampleData} />
        <Route path="/sample-data-hooks" exact component={SampleDataHooks} />
      </Layout>
    </Router>
  );
}

export default App;
