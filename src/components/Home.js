import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import axios from 'axios';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    // constants:
    this.BASE_URL = 'http://localhost:3001';

    // methods:
    this.capturePicture = this.capturePicture.bind(this);
    this.captureVideo = this.captureVideo.bind(this);
    this.deleteLast = this.deleteLast.bind(this);
    this.sleep = this.sleep.bind(this);
    this.powerOn = this.powerOn.bind(this);
  }

  capturePicture(event) {
    event.preventDefault();
    console.log('Taking picture...');
    axios.get(`${this.BASE_URL}/capturePicture`)
      .catch((err) => {
        console.log('capture error: ', err);
      });
  }

  captureVideo(event) {
    event.preventDefault();
    console.log('Recording 5sec video');
    axios.get(`${this.BASE_URL}/captureVideo`)
      .catch((err) => {
        console.log('capture error: ', err);
      });
  }

  deleteLast(event) {
    event.preventDefault();
    console.log('Deleting last item');
    axios.get(`${this.BASE_URL}/deleteLast`)
      .catch((err) => {
        console.log('capture error: ', err);
      });
  }

  sleep(event) {
    event.preventDefault();
    console.log('Putting gopro to sleep');
    axios.get(`${this.BASE_URL}/sleep`)
      .catch((err) => {
        console.log('capture error: ', err);
      });
  }

  powerOn(event) {
    event.preventDefault();
    console.log('Powering on gopro');
    axios.get(`${this.BASE_URL}/powerOn`)
      .catch((err) => {
        console.log('capture error: ', err);
      });
  }

  render() {
    return (
      <Styles>
        <div>
          <Button className="button" onClick={this.capturePicture} variant="outline-success" size="lg" block>
            Capture picture
          </Button>
          <Button className="button" onClick={this.captureVideo} variant="outline-success" size="lg" block>
            Record 5s video
          </Button>
          <Button className="button" onClick={this.deleteLast} variant="outline-success" size="lg" block>
            Delete last
          </Button>
          <Button className="button" onClick={this.sleep} variant="outline-success" size="lg" block>
            Sleep
          </Button>
          <Button className="button" onClick={this.powerOn} variant="outline-success" size="lg" block>
            Power on
          </Button>
        </div>
      </Styles>
    )
  }
}

const Styles = styled.div`
  .button {
    margin-bottom: 3%;
    margin-top: 3%;
  }
`;
