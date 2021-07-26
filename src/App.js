import DrumMachine from "./components/DrumMachine"
import styled from 'styled-components/macro';

function App() {
  return (
    <Container className="App">
     <DrumMachine/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
