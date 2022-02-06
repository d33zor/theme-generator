import { Button } from '@mui/material/';
import { useRef, useState, useEffect } from 'react';
import ScrollTopButton from './ScrollTopButton';
import CodeContainer from './CodeContainer';
import styled from '@mui/styled-engine';
import data from '../utils/data';
import styles from '../styles/SubmitForm.module.css';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

// Component ------------------------------------------------------------------------

function SubmitForm({ values, setValues }) {
  const [buttonText, setButtonText] = useState('Generuj motyw');
  const [code, setCode] = useState({});
  const codeEndRef = useRef(null);
  const submitButton = useRef();
  const notInitialRender = useRef(false);
  const obj = {};

  useEffect(() => {
    if (notInitialRender.current) {
      if (!code.hasOwnProperty('undefined')) {
        codeEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        setButtonText('Wypełnij pole!');
        submitButton.current.classList.add('shake');
        setTimeout(() => {
          setButtonText('Generuj motyw');
          submitButton.current.classList.remove('shake');
        }, 1000);
      }
    } else {
      notInitialRender.current = true;
    }
  }, [code]);

  const handleClick = () => {
    data.forEach((el) => {
      for (let value in values) {
        if (el.id === value) {
          if (el.type === 'input') {
            obj[value] = el.code.replace(/%link%/g, `'${values[value]}'`);
          }
          if (el.type === 'checkbox') {
            values[value] && (obj[value] = el.code);
          }
        }
      }
    });
    const keys = Object.keys(obj);
    obj[keys[0]] = '$(`<style>' + obj[keys[0]];
    obj[keys[keys.length - 1]] += '</style>`).appendTo(document.head);';
    setCode(obj);
  };

  return (
    <>
      <div className={styles.ButtonContainer}>
        <ColorButton
          startIcon={<SettingsSuggestIcon />}
          variant='outlined'
          onClick={handleClick}
          ref={submitButton}
        >
          {buttonText}
        </ColorButton>
      </div>
      <ScrollTopButton />
      <CodeContainer code={code} />
      <div ref={codeEndRef} />
    </>
  );
}

export default SubmitForm;

// Styled ---------------------------------------------------------------------------

const ColorButton = styled(Button)({
  transition: '.2s',
  color: 'var(--text-active-color)',
  borderColor: 'var(--text-active-color)',
  '&:hover': {
    color: 'rgb(139, 157, 185)',
    borderColor: 'rgb(139, 157, 185)',
  },
});
