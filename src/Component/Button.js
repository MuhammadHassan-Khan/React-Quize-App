import React from 'react'


export default function Button(prop) {

console.log(prop.btnclick);

    return (
   <button onClick={prop.btnclick}  className={' border-2 rounded-md py-2 px-14 mx-14 my-6 bg-white text-black border-black text-ml font-bold   '}  >{prop.lables}</button>
  )
}
