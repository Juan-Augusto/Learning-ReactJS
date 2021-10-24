import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: #8c52e5;

    h5{
        font-family: 'Roboto', sans-serif;
        text-align: center;
        font-size: 22px;
        color: #8c52e5;
    }
    a{
        text-decoration: none;
        text-align: center;
        color: #8c52e5;
        font-family: 'Roboto', sans-serif;
        margin: 12px 0;
    }
    .card{
        display: grid;
        background: #f9f9f9;
        max-width: 300px;
        border-radius: 22px;
        padding: 22px;
        form{
            input{
                width: 100%;
                height: 32px;
                border-radius: 22px;
                padding: 0 5px 0 3px;
                text-align: center;
                margin: 10px 0 0 0;
                border: 1px solid #e2e2e2;
            }
            input[type="submit"]{
                font-weight: bold;
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
                border: none;
                background: #68de5a;
                padding: 5px;
                border-radius: 12px;
                transition: .6s;
                &:hover{
                    background: #8c52e5;
                    transform: translateY(-3px);
                }

            }
        }
    }
`