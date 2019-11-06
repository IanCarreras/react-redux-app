import styled from 'styled-components'
import cardTable from './card-table-background.jpg'

export const AppDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: url(${cardTable});
  background-size: cover;
  padding: 3rem;
`
export const Image = styled.img`
    height: 15rem;
    margin-left: 1rem;
`
export const Button = styled.button`
    margin: 1rem 0 0 1rem;
    height: 3rem;
    width: 5rem;
    border-radius: .3rem;
    font-size: 1rem;
    :hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`
export const DisplayDiv = styled.div`
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: .5rem;
    background: black;
    height: 15rem;
    width: 15rem;
`
export const Score = styled.h2`
    color: white;
`