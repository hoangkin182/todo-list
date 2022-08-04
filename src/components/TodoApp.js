import React, { useEffect,useState, } from "react"
import axios from 'axios';
import{useDispatch, useSelector} from 'react-redux'
import { todoAction } from "../redux/thunk";
import { createAction, deleteAction, updateAction } from "../redux/thunk/todo";
function TodoApp(){
    const data = useSelector(state => state.posts.data)
    const loading = useSelector(state => state.posts.loading)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(todoAction());
    },[]);
  
    const [listTodo,setListTodo] = useState([])
    const [dataSubmit,setDataSubmit] = useState({name:"",description:""})

    
    const editTodo = (dataSubmit) =>{
         setDataSubmit(dataSubmit) 
    }
        

    return (
        <React.Fragment>    
            <div className="">
                <p>Name</p>
                <input value={dataSubmit.name} onChange={(e)=>{setDataSubmit({...dataSubmit,name: e.target.value})}}/>
                <p>Description</p>
                <input value={dataSubmit.description}  onChange={(e)=>{setDataSubmit({...dataSubmit,description: e.target.value})}}/>
                <button onClick={()=>{
                    dispatch(createAction(dataSubmit));setDataSubmit({name:"",description:""})
                }}>create</button>
                <button onClick={()=>{dispatch(updateAction(dataSubmit)) ;setDataSubmit({name:"",description:""})}}>save</button>
                {/* {isEdit ? ( <button onClick={editUser}>save</button>) : (  <button onClick={handleSubmit()}>Add</button>)} */}
              
                {data && data.length > 0 && data?.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <button onClick={()=>{editTodo(item)}}>edit</button>
                            <button onClick={()=>{dispatch(deleteAction(item.id))}}>remove</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
    
}

export default TodoApp