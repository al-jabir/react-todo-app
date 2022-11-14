import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactElement } from 'react';

// import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
  const { name = 'Sarah' } = props;
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'>
      <Avatar
        sx={{
          width: '90px',
          height: '90px',
          background: 'purple',
          marginBottom: '16px',
        }}>
        <Typography variant='h3' color='text.primary'>
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant='h6' color='white'>
        Welcome,{' '}
        <span style={{ fontWeight: 'bold', color: 'lime', fontSize: '1.5rem' }}>
          {`${name}`}
        </span>
      </Typography>
      <Typography variant='body1' color='silver'>
        This is your personal tasks maneger
      </Typography>
    </Box>
  );
};

export default Profile;

// Profile.propTypes = {
//   name: PropTypes.string,
// };
