import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GamePlay from './GamePlay/GamePlay';
import GameInfo from './GameInfo/GameInfo';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";


import './style.css';

const styles = {
	backgroundImage: `url(${background})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	width: '100vw',
	height: '100vh'
};

const Game = () => {
	return (
		<div style={styles}>
			<CustomNavbar></CustomNavbar>
			<Container fluid style={{marginTop: "140px"}}>
				<Row className="justify-content-center">
					<Col lg="10">
						<GameInfo></GameInfo>
						<GamePlay></GamePlay>
					</Col>
				</Row>

			</Container>
		</div>
	);
};

export default Game;
