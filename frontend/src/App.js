import styled from "styled-components";
import { useMemo, useState } from "react";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/orb/Orb"; 
import Navigation from "./components/navigation/Navigation";

function App() {
  const [active, setActive] = useState(1)

  const orbMemo = useMemo(() => {
    return <Orb></Orb>
  }, [])

  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: ;
  position: relative;
`;

export default App;
