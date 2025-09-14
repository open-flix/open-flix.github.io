import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { Movie } from '@open-flix/shared'; // Adjust the import path as needed

const Thumbnail = styled(Paper)(({ theme }) => ({
  width: '200px',
  height: '300px',
  overflow: 'hidden',
  position: 'relative',
}));

const ThumbnailImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Overlay = styled('div')({
  position: 'absolute',
  display: 'flex',
  opacity: 0,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  flexDirection: 'column',
  willChange: 'opacity',
  transition: 'opacity 0.3s ease',
  '&:hover': { opacity: 1 },
});
type MovieItemProps = {
  movie: Movie;
};
export const MovieItem = ({ movie }: MovieItemProps) => {
  const prefix = 'https://image.tmdb.org/t/p/w200';
  return (
    <Thumbnail square={false} elevation={3}>
      <ThumbnailImage
        src={`${prefix}${movie.poster_path}`}
        alt={movie.title}

        // onError={(e) => {
        //   e.currentTarget.src = '/fallback.jpg'; // Path to your fallback image
        // }}
      />

      <Overlay>{movie.title}</Overlay>
    </Thumbnail>
  );
};
