import { IconButton } from '@mui/material/';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled from '@mui/styled-engine';
import styles from '../styles/SubmitForm.module.css';
import { useEffect, useState, useRef } from 'react';

// Component ------------------------------------------------------------------------

function ScrollTopButton() {
  const [scroll, setScroll] = useState(false);
  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setScroll(false);
    } else {
      notInitialRender.current = true;
    }
  }, [scroll]);

  return (
    <ColorIconButton
      onClick={() => setScroll(true)}
      variant='outlined'
      className={styles.div}
      aria-label='Go to top'
    >
      <ArrowUpwardIcon />
    </ColorIconButton>
  );
}

export default ScrollTopButton;

// Styled ---------------------------------------------------------------------------

const ColorIconButton = styled(IconButton)({
  color: 'var(--text-active-color)',
});
