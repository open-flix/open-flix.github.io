import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Movie } from '@open-flix/shared'; // Adjust the import path as needed

type MovieITemProps = {
  movie: Movie;
};
export const MovieItem = ({ movie }: MovieITemProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
