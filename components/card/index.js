import React from 'react'
import styled from 'styled-components'

const CardMain = styled.div`
    width:314px;
    height: 316px;
    border: 1px solid #E6EAF6;
`
const CardHeader = styled.div`
    width: 100%;
    height: 15%;
    border-bottom: 1px solid #E6EAF6;
    display: flex;
    align-items: center;

    span{
        font-family: 'Rubik',sans-serif;
        font-size: 12px;
        font-weight: 500;
        color:#8798AD;
        display: block;
        margin-left: 10px;
    }
`
const CardBody = styled.div`
    max-width: 100%;
    height: 60%;
    padding:15px;
`
const CardBodyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    div{
        width: 150px;
    }

    img{
        width: 40px;
        height: 32px;
        margin-right: 24px;
        margin-top: 15px;
    }
`
const CardBodyFooter = styled.div`
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
    }

    div div{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
    }

    div div span{
        font-family: 'Rubik',sans-serif;
        font-size: 10px;
        font-weight: 400;
        line-height: 10px;
        letter-spacing: 0.22499999403953552px;
        color: #8798AD;
    }

`
const CardFooter = styled.div`
    width: 90.5%;
    height: 15%;
    border-top: 1px solid #E6EAF6;
    padding: 15px;


    span{
        font-family: 'Rubik', sans-serif;
        color:#8798AD;
        font-size: 14px;
    }
`
const Button = styled.button`
    background: #21D170;
    border-radius: 5px;
    height: 34px;
    width: 99px;
    border-radius: 5px;
    padding: 8px, 16px, 8px, 16px;
    color:white;
    outline: none;
    border: none;
    font-family: 'Rubik',sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    :active{
        background: #1ab05e;
    }
`
const Title = styled.span`
    font-family: 'Rubik',sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    display: block;
    color: #274264;
`
const Subtitle = styled.span`
    margin-top: 16px;
    font-family: 'Rubik',sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    display: block;
    color: #21D170;
`

function maskValue(value){
    value = value.toString()

    value = value.replace(/\D/g,"") 
    value = value.replace(/(\d{1})(\d{2})/,"R$ $1.$2")

    return value;
}

export default function Card({type,title,icon,address,actionName,positionAvaliable}){
    return(
        <CardMain>
            <CardHeader>
                <span>{type}</span>
            </CardHeader>

            <CardBody>
                <CardBodyHeader>
                    <div>
                        <Title>{title}</Title>
                    </div>
                   
                    <img src={icon}/>
                </CardBodyHeader>
                
                <Subtitle>{actionName}</Subtitle>

                <CardBodyFooter>
                    <div>
                        <Title>{positionAvaliable}</Title>

                        <div>
                            <span>VAGAS</span>
                            <span>DISPONÍVEIS</span>
                        </div>
                    </div>

                    <Button>Participar</Button>
                </CardBodyFooter>

            </CardBody>

            <CardFooter>
                <span>{address}</span>
            </CardFooter>
        </CardMain>
    )
}