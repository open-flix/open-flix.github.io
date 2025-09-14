import { Provider } from 'react-redux';
import { Header } from '../components/header';
import { MovieGrid } from '../features/movie/components/movie-grid';
import { store } from '../store/store';

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <MovieGrid />
      </main>
    </Provider>
  );
}

export default App;
