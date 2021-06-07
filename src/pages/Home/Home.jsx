import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomNavbar from '../../components/Navbar/CustomNavbar';
import background from "../../assets/bg.jpg";

const styles = {
	backgroundImage: `url(${background})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	width: '100vw',
	height: '100vh'
};

export default function Home() {
  return (
    <div style={styles}>
			<CustomNavbar></CustomNavbar>
			<Container fluid style={{marginTop: "140px"}}>
				<Row className="justify-content-center">

				</Row>

			</Container>
		</div>
  )
}
