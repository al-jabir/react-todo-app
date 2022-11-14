import { Box, Typography } from '@mui/material';
import { FC, ReactElement } from 'react';

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
    </Box>
  );
};

export default CreateTaskForm;