import styled from "styled-components";

const Form = styled.form`
    
    max-width: 500px;
    padding: 24px;
    margin: 70px auto;
    position: relative;
    background-color: #00d25a;

    input {
        padding: 10px 5px;
        width: 100%;
        border: none;
        color: #FFFFFF;
        font-size: 16px;
        margin-bottom: 20px;
        display: inline-block;
        background-color: #ffffff3d;
        border-bottom: 1px solid #FFF;
        font-family: Raleway,sans-serif;
    }

    input::placeholder {
        color: #FFFFFF;
    }

    input:focus {
        outline: none;
    }

    input.submit {
        background-color: #FFFFFF;
        padding: 7px 40px;
        color: #000;
        font-weight: 700;
        font-size: 18px;
        width: max-content;
        margin: 0 auto;
        display: block;
    }

    @media(min-width: 768px) {
        flex-grow: 1;
    }
` 

export default function ClientsForm () {

    const sendClients = (e) => {
        let clientsArray = [];
    
        e.preventDefault();
        if(window.localStorage.clients) {
            clientsArray =  Object.values(JSON.parse(window.localStorage.clients));
            clientsArray.push({name: document.querySelector("#name").value, email: document.querySelector("#email").value, address: document.querySelector("#address").value })
            window.localStorage.clients = JSON.stringify(clientsArray);
        }
        else {
            clientsArray.push({name: document.querySelector("#name").value, email: document.querySelector("#email").value })
            window.localStorage.clients = JSON.stringify(clientsArray);
        }
    }   

    return(
        <Form id="form" method="GET" onSubmit={sendClients}>
            <div className="form-wrapper">
                <input id="name" name="name" type="text" placeholder="Insira seu nome:" required="" />
                <input id="email" name="email" type="text" placeholder="Insira seu e-mail:" required="" />
                <input id="address" name="address" type="text" placeholder="Insira seu endereço:" required="" />
                <input type="submit" className="submit" value="Enviar" />
            </div>
        </Form>
    );

}