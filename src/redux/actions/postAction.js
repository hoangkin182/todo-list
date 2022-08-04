import{
    GET_TODO_START,
    GET_TODO_SUCCESS,
    GET_TODO_FAILED,
    CREATE_TODO_START,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAILED,
    DELETE_TODO_START,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_FAILED,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_START,
    UPDATE_TODO_FAILED
} from '../actionTypes/Todo'
export const TodoStart = () => {
    return (dispatch) => dispatch({
      type: GET_TODO_START,
    })
  };
  
  export const TodoSuccess = (data) => {
    return (dispatch) => dispatch({
      type: GET_TODO_SUCCESS,
      payload: data
    })
  };
  
  export const TodoFailed = (error) => {
    return (dispatch) => dispatch({
      type: GET_TODO_FAILED,
      payload: error
    })
  };
  export const CreateStart = () => {
    return (dispatch) => dispatch({
      type: CREATE_TODO_START,
    })
  };
  
  export const CreateSuccess = (data) => {
    return (dispatch) => dispatch({
      type: CREATE_TODO_SUCCESS,
      payload: data
    })
  };
  
  export const CreateFailed = (error) => {
    return (dispatch) => dispatch({
      type: CREATE_TODO_FAILED,
      payload: error
    })
  };
  export const DeleteStart = () => {
    return (dispatch) => dispatch({
      type: DELETE_TODO_START,
    })
  };
  
  export const DeleteSuccess = (data) => {
    return (dispatch) => dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: data
    })
  };
  
  export const DeleteFailed = (error) => {
    return (dispatch) => dispatch({
      type: DELETE_TODO_FAILED,
      payload: error
    })
  };
  export const UpdateStart = () => {
    return (dispatch) => dispatch({
      type: UPDATE_TODO_START,
    })
  };
  
  export const UpdateSuccess = (data) => {
    return (dispatch) => dispatch({
      type: UPDATE_TODO_SUCCESS,
      payload: data
    })
  };
  
  export const UpdateFailed = (error) => {
    return (dispatch) => dispatch({
      type: UPDATE_TODO_FAILED,
      payload: error
    })
  };