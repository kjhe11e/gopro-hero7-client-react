import React from 'react';
import styled from 'styled-components';

export class WifiSetup extends React.Component {
  render() {
    return (
      <Styles>
        <div>
          <p className="info">Wifi setup utils under construction... For now, connect to your GoPro's wifi manually.</p>
        </div>
      </Styles>
    )
  }
}

const Styles = styled.div`
  .info {
    margin-bottom: 4%;
    margin-top: 4%;
  }
`;
