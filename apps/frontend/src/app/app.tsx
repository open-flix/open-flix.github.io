import styled from '@emotion/styled';
import { Header } from '../components/header';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <NxWelcome title="@open-flix/frontend" />
    </StyledApp>
  );
}

export default App;
