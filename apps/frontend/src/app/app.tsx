import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/header';
import { MovieGrid } from '../features/movie/components/movie-grid';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MovieGrid />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
