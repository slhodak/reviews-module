import React from 'react';

//  still broken
const helpful = (
  <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ background: '#fff' }}>
    <title>icon/ic_upvote</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
    </g>
    <g transform="translate(3 3)" />
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
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="8px" viewBox="0 0 284.929 284.929" style={{ enableBackground: '0 0 284.929 284.929' }}>
    <g transform="scale(1.2 1.2)">
      <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
        L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
        c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
        c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
      />
    </g>
  </svg>
);

const sortCaretUp = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="8px" viewBox="0 0 307.054 307.054">
    <g transform="scale(1.2 1.2)">
      <path d="M302.445,205.788L164.63,67.959c-6.136-6.13-16.074-6.13-22.203,0L4.597,205.788c-6.129,6.132-6.129,16.069,0,22.201
      l11.101,11.101c6.129,6.136,16.076,6.136,22.209,0l115.62-115.626L269.151,239.09c6.128,6.136,16.07,6.136,22.201,0
      l11.101-11.101C308.589,221.85,308.589,211.92,302.445,205.788z"
    />
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
