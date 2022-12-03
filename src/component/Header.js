import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import {Slider} from './Slider'

export const Header = () => {


    const[price, setPrice] = useState(0)

    const getdata = useSelector((state)=>state.cartreducer.carts)
    console.log(getdata)

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }

    const total = ()=>{
        let price = 0
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        })
        setPrice(price)
    }

    useEffect(()=>{
        total();
    },[total])
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/" className="text-decoration-none text-light px-2">HUNGER POINT</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light px-2">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light px-2">Features</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light px-2">Pricing</NavLink>
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-sharp fa-solid fa-cart-shopping text-light"></i>
                    </Badge>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            getdata.length ?
                            <div className='card_details' style={{width: '24rem', paadding: 10}}>
                                <i className='fas fa-close smallclose'
                                style={{
                                    position: "absolute", top: 20, fontSize: 23, right: 20
                                }}
                                onClick={handleClose}
                                ></i>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restraunt Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e)=> {
                                                return(
                                                    <>
                                                    <tr>
                                                        <td>
                                                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                            <img src={e.imgdata} style={{width: '5rem', height: '5rem'}} />
                                                            </NavLink>
                                                            
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price: {e.price}</p>
                                                            <p>Quantity: {e.qnty}</p>
                                                            <p style={{color: 'red', fontSize: 20}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td className="mt-5" style={{color: 'red', fontSize: 20}} onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className="text-center">Total: {price}</p>
                                    </tbody>
                                </Table>
                            </div> :
                            <div className="card_details d-flex justify-content-center align-items-center"
                            style={{width: "24rem", padding: 10, position: "relative"}}
                            >
                                <i className='fas fa-close smallclose'
                                style={{
                                    position: "absolute", top: 20, fontSize: 23, right: 20
                                }}
                                onClick={handleClose}
                                ></i>
                                <p style={{fontSize:22}}>Your cart is empty</p>
                                <img src="./cart.gif" className="emptycart_img" style={{width: "5rem", padding: 10}}/>
                            </div>
                        }
                        
                    </Menu>


                </Container>
            </Navbar>
            <Slider />      
        </>
    )
}
