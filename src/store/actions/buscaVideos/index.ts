import { YoutubeDataAPI } from 'youtube-v3-api';
import YTapi from '../../../private/api'

const API_KEY = YTapi;

const api = new YoutubeDataAPI(API_KEY);

export const buscaVideoInicio = () => {
  return {
    type: 'BUSCA_VIDEO_INICIO',
    carregando: true,
    erro: false
  }
}

export const buscaVideoSucesso = (videos: any) => {
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

export const buscaVideo = (termo: string) => {
  return (dispatch: (arg0: { type: string; carregando: boolean; erro: boolean; videos?: any; }) => void) => {
    dispatch(buscaVideoInicio())
    api.searchVideo(API_KEY, {q: termo})
      .then((data: any) => dispatch(buscaVideoSucesso(data.items)))
      .catch(() => dispatch(buscaVideoErro()))
  }
}