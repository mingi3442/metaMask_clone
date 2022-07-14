import Header from "./components/Header";
import Router from "./Router";
import styled from "styled-components";
import { useObserver } from "mobx-react";

const Container = styled.div`
  background-color: #e9ecef;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return useObserver(() => (
    <Container>
      <Header />
      <Router />
    </Container>
  ));
}

export default App;
