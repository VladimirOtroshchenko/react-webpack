import React from 'react';
import { render } from 'react-dom';

import './assets/styles/styles.scss';

import { List } from './components/list';

const App = () => <List />;

render(<App />, document.getElementById('root'));
