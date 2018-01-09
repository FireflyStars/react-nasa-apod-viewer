import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';
import moment from 'moment';


// 액션 타입
const PREVIOUS = 'apod/PREVIOUS';
const NEXT = 'apod/NEXT';
const GET_APOD = 'apod/GET_APOD';

// 액션 생성 함수
export const previous = createAction(PREVIOUS);
export const next = createAction(NEXT);
export const getApod = createAction(GET_APOD, date => api.getAPOD(date));


// 리듀서의 초깃값
const initialState = Map({
  maxDate: null,
  date: null,
  url: null,
  mediaType: null
});

// 리듀서
export default handleActions({
  // 이전 날짜로 설정
  [PREVIOUS]: (state) => state.update('date', date => (
    moment(date).subtract(1, 'days').format('YYYY-MM-DD')
  )),
  // 다음 날짜로 설정
  [NEXT]: (state) => state.update('date', date => (
    moment(date).add(1, 'days').format('YYYY-MM-DD')
  )),
  // GET_APOD 요청 관리하기
  ...pender({
    type: GET_APOD,
    onSuccess: (state, { payload: response }) => { // payload 를 response 라고 부르겠다는 의미
      const { date, url, media_type: mediaType } = response.data; // 필요한 레퍼런스를 만들고
      // 현재 상태에 maxDate 가 설정되어 있지 않다면 설정하기 위하여 temp 상태 생성
      let temp = state;
      if(!temp.get('date')) {
        temp = temp.set('date', date).set('maxDate', date);
      }
      return temp.set('mediaType', mediaType).set('url', url);
    }
    // onPending: (state, action) => state // 요청이 시작하여 대기 중일 때 할 작업
    // onError: (state, action) => sate  // 오류 났을 때 할 작업
  })
}, initialState);