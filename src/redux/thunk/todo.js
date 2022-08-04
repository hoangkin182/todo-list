import axios from 'axios';
import { TodoStart, TodoSuccess, TodoFailed, CreateSuccess, CreateFailed, CreateStart, DeleteStart, DeleteSuccess, DeleteFailed, UpdateStart, UpdateSuccess, UpdateFailed } from '../actions/postAction'
export const todoAction = () => async (dispatch) => {
    dispatch(TodoStart())
    axios.get(`http://localhost:3700/todos`)
        .then(({ data }) => {
            dispatch(TodoSuccess(data))
        })
        .catch(function (error) {
            dispatch(TodoFailed(error.message));
        });

}
export const createAction = (data) => async (dispatch) => {
    dispatch(CreateStart())
    axios.post(`http://localhost:3700/todos`,data)
        .then(({ data }) => {
            dispatch(CreateSuccess(data))
            dispatch(todoAction())
        })
        .catch(function (error) {
            dispatch(CreateFailed(error.message));
        });

}
export const deleteAction = (id) => async (dispatch) => {
    dispatch(DeleteStart())
    axios.delete(`http://localhost:3700/todos/delete/${id}`)
        .then(({ data }) => {
            dispatch(DeleteSuccess(data))
            dispatch(todoAction())
        })
        .catch(function (error) {
            dispatch(DeleteFailed(error.message));
        });

}
export const updateAction = (dataSubmit) => async (dispatch) => {
    dispatch(UpdateStart())
    axios.put(`http://localhost:3700/todos/update/${dataSubmit.id}`, dataSubmit)
        .then(({ data }) => {
            dispatch(UpdateSuccess(data))
            dispatch(todoAction())
        })
        .catch(function (error) {
            dispatch(UpdateFailed(error.message));
        });

}
