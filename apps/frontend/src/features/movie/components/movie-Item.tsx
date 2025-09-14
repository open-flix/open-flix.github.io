import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Movie } from '@open-flix/shared'; // Adjust the import path as needed

const Thumbnail = styled('div')(({ theme }) => ({
  width: '200px',
  height: '300px',
  backgroundColor: `${theme.palette.mode === 'dark' ? '#333' : '#eee'}`,
}));

const ThumbnailImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

type MovieITemProps = {
  movie: Movie;
};
export const MovieItem = ({ movie }: MovieITemProps) => {
  const prefix = 'https://image.tmdb.org/t/p/w200';
  return (
    <Thumbnail>
      <ThumbnailImage
        src={`${prefix}${movie.poster_path}`}
        alt={movie.title}
        title={movie.title}
        // onError={(e) => {
        //   e.currentTarget.src = '/fallback.jpg'; // Path to your fallback image
        // }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
      </CardContent>
    </Thumbnail>
  );
};
