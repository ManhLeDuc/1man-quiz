import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { authenticationService } from '../../services/authentication.service';
import { authHeader, authHeaderDataForm } from '../../helpers';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    if (!authenticationService.currentUserValue) {
      window.location.href = '/'
    }
    else {
      this.state = {
        name: "",
        url: "",
        selectedFile: null,
      };
    }
  }

  onFileChange = event => {

    // Update the state
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    this.setState({ selectedFile: event.target.files[0] });

    if (event.target.files[0]) {
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      this.setState({ url: objectUrl });
    }

  };

  handleUpdate = () => {

    const formData = new FormData();

    if (this.state.selectedFile) {
      formData.append("image", this.state.selectedFile);
    }

    if (this.state.name)
      formData.append("name", this.state.name);

    fetch(`127.0.0.1:3001/api/user/update`, {
      method: 'PUT',
      headers: authHeaderDataForm(),
      credentials: 'include',
      body: formData,
    })
      .then((res) => { return res.json(); })
      .then((data) => {
        if (data.success) {
          window.location.href = '/profile'
        }
        else {
          window.alert(data);
        }

      })
      .catch((error) => {
        console.log(error);
        window.alert(error);
      });
  }

  handleNameChange = (event) => {
    const newValue = event.target.value;
    this.setState({
      name: newValue,
    });
  };

  componentDidMount() {
    if (authenticationService.currentUserValue) {
      fetch(`127.0.0.1:3001/api/me`, {
        method: 'GET',
        headers: authHeader(),
        credentials: 'include',

      })
        .then((res) => { return res.json(); })
        .then((data) => {
          console.log(data);
          if (data.name) {
            this.setState({
              name: data.name,
              url: `https://guarded-oasis-70016.herokuapp.com${data.avatarUrl}`,
            });
          }
          else {
            this.setState({
              name: "",
              url: ``,
            })
            authenticationService.logout();
          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <Container fluid style={{ marginTop: "5%" }}>
        <Row className="justify-content-center">
          <Col lg="9" xl="9">
            <Row className="justify-content-center my-2">

              <Image src={this.state.url} roundedCircle className="photo" style={{
                height: '260px',
                width: '260px'
              }} />

            </Row>
            <Row className="justify-content-center my-2">
              <Col sm="6" md="6" lg="3" xl="3">
                <div style={{ color: 'white' }}>
                  <input
                    type="file"
                    onChange={this.onFileChange}
                    accept=".jpg, .jpeg, .png"
                  />
                </div>

              </Col>
            </Row>
            <Row className="justify-content-around my-2">
              <Col sm="6" md="6" lg="6" xl="6">
                <input
                  className='info'
                  placeholder="NickName"
                  value={this.state.name}
                  onChange={this.handleNameChange}>
                </input>
              </Col>
            </Row>
            <Row className="justify-content-center my-5">
              <Col sm="6" md="6" lg="3" xl="3">
                <Button variant="primary"
                  style={{ width: '100%', fontSize: '25px' }}
                  onClick={this.handleUpdate}
                >
                  Update
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Profile;
