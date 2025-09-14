import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Search } from './search';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <AdbIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
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
        </Box>
        <Search />
      </Toolbar>
    </AppBar>
  );
};
