import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DLT, ADD, REMOVE } from '../redux/actions/action';

export const CardsDetails = () => {

  const[data, setData] = useState([]) 

  const dispatch = useDispatch()

  const{id} = useParams()
  console.log(id)

  const history = useNavigate()

  const getdata = useSelector((state)=>state.cartreducer.carts)
    console.log(getdata)

    const compare = () => {
      let comparedata = getdata.filter((e)=>{
        return e.id == id
      })
      setData(comparedata)
    }

  useEffect(()=>{
    compare()
  },[id])

  const send = (e) =>{
    // console.log(e)
      dispatch(ADD(e))
  }

  const dlt = (id)=>{
    dispatch(DLT(id))
    history("/")
}

const remove = (item) =>{
  // console.log(e)
    dispatch(REMOVE(item))
}




  return (
    <>
    <div className='container'>
      <h2 className='text-center'>Items Detail Page</h2>

      <section className='container mt-3'>
        <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return(
                <>
                <div className='items_img'>
            <img src={ele.imgdata} />
          </div>

          <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurant : </strong>{ele.rname}</p>
                  <p><strong>Price : </strong>{ele.price}</p>
                  <p><strong>Dishes : </strong>{ele.address}</p>
                  <p><strong>Total : </strong>{ele.price * ele.qnty}</p>
                  <div className="mt-5 d-flex justify-content-between align-items-center" style={{width: 100, background: "#80808047"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <= 1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:24}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                  </div>
                </td>
                <td>
                  <p><strong>Rating: </strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {ele.rating}★	</span></p>
                  <p><strong>Order Review: </strong>{ele.somedata}</p>
                  <p><strong>Remove: </strong><span><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span></p>
                  <p><strong></strong></p>
                </td>
              </tr>
            </Table>
          </div>
                </>
              )
            })
          }
          
        </div>
      </section>
    </div>
    </>
  )
}
