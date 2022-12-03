import React,{useState} from 'react'
import './style.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardsData from './CardsData'
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action'

export const Cards = () => {

    const[data, setData] = useState(CardsData)
    console.log(data)

    const dispatch = useDispatch();

    const send = (e) =>{
      // console.log(e)
        dispatch(ADD(e))
    }
  return (
    <>
    <div className='container my-5'>
      <h3 className='text-center'>CHOOSE YOUR BEST</h3>

      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id)=>{
            return(
              <Card style={{width: '22rem', border: 'none'}} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={element.imgdata} style={{height:'16rem'}}/>
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price: ₹ {element.price}
                </Card.Text>
                <div className='button_div d-flex justify-content-center'>
                <Button variant="success" className="col-sm-12"
                onClick={()=>send(element)}
                >Add to cart</Button>
                </div>
                
              </Card.Body>
            </Card>
            )
          })
        }
      
      </div>
    </div>
    </>
  )
}
