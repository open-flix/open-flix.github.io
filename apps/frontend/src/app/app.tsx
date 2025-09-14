import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/header';
import { MovieDetailsPage } from '../pages/movie.page';
import { MoviesPage } from '../pages/movies.page';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/:id" element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
