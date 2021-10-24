import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: green;
    color: #000000;
    text-align: center;
    .form-wrapper{
        display: grid;
        .card{
            background-color: #fff;
            padding: 22px;
            border-radius: 22px;
        }
        form{
            display: grid;
            input{
                margin: 10px;
            }
        }
    }
`