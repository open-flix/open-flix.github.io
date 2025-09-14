import PlayArrow from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/system';
import { Movie } from '@open-flix/shared'; // Adjust the import path as needed
import { Link } from 'react-router-dom';
const Title = styled(Typography)({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  color: 'white',
});
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
  backgroundColor: 'rgba(102, 102, 102, 0.8)',
  color: 'white',
  flexDirection: 'column',
  willChange: 'opacity',
  transition: 'opacity 0.3s ease',
  cursor: 'pointer',
  '&:hover': { opacity: 1 },
});
type MovieItemProps = {
  movie: Movie;
};
export const MovieItem = ({ movie }: MovieItemProps) => {
  const prefix = 'https://image.tmdb.org/t/p/w200';
  return (
    <Link to={`/${movie.id}`}>
      <Thumbnail square={false} elevation={3}>
        <ThumbnailImage
          src={`${prefix}${movie.poster_path}`}
          alt={movie.title}
          // Path to your fallback image not found
          // onError={(e) => {
          //   e.currentTarget.src = '/image-not-found.jpg';
          // }}
        ></ThumbnailImage>

        <Overlay>
          <PlayArrow
            style={{
              fontSize: 90,
              margin: '0 auto',
              color: 'color.accent',
              flexGrow: 1,
            }}
          />

          <Box sx={{ position: 'absolute', bottom: 10, left: 10 }}>
            <Typography variant="body2" color="inherit">
              {movie.title}
            </Typography>
            <Rating
              name="read-only"
              value={movie.vote_average / 2}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
        </Overlay>
      </Thumbnail>
    </Link>
  );
};
