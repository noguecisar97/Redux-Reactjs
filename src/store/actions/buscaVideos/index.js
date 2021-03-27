import YoutubeSearch from 'youtube-api-v3-search'
import YTapi from '../../../private/api'

const API_KEY = YTapi;

export const buscaVideoInicio = () => {
  return {
    type: 'BUSCA_VIDEO_INICIO',
    carregando: true,
    erro: false
  }
}

export const buscaVideoSucesso = (videos) => {
  return {
    type: 'BUSCA_VIDEO_SUCESSO',
    videos,
    carregando: false,
    erro: false
  }
}

export const buscaVideoErro = () => {
  return {
    type: 'BUSCA_VIDEO_ERRO',
    carregando: false,
    erro: true
  }
}

export const buscaVideo = (termo) => {
  return dispatch => {
    dispatch(buscaVideoInicio())
    YoutubeSearch(API_KEY, {q: termo})
      .then((data) => dispatch(buscaVideoSucesso(data.items)))
      .catch(() => dispatch(buscaVideoErro()))
  }
}