import { useGetMoviesByTitleQuery } from '../services/movie.api';

export const MovieGrid = () => {
  const { data, error, isLoading } = useGetMoviesByTitleQuery({
    title: 'batman',
    page: '1',
  });
  console.log(data, error, isLoading);
  return <div>MovieGrid</div>;
};
