import { TextField } from '@mui/material/';
import styles from '../styles/InputForm.module.css';
import styled from '@mui/styled-engine';
import { DebounceInput } from 'react-debounce-input';

// Component ------------------------------------------------------------------------

function InputForm({
  data: { name, id, url },
  handleChange,
  InputProps,
  value,
}) {
  return (
    <div className={styles.Div}>
      <DebounceInput
        debounceTimeout={300}
        onChange={handleChange}
        id={id}
        value={value}
        element={Input}
        label={name}
        InputProps={InputProps}
      />
      <div className={styles.ChildDiv}>
        <a
          className={styles.ImageDescription}
          target='_blank'
          rel='noopener noreferrer'
          href={url}
        >
          Link do obrazka
        </a>
      </div>
    </div>
  );
}

export default InputForm;

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
