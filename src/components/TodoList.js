// const users  = [

//     {
//         id: 1,
//         Name : "Trần Đình Hoàng", 
//         Age : 20      
//     },
//     {
//         id: 2,
//         Name : "Trần Đình Hoàng", 
//         Age : 20      
//     },
//     {
//         id: 3,
//         Name : "Trần Đình Hoàng", 
//         Age : 20      
//     }
// ];

import React from 'react'
 const TodoList = ()=>{ 
    const [ listUser,setListUser] = React.useState([])
    const [user,setUser] = React.useState({id:"",name:"",age:""})
    const [isEdit,setIsEdit] =  React.useState(false)

    // create usser list
    const createUser = () => {
        if(user.name.trim() !== "" && user.age.trim() !== ""){
            setListUser([...listUser, {
             ...user,
             id :listUser.length +1
            }])
        }
        setUser({name:"",age:""})
    }

    // remove user fromc
    const removeUser = (id) => {
        const newList = listUser.filter(user => user.id !== id)
        setListUser(newList)
     }

     //edit user
     const editUser = (item) => {
        setUser(item)
        setIsEdit(true)
     }

     const saveUser = () => {
        const userIndex = listUser.findIndex(item => item.id === user.id)
        const tempData = [...listUser]
        tempData[userIndex] = user
        setListUser(tempData)

        setUser({name:"",age:""})
        setIsEdit(false)
     }
    return (
        <React.Fragment>    
            <div className="">
                <p>Name</p>
                <input value={user.name} onChange={(e)=>{setUser({...user,name: e.target.value})}}/>
                <p>Age</p>
                <input  value={user.age} onChange={(e)=>{setUser({...user,age: e.target.value})}}/>
                {isEdit ? ( <button onClick={saveUser}>save</button>) : (  <button onClick={createUser}>Add</button>)}
              
                {listUser.map(item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p style={{color:'red'}}>{item.age}</p>
                            <button onClick={()=>{editUser(item)}}>edit</button>
                            <button onClick={()=>{removeUser(item?.id)}}>remove</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default TodoList