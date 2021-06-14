import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GamePlay from './GamePlay/GamePlay';
import GameInfo from './GameInfo/GameInfo';
import { authenticationService } from '../../services/authentication.service';

import { authHeader } from '../../helpers';

class Game extends React.Component {

	state = {
		answers: ["", "", "", ""],
		question: "",
		remains: 0,
		currentScore: 0,
	}

	constructor(props) {
		super(props);

		if (!authenticationService.currentUserValue) {
			window.location.href = '/'
		}
		else {
			this.state = {
				answers: ["", "", "", ""],
				question: "",
				remains: 0,
				currentScore: 0,
			};
		}


	}

	componentDidMount() {

		this.updateQuestion();
	}

	updateQuestion = async () => {
		try {
			const result = await fetch(`127.0.0.1:3001/api/play`, {
				method: 'PUT',
				headers: authHeader(),
				credentials: 'include',
			}).then((res) => { return res.json(); })
			if (result.success) {

				this.setState({ question: result.data.question });
				this.setState({ remains: result.data.remains });
				this.setState({ currentScore: result.data.currentScore });

				let tempAnswers = ["", "", "", ""];
				let i = 0;
				for (let tempAnswer of result.data.answers) {
					tempAnswers[i] = tempAnswer;
					i++;
				}
				this.setState({ answers: tempAnswers });
			}
			else {
				window.alert("Start Game Error");
			}

		}
		catch (error) {
			window.alert(error.message);
		}
	}

	render() {
		return (
			<Container fluid style={{ marginTop: "140px" }}>
				<Row className="justify-content-center">
					<Col lg="10">
						<GameInfo remains={this.state.remains} currentScore={this.state.currentScore}></GameInfo>
						<GamePlay updateQuestion={this.updateQuestion} answers={this.state.answers} question={this.state.question}></GamePlay>
					</Col>
				</Row>

			</Container>
		);
	}


}

export default Game;
