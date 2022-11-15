import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactElement } from 'react';

import { Status } from '../createTaskForm/enums/Status';
import { ItaskCounter } from './interface/ItaskCounter';

import PropTypes from 'prop-types';

const TaskCounter: FC<ItaskCounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props;
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '3px solid',
            width: '90px',
            height: '90px',
            marginBottom: '16px',
            borderColor: 'warning.light',
          }}>
          <Typography color='#ffffff' variant='h4'>
            {count}
          </Typography>
        </Avatar>
        <Typography
          color='#ffffff'
          fontWeight='bold'
          fontSize='20px'
          variant='h5'>
          {status}
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};
