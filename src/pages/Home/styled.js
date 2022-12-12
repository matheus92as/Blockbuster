import styled from 'styled-components'
import ReactPaginate from "react-paginate";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
align-items: center;
background-color:#E5E5E5;
`

export const MoviesList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`

export const PaginateContainer = styled(ReactPaginate)`
    height: 40px;
    align-items: center;
    list-style: none;
    display: flex;
    margin-bottom: 50px;
    padding: 0;
    a {
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        font-weight: bold;
        color: #5C16C5;
        cursor: pointer;
                :hover {
            color: whitesmoke;
            background-color: #ceb9ed;
        }
    }
    
    .paginationActive a {
        color: #5C16C5;
        background-color: #ceb9ed;
    }
    
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        a {
            padding: 5px;
            margin: 1px;
        }
    }
`;