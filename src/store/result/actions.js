import { createAction } from 'redux-actions'
import http from 'utils/http'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'

const resultLoaded = createAction('RESULT_LOADED')

const fetchResult = participationId => dispatch => {
  return http
    .get('http://localhost:3000/result/' + participationId)
    .then(result => dispatch(resultLoaded(result)))
    .catch(() => dispatch(growl('Erro ao carregar o resultado', GROWL_ERROR)))
}
export { resultLoaded, fetchResult }
