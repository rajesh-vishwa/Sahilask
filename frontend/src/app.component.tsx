import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/footer.component";
import Header from "./components/header.component";
import AllLisitngScreen from "./screens/all-listing-screen.component";
import ExpireLisitngScreen from "./screens/expire-lisitng-screen.component";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/expire" component={ExpireLisitngScreen} exact />
          <Route path="/" component={AllLisitngScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
