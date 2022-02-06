import { useEffect, useState } from 'react';
import { TextField } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/SearchBox.module.css';
import styled from '@mui/styled-engine';

function SearchBox() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const forms = document.querySelectorAll('.form');
    const checkboxForms = document.querySelectorAll('.checkbox-form');
    forms.forEach((form) => {
      if (
        form.firstChild.dataset.name.toLowerCase().includes(value.toLowerCase())
      ) {
        form.style.display = 'flex';
        checkboxForms.forEach((form) => {
          form.parentElement.style.display = 'flex';
        });
      } else {
        form.style.display = 'none';
        checkboxForms.forEach((form) => {
          form.parentElement.style.display = 'none';
        });
      }
    });
  }, [value]);

  return (
    <div className={styles.Container}>
      <Input
        className={styles.Input}
        placeholder='Szukaj...'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      ></Input>
    </div>
  );
}

export default SearchBox;

const Input = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--text-active-color)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--text-active-color)',
  },
  '& .MuiInputLabel-root': {
    color: 'var(--text-color)',
  },
  '& .MuiInputBase-root': {
    color: 'var(--text-active-color)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(43, 55, 74)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--text-color)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--text-active-color)',
    },
  },
});
