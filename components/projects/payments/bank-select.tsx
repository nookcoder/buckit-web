import React from 'react';
import styles from '../../../styles/components/projects/payments/Payments.module.scss';
import {
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material';
import { BANKS } from '../../../constants';

interface BankSelectProps {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const BankSelect = ({ value, setValue }: BankSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>은행선택</div>
      <div>
        <Select
          displayEmpty={true}
          labelId={'bank-select'}
          id="demo-simple-select"
          value={value}
          label="banks"
          onChange={handleChange}
          input={<BankInput />}
        >
          <MenuItem value={''} disabled={true}>
            <em>은행을 선택해주세요</em>
          </MenuItem>
          {BANKS.map((bank, index) => (
            <MenuItem key={index} value={bank.value}>
              {bank.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

const BankInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: '1px solid white',
    padding: '15px 0',
    fontSize: '18px',
  },
}));

export default BankSelect;
