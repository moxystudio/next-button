import React from 'react';
import NextButton from '@moxy/next-button';
import styles from './index.module.css';

const Home = () => (
    <div className={ styles.home }>
        <h1>react-lib-template</h1>
        <p>Button:</p>
        <NextButton>Demo Button</NextButton>
        <p>Link as button:</p>
        <NextButton href="https://moxy.studio" newTab>Demo Button</NextButton>
    </div>
);

export default Home;
