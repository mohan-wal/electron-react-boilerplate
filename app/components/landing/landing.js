import React, { Component } from 'react';
import styles from './_landing.scss';
import Header from '../header/header';
import MusicList from '../musicList/musicList'

class Landing extends Component {
	render() {
		return (
			<div className={styles.musicAppWrapper}>
				<Header/>
				<MusicList/>
			</div>
		)
	}
}

export default Landing;