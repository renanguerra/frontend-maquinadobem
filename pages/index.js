import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card/index'
import styled from 'styled-components'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { useEffect, useState } from 'react'
import Json from './api/api.json'
import axios from 'axios'

const Main = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-left: 10%;
  padding-right: 10%;
  
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 12%;

  h2{
    font-family: 'Rubik',sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: #274264;
  }

  span{
    font-family: 'Rubik',sans-serif;
    font-size: 15px;
    font-style: normal;
    color: #8798AD;
    margin-right: 10px;
  }

  div label {
    display: flex;
    align-items: center;
  }


`
const ButtonFooter = styled.button`
  height: 50px;
  width: 233px;
  border-radius: 6px;
  padding: 16px, 24px, 16px, 24px;
  border: 1px solid #21D170;
  box-sizing: border-box;
  border-radius: 6px;
  outline: none;
  background-color: #FFFFFF;
  margin-left: 10%;
  margin-top: 30px;
  color: #21D170;
  font-family: 'Rubik',sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  :hover{
    background-color: #21D170;
    color:white;

  }
`

export default function Home() {
  const [toggleValue,setToogle] = useState(false)

  const [cardInfos, setCardInfos] = useState([])



  useEffect(()=>{
    let copyCardInfos = []

    axios.get('https://api.hom.transform.click/search/opportunities?filter_materials=true&filter_subscribes=true',{
      headers: {
          'Content-Type': 'application/json'
      }}).then((res)=>{

        res.data.response.opportunities_data.map((e)=>{

          if(e.level === 'subscribe'){
            copyCardInfos.push({
              title:'Vaga de voluntariado',
              nameSubscribe: e.subscribe_data.title,
              nameAction: e.action_data.title,
              positionAvaliable: e.subscribe_data.position.available,
              address: e.subscribe_data.time_accept_remote ? 'Remoto' : `${e.subscribe_data.address.city}, ${e.subscribe_data.address.state}`,
              icon:'./icon.svg'
            })
          } else if(e.level === 'materials') {
            copyCardInfos.push({
              title:'Doação de material',
              nameSubscribe: e.material_data.title,
              nameAction: e.action_data.title,
              positionAvaliable: e.material_data.position.available,
              address: e.material_data.time_accept_remote ? 'Remoto' : `${e.material_data.address.city}, ${e.material_data.address.state}`,
              icon:'./icon1.svg'
            })
          }
        })
        
        setCardInfos(copyCardInfos)
      })
    
  },[cardInfos])

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

    <Header>
      <h2>Oportunidades em destaque</h2>

      <div>
        <label>
          <span>Geolocalização {toggleValue ? 'Ativa' : 'Desativada'}</span>
            <Toggle defaultChecked={toggleValue} icons={false} onChange={() => setToogle(!toggleValue)} /> 
        </label>
      </div>
    </Header>

    <Main>
      {cardInfos && (
        cardInfos.map((e)=>(
        <Card key={e.id} type={e.title} title={e.nameSubscribe} icon={e.icon} address={e.address} actionName={e.nameAction} positionAvaliable={e.positionAvaliable}/>
      )))}

    </Main>

    <ButtonFooter>Todas as Oportunidades</ButtonFooter>
    </div>
  )
}
