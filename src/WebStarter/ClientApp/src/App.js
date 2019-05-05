// npm imports
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// local components
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { SampleData } from "./pages/SampleData"

function App() {
  return (
    <Layout>
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/sample-data" exact component={SampleData} />
      </Router>
    </Layout>
  );
}

export default App;
