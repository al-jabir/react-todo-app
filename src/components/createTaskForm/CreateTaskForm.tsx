import { Box, Stack, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';
import { TaskDateField } from './TaskDateField';
import { TaskDescriptinoField } from './TaskDescriptionField';
import { TaskSelectField } from './TaskSelectField';
import { TaskTitleField } from './TaskTitleField';

import { Status } from './enums/Status';

import PropTypes from 'prop-types';
import { Priority } from './enums/Priority';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display='flex'
      alignItems='flex-start'
      flexDirection='column'
      width='100%'
      px={4}
      my={6}>
      <Typography mb={2} component='h2' variant='h6'>
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptinoField />
        <TaskDateField />
        <Stack direction='row' sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            label='Status'
            name='Status'
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label='Priority'
            name='priority'
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
};
