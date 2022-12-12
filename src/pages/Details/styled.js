import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color:#E5E5E5;
    overflow: hidden;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
`

export const Trailer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: start;
    margin: 25px 0;
    iframe{
        margin-top: 15px;
        width: 75%;
        height: 560px;
    }
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        margin: 5px 0;
        iframe{
            margin-top: 15px;
            width: 100%;
            height: 260px;
        } 
    }
`

export const ListRecommend = styled.div`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 10px;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px){
        margin-top: 25px;
    }
`

export const ListCast = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
`