import { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';
import SideBar from '../components/sidebar/SideBar';
import { TaskArea } from '../components/taskArea/TaskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight='100vh' p={0} m={0}>
      <TaskArea />
      <SideBar />
    </Grid>
  );
};

export default Dashboard;
