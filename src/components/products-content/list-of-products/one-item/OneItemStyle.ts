import styled from "styled-components";
import { Grid } from '@material-ui/core';

export const Div = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 10rem;
    border: 1px solid #f0f0f0;
    margin-bottom: 1rem;
    cursor: pointer;
    border-radius: .5rem;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    margin-right: 1rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
`;

export const GridStyle = styled(Grid)`
    padding: 1rem;
`;

export const Title = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Description = styled.div`
    font-size: 1.6rem;
    margin-bottom: 1rem;
`;

export const Created = styled.div`
    font-size: 1.6rem;
    color: blue;
`;

export const Price = styled.div`
    font-size: 1.6rem;
    color: #b3b3b3;
`;