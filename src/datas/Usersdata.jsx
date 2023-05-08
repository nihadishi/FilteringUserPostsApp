import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Usersdata() {
    const [datas, setdatas] = useState([])
    const [posts, setposts] = useState([])
    useEffect(() => {

      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((q)=>{
        setdatas(q.data);
    })

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((p)=>{
      setposts(p.data);
    })

    }, [])
    
   let chooseit = document.querySelector('#selectUser')
   let chsit = chooseit.value
    console.log(chsit)
    
  return (
   <>
   <select name="selectUser" id="selectUser" >
    {datas.map(w=> <option value={w.id}>{w.name}</option>)}
   </select>
    
    {posts.map(s=> 
      s.userId == chsit? <li>{s.name}</li> : <></>
      )}
   <li></li>
   </>
  )
}

export default Usersdata
