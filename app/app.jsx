/* global document */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Deskmark from './components/Deskmark/deskmark';

import './components/Deskmark/deskmark.scss';

const wrap = document.createElement('div');
document.body.appendChild(wrap);

ReactDOM.render(<Deskmark />, wrap);
