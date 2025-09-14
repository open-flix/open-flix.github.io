import { styled } from '@mui/material/styles';
import { Movie } from '@open-flix/shared';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { VirtuosoGrid } from 'react-virtuoso';
import { useGetMoviesByTitleQuery } from '../services/movie.api';
import { MovieItem } from './movie-Item';

const Grid = styled('div')({
  height: 'calc(100vh - 70px)',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '.movie-grid-list': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
    // overflow: 'auto',
  },
  '.movie-grid-item': {
    display: 'flex',
    flex: 'none',
    alignContent: 'stretch',
    boxSizing: 'border-box',
  },
});

export const MovieGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('title') || '';
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [query]);

  const { data, error, isLoading } = useGetMoviesByTitleQuery({
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
      <VirtuosoGrid
        data={movies}
        style={{ height: '100%', width: 'auto', position: 'relative' }}
        listClassName="movie-grid-list"
        itemClassName="movie-grid-item"
        endReached={() => {
          if (hasMore) loadMore();
        }}
        components={{
          Footer: () =>
            hasMore ? (
              <div style={{ textAlign: 'center', padding: 16 }}>Loading...</div>
            ) : (
              <div style={{ textAlign: 'center', padding: 16 }}>
                No more movies
              </div>
            ),
        }}
        itemContent={(index: number, movie: Movie) => (
          <MovieItem movie={movie} />
        )}
      />
    </Grid>
  );
};
