import React from 'react'

const Completed = ({data,setCompleted,index,setindex,Activestate ,setActive ,notActivestate,setnotActive}) => {
    function add(){
    const addData={
        id:index,
        title:'card '+index
       } 

       setCompleted([...data,addData]);
       setindex(index+1);

    }
    function del(id) {
        let updatedData = data.filter(item => item.id !== id);
        setCompleted(updatedData);
      }

      const cursor={
        cursor:'pointer'
      }
      
      function moveactive(id,title){
        let move={
            id:id,
            title:title
        }
        let updatedData = data.filter(item => item.id !== id);
        setCompleted(updatedData);
        setActive([...Activestate,move]);
      }
      function movestart(id,title){
        let move={
            id:id,
            title:title
        }
        let updatedData = data.filter(item => item.id !== id);
        setCompleted(updatedData);
        setnotActive([...notActivestate,move]);
      }
    return (
        <div className='w-25 bg-white min-vh-75 p-1 m-2 border '>
            
          <h2 className='bg-success text-white  p-1  rounded fs-3' >Completed<span className='fs-4 m-5 border p-1 pt-0 pb-0 rounded-5'>{data.length}</span></h2>
          {
            data.map((item)=>{
                return(
                <div className='bg-info  m-2 p-1 border border-dark'>
                   <p className='fs-1'>{item.title}</p> 
                   <div className='d-flex justify-content-around align-item-end'>
                    <button className='btn btn-success ' onClick={()=>{del(item.id)}}>Del</button>
                    <button className='btn btn-success' onClick={()=>{moveactive(item.id,item.title)}}>Active</button>
                    <button className='btn btn-success'onClick={()=>{movestart(item.id,item.title)}}>Not Stated</button>
                    </div>
                </div>
                )
            })
          }
          <div className=' text-muted  '>
            <p className='fs-6 m-2 cursor-pointer' style={cursor} onClick={()=>{add()}}>+ New</p>
          </div>
        </div>
      )
}

export default Completed
