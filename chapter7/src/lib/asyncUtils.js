// Promise에 기반한 Thunk를 만들어주는 함수입니다.
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // 이 함수는 promiseCreator가 단 하나의 파라미터만 받는다는 전제하에 작성되었습니다.
  // 만약 여러 종류의 파라미터를 전달해야하는 상황에서는 객체 타입의 파라미터를 받아오도록 하면 됩니다.
  // 예: writeComment({ postId: 1, text: '댓글 내용' });
  // (dispatch, getState)
  return param => async dispatch => {
    // 요청 시작
    dispatch({ type, param });
    try {
      // 결과물의 이름은 payload로 통일
      const payload = await promiseCreator(param);
      // 성공
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      // 실패
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

// 리듀서에서 사용할 수 있는 유틸 함수
export const reducerUtils = {
  // 초기상태
  initial: (data = null) => ({
    data,
    loading: false,
    error: null,
  }),
  // 로딩중 상태
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공 상태
  success: payload => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패 상태
  error: error => ({
    error,
    loading: false,
    data: null,
  }),
};

export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
