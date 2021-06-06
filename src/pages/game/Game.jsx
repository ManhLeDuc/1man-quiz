import React, { useState } from 'react';
import Answer from '../../components/Answer/Answer';
import Container from 'react-bootstrap/Container';
import Question from '../../components/Question/Question';
import Row from 'react-bootstrap/Row';


const Game = () => {
	return (
		<section>
			<Container fluid>
				<Row className="justify-content-md-around">
					<Question></Question>
				</Row>
				<Row className="justify-content-md-around">
					<Answer></Answer>
					<Answer></Answer>
				</Row>
				<Row className="justify-content-md-around">
					<Answer></Answer>
					<Answer></Answer>
				</Row>
			</Container>
		</section>
	);
};

export default Game;
