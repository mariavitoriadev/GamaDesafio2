import styled from 'styled-components';

export const Hero = styled.div`
    text-align: center;
    background-color: #191f11;

    .hero-image {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        max-width: 800px;
    }

    h1 {
        display: inline-block;
        padding: 40px 24px 0px;
        text-align: center;
        color: #00d25a;
        font-size: 32px;
        font-weight: 900;
        text-transform: uppercase;
    }

    @media(min-width: 768px) {
        h1 {
            font-size: 46px;
        }
    }    
`