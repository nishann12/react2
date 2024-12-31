import React, { useState } from 'react'


export default function SideNav() {
  const [name, setName] = useState(100);
  return (
    <div>
      <button className='bg-warning text-black border-black' onClick={()=>setName("3000")}>Submit</button>
      {console.log(name)}
      <h1>{name}</h1>
    </div>
  );
}



