import React, { useEffect,useState } from "react"
import axios from 'axios';

function TodoApp(){
    const [listTodo,setListTodo] = useState([])
    const [dataSubmit,setDataSubmit] = useState({name:"",description:""})
    useEffect(() =>{
        getAllTodo()
    },[])

    const getAllTodo = () =>{
        axios.get(`http://localhost:3700/todos
        `)
                .then(res => {
                   setListTodo(res.data)         
                })
                .catch(error => console.log(error));
    }
    // const getTodo = (id) => {
    //     axios.get(`http://localhost:3700/todos/get/${id}`)
    //     .then(res => {
    //         setListTodo(res.data)
    //         console.log(setListTodo)
    //      })
    //      .catch(error => console.log(error));
    // }
    const handleSubmit = (data) =>{
        axios.post(`http://localhost:3700/todos
        `,data)
                .then(res => {
                  if(res){
                    getAllTodo()
                    setDataSubmit({name:"",description:""})
                  }   
                })
                .catch(error => console.log(error));
    }
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3700/todos/delete/${id}`)
        .then(res => {
            if(res){
              getAllTodo()
            }   
          })
          .catch(error => console.log(error));
    }
    
    const editUser = (dataSubmit) =>{
        // setIsEdit(true)
        console.log(dataSubmit)
        axios.put(`http://localhost:3700/todos/update/${dataSubmit.id}`, dataSubmit)
        .then(res => {
            getAllTodo()
            
          })
          .catch(error => console.log(error));
        
    }
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
                    handleSubmit(dataSubmit)
                }}>create</button>
                <button onClick={()=>{editUser(dataSubmit)}}>save</button>
                {/* {isEdit ? ( <button onClick={saveUser}>save</button>) : (  <button onClick={handleSubmit()}>Add</button>)}
               */}
                {listTodo.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <button onClick={()=>{editTodo(item)}}>edit</button>
                            <button onClick={()=>{handleDelete(item.id)}}>remove</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
    
}

export default TodoApp