import React from 'react';

const helpful = (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fff' }}>
    <title>icon/ic_upvote</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
    </g>
    {/* <g transform="translate(3 3)"> */}
  </svg>
);

const filterBox = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fff' }}>
    <title>icon/ic_checkbox</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect x="1" y="1" width="16" height="16" rx="2" transform="translate(3 3)" stroke="#333" strokeWidth="2" />
    </g>
  </svg>
);

const sortRadio = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>icon/ic_radio_default</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect x="1" y="1" width="18" height="18" rx="9" fill="#fff" transform="translate(2 2)" stroke="#333" strokeWidth="2" />
    </g>
  </svg>
);

const sortRadioFilled = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>icon/ic_radio_filled</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect stroke="#DA3743" strokeWidth="7" x="5.5" y="5.5" width="13" height="13" rx="6.5" fill="#fff" />
    </g>
  </svg>
);

const sortCaretDown = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fff' }}>
    <title>icon/ic_down</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g transform="scale(1 -1)" width="2" height="6" rx=".5" />
    </g>
  </svg>
);

const sortCaretUp = (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fff' }}>
    <title>icon/ic_up</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 24h24V0H0z" />
      <g transform="rotate(45 -4.571 18.864)" width="2" height="6" rx=".5" />
    </g>
  </svg>
);

export {
  helpful,
  filterBox,
  sortRadio,
  sortRadioFilled,
  sortCaretDown,
  sortCaretUp
};
