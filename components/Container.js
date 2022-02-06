import data from '../utils/data';
import InputForm from './InputForm';
import styles from '../styles/Container.module.css';
import styled from '@mui/styled-engine';
import { useState } from 'react';
import SubmitForm from './SubmitForm';
import CheckboxForm from './CheckboxForm';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchBox from './SearchBox';

// Component ------------------------------------------------------------------------

function Container() {
  const [values, setValues] = useState({});

  const handleChange = ({ target: { id, value, checked, type } }) => {
    if (type === 'text') {
      if (value) {
        setValues({
          ...values,
          [id]: value,
        });
      } else {
        const { [id]: deletedProp, ...newObj } = values;
        setValues(newObj);
      }
    } else {
      setValues({
        ...values,
        [id]: checked,
      });
    }
  };

  return (
    <>
      <SearchBox />
      <div className={styles.Div}>
        {data.map((el) => {
          return el.type === 'input' ? (
            <InputForm
              handleChange={handleChange}
              key={el.id}
              data={el}
              value={values[el.id] ? values[el.id] : ''}
              InputProps={{
                endAdornment: (
                  <ColoredButton
                    onClick={() => {
                      const { [el.id]: deletedProp, ...newObj } = values;
                      setValues(newObj);
                    }}
                    aria-label='Clear input'
                  >
                    <CloseIcon />
                  </ColoredButton>
                ),
              }}
            />
          ) : (
            <CheckboxForm key={el.id} handleChange={handleChange} data={el} />
          );
        })}
      </div>
      <SubmitForm values={values} setValues={setValues} />
    </>
  );
}
export default Container;

// Styled ---------------------------------------------------------------------------

const ColoredButton = styled(IconButton)({
  color: 'var(--text-color)',
  background: 'var(--container-color)',
  zIndex: 1,
  transition: '.2s',
  right: '-10px',
  '&:hover': {
    color: 'var(--text-active-color)',
    background: 'var(--container-color)',
    zIndex: 2,
  },
});
