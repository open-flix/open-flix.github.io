import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { VirtuosoGrid } from 'react-virtuoso';

const VGrid = styled(VirtuosoGrid)({
  height: '100%',
  width: 'auto',
  position: 'relative',
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

type InfiniteGridProps<T> = {
  data: T[];
  itemContent: any;
  endReached?: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
};

export function InfiniteGrid<T>({
  hasMore,
  isLoading,
  ...restProps
}: InfiniteGridProps<T>) {
  return (
    <VGrid
      {...restProps}
      listClassName="movie-grid-list"
      itemClassName="movie-grid-item"
      components={{
        Footer: () =>
          hasMore && (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: '4rem',
                overflow: 'hidden',
              }}
            >
              <CircularProgress size="3rem" color="primary" />
            </Box>
          ),
      }}
    />
  );
}
