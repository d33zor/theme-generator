import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import styles from '../styles/CheckboxForm.module.css';
import styled from '@mui/styled-engine';

// Component ------------------------------------------------------------------------

function CheckboxForm({ data: { name, id, url }, handleChange }) {
  return (
    <div className={styles.ParentDiv}>
      <FormControlLabel
        control={<CheckBox id={id} onClick={handleChange} />}
        label={name}
        className={`${styles.FormControlLabel} checkbox-form`}
      />
      <a
        className={styles.ImageDescription}
        target='_blank'
        rel='noopener noreferrer'
        href={url}
      >
        Link do obrazka
      </a>
    </div>
  );
}

export default CheckboxForm;

// Styled ---------------------------------------------------------------------------

const CheckBox = styled(Checkbox)({
  '& .MuiSvgIcon-root': {
    color: 'var(--text-color)',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'var(--text-active-color)',
  },
  '&.Mui-checked + .MuiTypography-root': {
    color: 'var(--text-active-color)',
    transition: '.1s',
  },
});
