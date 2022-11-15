import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, ReactElement } from 'react';
import { ISelectField } from './interfaces/ISelectField';

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;
  return (
    <FormControl size='small' fullWidth>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}>
        {items.map((item, inx) => (
          <MenuItem value={item.value} key={inx}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
