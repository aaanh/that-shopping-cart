import { Router } from 'next/dist/client/router';
import Head from 'next/head'
import { useState } from 'react'


import prisma from '../lib/prisma'


function Cart({props}) {
  return (
    <table>
      <tbody>
        {props.cart?.map((item, idx) => (
          <tr key={item.id} className='odd:bg-neutral-300'>
            <td className='p-2'>{item.id}</td>
            <td className='p-2'>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function AddItem() {
  const [item_name, setName] = useState('');
  const [item_id, setId] = useState(0);
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = { item_name }
    await fetch(`/api/item/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    window.location.reload();
  }


  const handleDelete = async (e) => {
    e.preventDefault()
    const body = { id: parseInt(item_id) }
    await fetch(`/api/item/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    window.location.reload();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex space-x-2'>
        <input className='border-2' type='text' value={item_name} onChange={(e) => { setName(e.target.value)}} />
        <button type='submit' value='add'>Add</button>
      </form>
      <form>
        <input className='border-2' type='text' value={item_id} onChange={(e) => {setId(e.target.value) }} />
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  )
}

export default function Home(props) {
  return (
    <>
      
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Shopping Cart on Steroids</h1>
      
      <div className='flex items-center justify-evenly'>
        <div>
          <Cart props={props}></Cart>
        </div>
        <div>
          <AddItem></AddItem>
        </div>
      </div>
    </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const cart = await prisma?.shoppingitem.findMany()
  return {
    props: { cart: cart },
  }
}