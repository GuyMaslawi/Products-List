import { mobile } from './../../../helpers/media-queries/ScreenSizes';
import styled from "styled-components";

export const Div = styled.div`
    padding: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 10rem;
    border: 1px solid #f0f0f0;

    @media ${mobile}{
        border: 0;
    }
`;

export const Img = styled.img`
    width: 12rem;
`;

export const Title = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Description = styled.div`
    font-size: 1.6rem;
`;

export const SaveButton = styled.input`
    cursor: pointer;
    min-width: 10rem;
    height: 3.5rem;
    font-size: 1.4rem;
    border-radius: 2rem;
    background-color: ${props => props.theme.palette.primary.main};
    border: 0;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    color: #fff;
`;