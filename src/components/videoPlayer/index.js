import React, { Component }from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

class VideoPlayer extends Component {
  
  render() {
    return (
      <Container>
        {
          !this.props.video.id && (
            <Advertisement
             style={{height: '433px'}}
             unit='top banner' 
             test="escolha um video para reproduzir"
            />
          )
        }
        {
          this.props.video.id && (
            <>
              <Embed 
                id={this.props.video.id.videoId} 
                source='youtube' 
                placeholder='https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/09/Demon-Slayer-2.jpg' 
              />
              <h4>{this.props.video.snippet.title}</h4>
              <p>{this.props.video.snippet.description}</p>
            </>
          )
        }

      </Container>
    )
  }
}  

const mapStateToProps = (state) => {
  return {
    video: state.reproduzVideo.video
  }
}

export default connect(mapStateToProps,null)(VideoPlayer);