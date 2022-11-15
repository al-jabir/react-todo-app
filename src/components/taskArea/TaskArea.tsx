import { Box, Grid } from '@mui/material';
import { FC, ReactElement } from 'react';

import { format } from 'date-fns';
import TaskCounter from '../taskCounter/TaskCounter';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks As on {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display='flex' justifyContent='center'>
        <Grid
          item
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          md={10}
          xs={12}
          mb={8}>
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display='flex' flexDirection='column'>
          <Box>Tasks Will Come Over Here</Box>
          <Box>Tasks Will Come Over Here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
