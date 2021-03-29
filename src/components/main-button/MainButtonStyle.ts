import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface MainButtonProps {
    asIcon?: boolean;
}

export const ButtonStyle = styled(Button) <MainButtonProps>`
    min-width: 5rem;
    height: 3.5rem;
    font-size: 1.4rem;
    border-radius: 2rem;
    padding: 0 1rem;

    ${props => {
        if (props.asIcon) {
            return `
                font-size: 1.6rem;
                color: #b3b3b3;
                min-width: 4rem;
                height: 4rem;
                border-radius: 50%;
            
                .MuiButton-startIcon{
                    margin: 0;

                    .MuiSvgIcon-root{
                        fill: #fff;
                
                        .MuiButton-startIcon{
                            margin-right: 0;
                        }
                    }
                }
            `;
        }
        return ``;
    }}
`;