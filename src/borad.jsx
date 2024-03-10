import React, { useEffect, useState } from 'react'
import NotActive from './notActive';
import Active from './active';
import Completed from './completed';
const Borad = () => {
    const [notActivestate,setnotActive]=useState([
        {
            id:1,
            title:'card 1'

        },
        {
            id:2,
            title:'card 2'

        },
        {
            id:'3',
            title:'card 3'

        }
    ]);
    const [Activestate,setActive]=useState([
        {
            id:'4',
            title:'card 4'

        }
    ]);
    const [Completedstate,setCompleted]=useState([
        {
            id:'5',
            title:'card 5'

        },
        {
            id:'6',
            title:'card 6'

        }
    ]);
    const[index,setindex]=useState(7);
    
    useEffect(()=>{
        if(notActivestate.length===0&&Activestate.length===0&&Completedstate.length===0){
            setindex(1);
        }
    },[notActivestate,Activestate,Completedstate]);
  return (
    <>
    <h1 className='text-center'>Project Board</h1>
   
    <div className='d-flex justify-content-center align-item-center'>
        
        <NotActive data={notActivestate} setnotActive={setnotActive} index={index} setindex={setindex} Activestate={Activestate} setActive={setActive}Completedstate={Completedstate} setCompleted={setCompleted}/>
        <Active data={Activestate} setActive={setActive} index={index} setindex={setindex} Completedstate={Completedstate} setCompleted={setCompleted} notActivestate={notActivestate}setnotActive={setnotActive} />
        <Completed data={Completedstate} setCompleted={setCompleted} index={index} setindex={setindex} Activestate={Activestate}  setActive={setActive}notActivestate={notActivestate}setnotActive={setnotActive}/>
      
    </div>
    </>
  )
}

export default Borad
