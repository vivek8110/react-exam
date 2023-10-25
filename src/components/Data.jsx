import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { GET_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS,} from '../redux-saga/products/action/action';


function Data() {

    const pdata={
  
      title:"vivek",
      author:"sojitra"
    }
    const dispatch = useDispatch()
    const data = useSelector(state=>state.productReducer)
    console.log(data,'from data com');


    useEffect(()=>{
        dispatch({type:GET_PRODUCT_PROGRESS})
    },[])

    const updateHandler=(e)=>{

      const udata=data.product.map((res)=>{
        if (res.id === e.id) {
          return {
            ...res,
            title: pdata.title,
            author: pdata.author,
          };
        } else {
          return res;
        }
      })

      console.log(udata,"newupdateeddata");
    dispatch({type:UPDATE_PRODUCT_PROGRESS,payload:udata})
    }
  return (
    <div>
      {
      data.product.map((e,ind)=>{
          return (
        <>
        <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{e.title}</h5>
    <p className="card-text">{e.author}</p>
    <button onClick={()=>updateHandler(e)} className="btn btn-primary">update</button>
  </div>
</div>

        </>
        
        
        )
        // </div>
      })
      }</div>
  )
}

export default Data