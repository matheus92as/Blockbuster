import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 35%;
    background-color: #2D0C5E;
    font-family: "Roboto", sans-serif;
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #5C16C5;
    color: white;
    p{
        font-size: 25px;
        font-weight: bold;
        margin: 5px 10px 5px 35px;
    }
    div{
        width: 50px;
        height: 20px;
        background-color: #FFFFFF;
        border-radius: 20px;
        :hover{
            cursor: pointer;
        }
    }
`

export const Content = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 60%;
    p{
        font-size: .75em;
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 95%;
    } 
    `
export const MainText = styled.h1`
    width: 85%;
    font-size: 2.2em;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 20px;
    /* border: 2px solid white; */
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 95%;
        font-size: 1.7em;
    }        
`

export const GenderList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
        justify-content: start; 
    }
`