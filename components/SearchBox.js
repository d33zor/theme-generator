import { useEffect, useState } from 'react';
import { TextField } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../styles/SearchBox.module.css';
import styled from '@mui/styled-engine';
import InputAdornment from '@mui/material/InputAdornment';

// Component ------------------------------------------------------------------------

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
        value={value ? value : ''}
        InputProps={{
          startAdornment: <ColoredSearchIcon />,
          endAdornment: (
            <InputAdornment position='end'>
              {value && (
                <ColoredButton
                  onClick={() => {
                    setValue('');
                  }}
                  aria-label='Clear input'
                >
                  <CloseIcon />
                </ColoredButton>
              )}
            </InputAdornment>
          ),
        }}
      ></Input>
    </div>
  );
}

export default SearchBox;

// Styled ---------------------------------------------------------------------------

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

const ColoredSearchIcon = styled(SearchIcon)({
  color: 'var(--text-color)',
});

const ColoredButton = styled(IconButton)({
  color: 'var(--text-color)',
  zIndex: 1,
  transition: '.2s',
  right: '-10px',
  '&:hover': {
    color: 'var(--text-active-color)',
    zIndex: 2,
  },
});
