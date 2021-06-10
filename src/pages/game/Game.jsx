import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GamePlay from './GamePlay/GamePlay';
import GameInfo from './GameInfo/GameInfo';

const Game = () => {
	return (
		<Container fluid style={{ marginTop: "140px" }}>
			<Row className="justify-content-center">
				<Col lg="10">
					<GameInfo></GameInfo>
					<GamePlay></GamePlay>
				</Col>
			</Row>

		</Container>
	);
};

export default Game;
