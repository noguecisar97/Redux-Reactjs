import React, { Component } from 'react'
import { Container } from './styled'
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { buscaVideo } from '../../store/actions/buscaVideos/index';

class searchBar extends Component {

  constructor(props) {
    super(props)
    
    this.props.buscaVideo('Kimetsu no Yaba')
  }

  pesquisaTermo = (e) => {
    if (e.key === 'Enter') {
      const input = e.target
      this.props.buscaVideo(input.value);
    }
  }

  render() {
    return (
      <Container>
        <Segment stacked>
          <Input
            icon='search'
            onKeyDown={(e) =>
              this.pesquisaTermo(e)
            }
            size='large'
            placeholder='Search ...'
          />
        </Segment>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buscaVideo: (termo) => dispatch(buscaVideo(termo))
  }
}

export default connect(null, mapDispatchToProps)(searchBar);