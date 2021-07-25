import styled from 'styled-components';

export const ListItem = styled.a`
    display: none;
    color: #000;
    text-decoration: none;
    margin-left: 25px;

    @media(min-width: 600px) {
        display: block;
        font-size: 18px;
    }
`

export const Header = styled.header`
    background-color: #fff;
    box-shadow: 0px 5px 5px #dedede;

    .header-wrapper {
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .logo {
        width: 50px;
    }

    .menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

`