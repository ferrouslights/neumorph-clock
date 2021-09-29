import styled from "styled-components";

import {FiSun, FiMoon} from 'react-icons/fi'

export const TimeWrapper = styled.div`
    height: 400px;
    width: 400px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    border-radius: 50px;
    background: linear-gradient(145deg, #353535, #3f3f3f);
    box-shadow:  20px 20px 60px #2c2c2c,
             -20px -20px 60px #4a4a4a;
    
`

export const Time = styled.h1`
    font-family: 'Roboto Mono', monospace;
    font-size: 4rem;
    color: #dbdbdb;

    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
`
export const Sun = styled(FiSun)`
    font-family: 'Roboto Mono', monospace;
    font-size: 6rem;
    color: #dbdbdb;
    filter:drop-shadow(0 0 0.75rem white)
    /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073; */
`
export const Moon = styled(FiMoon)`
    font-family: 'Roboto Mono', monospace;
    font-size: 6rem;
    color: #dbdbdb;
    filter:drop-shadow(0 0 0.75rem white)
    /* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073; */
`