import {
    GET_TODO_START,
    GET_TODO_SUCCESS,
    GET_TODO_FAILED,
    DELETE_TODO_FAILED,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_START,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_START,
    UPDATE_TODO_FAILED
} from '../actionTypes/Todo'

const INIT_STATE = {
    error: '',
    loading: false,
    message: '',
    data: undefined,
    createTodo: undefined,
}
const postReducer = (state = INIT_STATE,action) =>{
    switch(action.type){
        case GET_TODO_START: {
            return { ...state,
                    loading: true, 
                    data: undefined };
        }
        case GET_TODO_SUCCESS: {
            return { ...state, 
                message: '', 
                loading: false,
                data: action.payload };
        }
        case GET_TODO_FAILED: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '', 
                     data: undefined }
        }
        case GET_TODO_START: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '', 
                     data: undefined }
        }
        case GET_TODO_SUCCESS: {
            return { ...state, 
                     loading: false, 
                     message: '', 
                     createTodo: action.payload,
                     }
        }
        case GET_TODO_FAILED: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '', 
                     data: undefined }
        }
        case DELETE_TODO_START: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '', }
        }
        case DELETE_TODO_SUCCESS: {
            return { ...state, 
                     loading: false, 
                     message: '', 
                    
                     }
        }
        case DELETE_TODO_FAILED: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '', }
        }
        case UPDATE_TODO_START: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '',
                    }
        }
        case UPDATE_TODO_SUCCESS: {
            return { ...state, 
                     loading: false, 
                     message: '', 
                    
                     }
        }
        case UPDATE_TODO_FAILED: {
            return { ...state, 
                     loading: false, 
                     error: action.payload, 
                     message: '', }
        }
        default:
            return state;
    }
}
export default postReducer;