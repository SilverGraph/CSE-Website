import React, { useState } from "react"
import Card from "./Card";
import "./Students.css"


export default function Students() {
  const senos=[{
    name:"seno 1",
    title:"ghghg",
    imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
  },
  {
    name:"seno 2",
    title:"ghghg",
    imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
  },
  {
    name:"seno 3",
    title:"fhfffhfh jgjgg",
    imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
  },
  {
    name:"seno 4",
    title:"hgfg hjhjh jkhhjh",
    imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
  },
  {
    name:"seno 5",
    title:"hgfg hjhjh jkhhjh",
    imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
  }
]
const junos=[{
   name:"juno 1",
   title:"ghghg",
    imageUrl:"https://media.istockphoto.com/photos/3d-cartoon-woman-sitting-on-bar-graph-picture-id1301414449?b=1&k=20&m=1301414449&s=170667a&w=0&h=a6NTrtIavHjHzmrm5OOAR2s8RhHmllNfqOIbEb5nmto=",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
},
{
   name:"juno 2",
   title:"ghghg",
    imageUrl:"https://media.istockphoto.com/photos/3d-cartoon-woman-sitting-on-bar-graph-picture-id1301414449?b=1&k=20&m=1301414449&s=170667a&w=0&h=a6NTrtIavHjHzmrm5OOAR2s8RhHmllNfqOIbEb5nmto=",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
},
{
   name:"juno 3",
   title:"ghghg",
    imageUrl:"https://media.istockphoto.com/photos/3d-cartoon-woman-sitting-on-bar-graph-picture-id1301414449?b=1&k=20&m=1301414449&s=170667a&w=0&h=a6NTrtIavHjHzmrm5OOAR2s8RhHmllNfqOIbEb5nmto=",
    hobbies:"red brown yellow ping pong",
    insta:"ggjg",
    linkedin:"gfhfh",
    github:"bggh"
},
{
  name:"juno 4",
  title:"ghghg",
   imageUrl:"https://media.istockphoto.com/photos/3d-cartoon-woman-sitting-on-bar-graph-picture-id1301414449?b=1&k=20&m=1301414449&s=170667a&w=0&h=a6NTrtIavHjHzmrm5OOAR2s8RhHmllNfqOIbEb5nmto=",
   hobbies:"red brown yellow ping pong",
   insta:"ggjg",
   linkedin:"gfhfh",
   github:"bggh"
},

]
  const [senior, setSenior] = useState(false);
  const [batch , getDetail]=useState(junos);

  function seniors() {
    return (
      <>
      <div className="container">
        <h2 className="heading m-4"> 2020 STUDENTS</h2>
        <div className="row g-xs-1 gy-3 gx-5 mx-xs-2 Row">
        {batch.map((seno , index)=>{
         return (
         <Card key={index} index={index} seno={seno} />
         )
        })}
        </div>
        </div>
      </>
    )
  }

  function juniors() {
    return (
      <>

         <div className="container">
           <h2 className="heading m-4">2021 STUDENTS</h2>
            <div className="row g-xs-1 gy-3 gx-5 mx-xs-2 Row">
        {batch.map((seno , index)=>{
         return (
         <Card key={index} index={index} seno={seno} />
         )
        })}
              </div>
            </div>
      </>
    )
  }
  return (
    <div className="studentHome mt-3">
      <center>
        <div className="student">
      . KNOW . CONNECT . GROW .
        </div>
      <button className=" btn btn-outline-secondary bttn mx-2 px-4" onClick={() => {
       setSenior(true);
       getDetail(senos);
      }
      
      }>2020</button>
          <button className=" btn btn-outline-secondary bttn mx-2 px-4" onClick={() => {
            setSenior(false);
            getDetail(junos);
          }}>2021</button>
          {senior ? seniors() : juniors()}
          </center>
    </div>
  )
}
