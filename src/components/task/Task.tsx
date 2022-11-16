import { FC, ReactElement } from 'react';

import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Priority } from '../createTaskForm/enums/Priority';
import { Status } from '../createTaskForm/enums/Status';
import { renderPriorityBorderColor } from './helpers/RenderPriorityBorderColor';
import { ITask } from './interface/ITask';
import { TaskDescription } from './TaskDescription';
import { TaskFooter } from './TaskFooter';
import { TaskHeader } from './TaskHeader';

export const Task: FC<ITask> = (props): ReactElement => {
  //  Destructure props
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='flex-start'
      flexDirection='column'
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}>
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
