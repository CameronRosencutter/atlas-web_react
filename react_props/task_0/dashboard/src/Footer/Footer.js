import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';

function Footer() {
  return (
    <footer>
      <p>{getFullYear()} - {getFooterCopy(false)}</p>
    </footer>
  );
}

export default Footer;
