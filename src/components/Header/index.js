import styled from 'styled-components';

const StyledHeader = styled.header`
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

`

export default function Header() {

    return (
        <StyledHeader>
            <div className="header-wrapper container">
                <img className="logo" src="/logo.png" alt="Gama Logo" />
            </div>
        </StyledHeader>
    );
}