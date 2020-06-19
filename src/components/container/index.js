import React from 'react';

import './style.css'

// import { Container } from './styles';

function container(props) {
  return (<section className="section-ps my-5">{props.children}</section>);
}

export default container;