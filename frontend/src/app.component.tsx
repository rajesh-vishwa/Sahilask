import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer.component";
import Header from "./components/header.component";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Welcome </h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
