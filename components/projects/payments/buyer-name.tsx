import React, { ChangeEvent } from 'react';
import styles from '../../../styles/components/projects/payments/Payments.module.scss';
import { InputBase, styled, TextField } from '@mui/material';

interface BuyerNameProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const BuyerName = ({ value, setValue }: BuyerNameProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <div className={styles.buyer_name_container}>
      <div className={styles.title}>구매자명</div>
      <div>
        <BuyerInput />
      </div>
    </div>
  );
};

const BuyerInput = styled(InputBase)(({ theme }) => ({
  border: 'none',
  fontSize: '20px',
  '& input': {
    textAlign: 'right',
  },
}));

export default BuyerName;
