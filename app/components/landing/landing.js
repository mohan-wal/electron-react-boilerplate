import React, { Component } from 'react';
import styles from './landing.scss';
import Header from '../header/header';

class Landing extends Component {
	render() {
		return (
			<div className={styles.musicAppWrapper}>
				<Header/>
			</div>
		)
	}
}

export default Landing;