import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/header';
import { MovieDetailsPage } from '../pages/movie.page';
import { MoviesPage } from '../pages/movies.page';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1976d2' },
    secondary: { main: '#ac3b61' },
    error: { main: '#ff1744' },
    warning: { main: '#ff9100' },
    info: { main: '#00e5ff' },
    success: { main: '#00e676' },
  },
});
export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/:id" element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
