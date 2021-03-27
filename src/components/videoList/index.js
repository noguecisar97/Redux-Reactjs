import React, { Component } from 'react'
import { Container } from './styled'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {reproduzVideo} from '../../store/actions/reproduzVideo/index'

class videoList extends Component {

  renderVideo(video) {
    return (
      <List.Item key={video.id.videoId} onClick={() => this.props.reproduz(video)}>
        <Image src={video.snippet.thumbnails.medium.url}></Image>
      
        <List.Content>
          <List.Header>
             {video.snippet.title}
          </List.Header>
        </List.Content>  
      </List.Item>    
    )
  }

  render() { 
    return (
      <Container>
        <List animated verticalAlign="middle">
          {this.props.carregando && (<Dimmer active inverted>
              <Loader size="medium"> Carregando... </Loader>
          </Dimmer>)}      
          {this.props.videos.map(video => this.renderVideo(video))}
        </List>       
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.busca.videos,
    carregando: state.busca.carregando,
    erro: state.busca.erro
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reproduz: (video) => dispatch(reproduzVideo(video))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(videoList)