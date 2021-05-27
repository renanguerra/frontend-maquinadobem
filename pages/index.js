import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card/index'
import styled from 'styled-components'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { useEffect, useState } from 'react'
import Json from './api/api.json'

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
  const [data, setData] = useState()

  useEffect(()=>{
    setData(Json)
  },[data])

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
      {data && (
        data.map((e)=>(
        <Card key={e.id} type={e.type} title={e.title} icon={e.logo} city={e.cityName} state={e.stateName} hour={e.hours} items={e.items} value={e.value}/>
      )))}

    </Main>

    <ButtonFooter>Todas as Oportunidades</ButtonFooter>
    </div>
  )
}
