import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

import PropTypes from 'prop-types';

export const TaskDescriptinoField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e), disabled = false } = props;
  return (
    <TextField
      id='description'
      label='Description'
      placeholder='Description'
      variant='outlined'
      size='small'
      name='title'
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescriptinoField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
