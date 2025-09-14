import Box from '@mui/material/Box';
import { Movie } from '@open-flix/shared';
import { forwardRef, useEffect, useState } from 'react';
import { useGetMoviesByTitleQuery } from '../services/movie.api';
import { MovieItem } from './movie-Item';

import { VirtuosoGrid } from 'react-virtuoso';
export const MovieGrid = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, error, isLoading } = useGetMoviesByTitleQuery({
    title: 'batman',
    page: page.toString(),
  });
  console.log(data, error, isLoading);

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
    <Box
      sx={{
        height: 'calc(100vh - 70px)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '6px',
      }}
    >
      <VirtuosoGrid
        data={movies}
        style={{ height: '100%', width: 'auto', position: 'relative' }}
        endReached={() => {
          if (hasMore) loadMore();
        }}
        components={{
          List: forwardRef(({ style, children, ...props }: any, ref) => (
            <div
              ref={ref}
              {...props}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                overflow: 'auto',
                ...style,
              }}
            >
              {children}
            </div>
          )),
          Item: ({ children, ...props }: any) => (
            <div
              {...props}
              style={{
                padding: '0.5rem',
                display: 'flex',
                flex: 'none',
                alignContent: 'stretch',
                boxSizing: 'border-box',
              }}
            >
              {children}
            </div>
          ),
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
    </Box>
  );
};
