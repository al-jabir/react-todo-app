import { Grid } from '@mui/material';
import { FC, ReactElement } from 'react';

const SideBar: FC = (): ReactElement => {
  return (
    <>
      <Grid
        item
        md={4}
        sx={{
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.17)',
          //   borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(1.6px)',
          WebkitBackdropFilter: 'blur(1.6px)',
          border: '1px solid rgba(255, 255, 255, 0.36)',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <h1>I will be sidebar app</h1>
      </Grid>
    </>
  );
};

export default SideBar;
