import React,{useState} from 'react'
export const DashboardContext = React.createContext()
function DashboardContextComponent({children}) {
    let [data,setData] = useState([{
        title:"Earnings (Monthly)",
        value:"$7000",
        color:"primary",
        icon:"fa-calendar",
        isProgress:false
    },
    {
        title:"Earnings (Annual)",
        value:"$70000",
        color:"secondary",
        icon:"fa-dollar-sign",
        isProgress:false
    },
    {
        title:"Task",
        value:"30",
        color:"success",
        icon:"fa-clipboard-list",
        isProgress:true
    },
    {
        title:"Pending Request",
        value:"11",
        color:"warning",
        icon:"fa-comments",
        isProgress:false
    }
])
  return <>
    <DashboardContext.Provider value={{data,setData}}>
        {children}
    </DashboardContext.Provider>
  </>
}

export default DashboardContextComponent