import React,{useState} from 'react'
export const UsersContext = React.createContext()

function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:"mani",
          email:"mani@gmail.com",
          mobile:"948596415263",
          dob:"1997-05-19"
        },
        {
          name:"hari",
          email:"hari@gmail.com",
          mobile:"848596415263",
          dob:"1992-05-19"
        },
        {
          name:"siva",
          email:"siva@gmail.com",
          mobile:"448596415263",
          dob:"1999-05-19"
        },
        {
          name:"sabari",
          email:"mani@gmail.com",
          mobile:"748596475263",
          dob:"2000-05-19"
        },
        {
          name:"devi",
          email:"devi@gmail.com",
          mobile:"748596415243",
          dob:"1995-05-19"
        },
        {
          name:"abi",
          email:"abi@gmail.com",
          mobile:"748596415268",
          dob:"1998-05-19"
        }
      ])
  return <>
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  </>
}

export default UserContextComponent