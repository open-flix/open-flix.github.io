import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" color="error.dark">
        OOPS !
      </Typography>
      <Typography variant="h2" color="error.main">
        Something almost went wrong...
      </Typography>
      <Typography variant="h3" color="error.light">
        Except that it did not...
      </Typography>
      <Typography variant="h4" color="warning" gutterBottom>
        you dont seem to believe me...
      </Typography>
      <Typography variant="h5" color="warning.light" gutterBottom>
        you think am bluffing...
      </Typography>
      <Typography variant="h5" color="warning.light" gutterBottom>
        maybe I am not...
      </Typography>
      <Typography variant="h6" color="success" gutterBottom>
        Just kidding the movie id is : <code>{id}</code>
      </Typography>
      <Typography variant="body1" color="text.success" gutterBottom>
        this route is a proof of concept on how to make the
        <em> HashBang (#)</em> or <code>HashRoute</code> work on github pages.
        <br />
        Github pages would not allow client side routing, by using the hashbang
        we tackle this problem. Hence, this page is all about that
        <br />
        To be honest, it created more problems than it solved, but hey, it
        works.
      </Typography>
    </Box>
  );
};
