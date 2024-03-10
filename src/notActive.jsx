import React from 'react'

const notActive = ({data,setnotActive,index,setindex,Activestate,setActive,Completedstate,setCompleted}) => {
    function add(){
    const addData={
        id:index,
        title:'card '+index
       } 

       setnotActive([...data,addData]);
       setindex(index+1);

    }
    function del(id) {
        let updatedData = data.filter(item => item.id !== id);
        setnotActive(updatedData);
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
        setnotActive(updatedData);
        setActive([...Activestate,move]);
      }
      function movecomplete(id,title){
        let move={
            id:id,
            title:title
        }
        let updatedData = data.filter(item => item.id !== id);
        setnotActive(updatedData);
        setCompleted([...Completedstate,move]);
      }
  return (
    <div className='w-25 bg-white min-vh-75 p-1 m-2 border '>
      <h2 className='bg-danger text-white  p-1  rounded fs-3' >Not Stated<span className='fs-4 m-5 border p-1 pt-0 pb-0 rounded-5 '>{data.length}</span></h2>
      {
        data.map((item)=>{
            return(
            <div className='bg-info  m-2 p-1 border border-dark'>
               <p className='fs-1'>{item.title}</p> 
               <div className='d-flex justify-content-around align-item-end'>
                <button className='btn btn-success' onClick={()=>{del(item.id)}}>Del</button>
                <button className='btn btn-success'onClick={()=>{moveactive(item.id,item.title)}}>Active</button>
                <button className='btn btn-success' onClick={()=>{movecomplete(item.id,item.title)}}>Completed</button>
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

export default notActive
