import LiveTvIcon from '@mui/icons-material/LiveTv';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Search } from './search';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link
          component="a"
          href="/"
          underline="none"
          color="primary.contrastText"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <LiveTvIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            OpenFlix
          </Typography>
        </Link>
        <Search />
      </Toolbar>
    </AppBar>
  );
};
