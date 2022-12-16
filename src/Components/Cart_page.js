import React from 'react'
import Cart_show from './Cart_show'
import Data from './Data'
import Dress from './Dresses_Data'

export default function Cart_page(props) {
  console.log(props.values[0].productname)
    let mobile=[]
    let dress=[]

    for (let i=0;i<props.values.length;i++){
         if(props.values[i].productname==="mobile"){
          for (let j=0;j<Data.length;j++){
            if(props.values[i].id==Data[j].id){
                console.log(Data[j].name)
                mobile[i]={name:Data[j].name,url:Data[j].url,price:Data[j].price}
            }
         }
         }
         if(props.values[i].productname==="dress"){
          for (let j=0;j<Dress.length;j++){
            if(props.values[i].id==Dress[j].id){
                console.log(Dress[j].name)
                dress[i]={name:Dress[j].name,url:Dress[j].url,price:Dress[j].price}
            }
         }
         }
    }
    console.log(mobile)

    const mobile1=mobile.map((oldvalue)=>{
        return <Cart_show name={oldvalue.name} url={oldvalue.url} price={oldvalue.price }/>
    })

    const dress1=dress.map((oldvalue)=>{
      return <Cart_show name={oldvalue.name} url={oldvalue.url} price={oldvalue.price }/>
  })
  return (
    <div>
        {mobile1}
        {dress1}
    </div>
  )
}
