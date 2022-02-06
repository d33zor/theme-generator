import styles from '../styles/CodeContainer.module.css';
import { Button } from '@mui/material/';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import styled from '@mui/styled-engine';
import { useRef, useState } from 'react';

// Component ------------------------------------------------------------------------

function CodeContainer({ code }) {
  const codeToCopy = useRef();
  const [buttonText, setButtonText] = useState('Skopiuj kod');
  const [buttonIcon, setButtonIcon] = useState(<ContentCopyIcon />);
  function handleClick() {
    navigator.clipboard.writeText(
      '//Motyw stworzony przez generator motywów by Deez (https://deezor1.github.io/theme-generator)\n' +
        codeToCopy.current.innerText
    );
    setButtonText('Skopiowano');
    setButtonIcon(<CheckIcon />);
    setTimeout(() => {
      setButtonText('Skopiuj kod');
      setButtonIcon(<ContentCopyIcon />);
    }, 2000);
  }

  return (
    <div
      style={{
        display:
          Object.keys(code).length > 0 && !code.hasOwnProperty('undefined')
            ? 'flex'
            : 'none',
      }}
      className={styles.Parent}
    >
      <div className={styles.Code} ref={codeToCopy}>
        {Object.keys(code)[0] !== 'undefined' &&
          Object.keys(code).length > 0 &&
          Object.values(code).map((e, i) => <div key={i}>{e}</div>)}
      </div>
      <div className={styles.ButtonContainer}>
        <ColorButton
          startIcon={buttonIcon}
          variant='outlined'
          onClick={handleClick}
        >
          {buttonText}
        </ColorButton>
      </div>
    </div>
  );
}

export default CodeContainer;

// Styled ---------------------------------------------------------------------------

const ColorButton = styled(Button)({
  color: 'var(--text-active-color)',
  borderColor: 'var(--text-active-color)',
  '&:hover': {
    color: 'rgb(139, 157, 185)',
    borderColor: 'rgb(139, 157, 185)',
  },
});
