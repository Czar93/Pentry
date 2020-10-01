import styled, { css } from 'styled-components';

const Paragraph = styled.p`
    width: 80%;
    color: ${({theme, white}) => white ? theme.color.white : 'black' };
    margin: 0 auto 25px auto;
    text-align: center;

    ${({big, theme}) => 
        big && css`
            font-size: ${theme.font.xxxl};
            font-weight: ${theme.bold};
            margin-bottom: 0;

            ::first-letter {
                text-transform: uppercase;
            }
        `
        }

    ${({medium, theme}) => 
            medium && css`
                font-size: ${theme.font.xxl};
                margin-bottom: 0;
            `
            }

    ${({small, theme}) => 
                small && css`
                    font-size: ${theme.font.s};
                `
                }
`



export default Paragraph;

