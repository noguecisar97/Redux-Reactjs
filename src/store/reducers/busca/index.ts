interface IAction {
  type: string
  videos?: [] | undefined
  carregando: boolean
  erro: boolean
}

const INITIAL_STATE = {
  videos: [],
  carregando: false,
  erro: false
}

export const busca = (state = INITIAL_STATE, action: IAction) => {
  switch(action.type) {
    case 'BUSCA_VIDEO_INICIO': 
      return {
        videos: [],
        carregando: true,
        error: false
      }
    
    case 'BUSCA_VIDEO_SUCESSO':
      return {
        videos: action.videos,
        carregando: false,
        error: false
      }
    
    case 'BUSCA_VIDEO_ERRO': 
      return {
        videos: [],
        carregando: false,
        error: true
      }
    
    default: return state
  }
}