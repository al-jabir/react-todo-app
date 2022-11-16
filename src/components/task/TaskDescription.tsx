import { Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

import PropTypes from 'prop-types';
import { ITaskDescription } from './interface/ITaskDescription';

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  //  Destructure Props
  const { description = 'Lorem ipsum dolor sit amet' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
