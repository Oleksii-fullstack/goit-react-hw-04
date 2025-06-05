import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Section from "./components/Section/Section";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <Section>
      <Container>
        <SearchBar />
      </Container>
    </Section>
  );
};

export default App;
