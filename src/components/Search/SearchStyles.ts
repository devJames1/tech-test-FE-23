import styled from "styled-components"

export const SearchWrapper = styled.div`
        max-width: 203px;
        max-height: 33px;
        border: 1px solid grey;
        background: white;
        border-radius: 14px;
        box-shadow: 0 8px 6px -10px #b3c6ff;
    `
export const SearchField = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
    `
export const Input = styled.input`
        width: 197px;
        height: 100%;
        border: 0px;
        font-size: 0.78rem;
        padding-left: 20px;
        padding-right: 20px;
        background-color: transparent;
        color: #585c6b;

        &:focus{
            outline: none;
        }
    `