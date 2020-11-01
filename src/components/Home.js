import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import axios from 'axios';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.capturePicture = this.capturePicture.bind(this);
  }

  capturePicture(event) {
    event.preventDefault();
    alert('Taking picture...');
    axios.get('http://10.5.5.9/gp/gpControl/command/shutter?p=1')
      .then(() => {
        axios.get('http://10.5.5.9/gp/gpControl/command/shutter?p=0');
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }

  render() {
    return (
      <Styles>
        <div>
          <Button className="button" onClick={this.capturePicture} variant="primary" size="lg" block>
            Capture picture
          </Button>
        </div>
      </Styles>
    )
  }
}

const Styles = styled.div`
  .button {
    margin-bottom: 4%;
    margin-top: 4%;
  }
`;
