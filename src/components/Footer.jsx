import React from 'react';
import FooterTop from './Footer/top';
import FooterMiddle from './Footer/middle';
import FooterBottom from './Footer/bottom';

const Footer = () =>
{
  return <>
    <div className='overflow-hidden'>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  </>;
};
export default Footer;