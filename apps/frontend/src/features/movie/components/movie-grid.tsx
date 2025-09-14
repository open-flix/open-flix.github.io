import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Movie } from '@open-flix/shared';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InfiniteGrid } from '../../../components/infinit-grid';
import { useGetMoviesByTitleQuery } from '../services/movie.api';
import { MovieItem } from './movie-Item';
const Grid = styled('div')({
  height: 'calc(100vh - 70px)',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
});

export const MovieGrid = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('title') || '';
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [query]);

  const { data, isError, isLoading } = useGetMoviesByTitleQuery({
    title: query,
    page: page.toString(),
  });

  useEffect(() => {
    if (data) {
      setMovies((prev) => [...prev, ...data.results]);
      setHasMore(data.page < data.total_pages);
    }
  }, [data]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      {isError && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 4,
          }}
        >
          <WarningAmberIcon sx={{ fontSize: '40vw' }} color="error" />
          <Typography color="error">
            could not fetch movies, please try again later.
          </Typography>
        </Box>
      )}

      {!isError && (
        <InfiniteGrid
          data={movies}
          hasMore={hasMore}
          isLoading={isLoading}
          endReached={() => {
            if (hasMore && !isLoading) loadMore();
          }}
          itemContent={(index: number, movie: Movie) => (
            <MovieItem movie={movie} />
          )}
        />
      )}
    </Grid>
  );
};
