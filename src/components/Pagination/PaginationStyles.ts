import styled from 'styled-components';

export const RoundEffect = styled.div <{ active: boolean }>`
    color: grey;
    cursor: pointer;
    font-size: 13px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 9px;
    border-radius: 6px;
    height: 30px;
    /* width: 30px; */
    margin: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),0 3px 6px rgba(0, 0, 0, 0.23);
    text-decoration: none;

  &:hover {
    text-decoration: none;
    background: #999dff;
    color: #fff;
  }

  /* Add conditional styles based on props */
  ${({ active }: { active: boolean }) => active === true
    ? `
        background: #999dff;
        color: #fff;
    `
    : ''}
`;

export const FlexContainer = styled.div<{ isloading: true | false }>`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  display: ${(props: { isloading: any; }) => (props.isloading === 'true' ? 'none' : 'flex')};
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > div {
    padding-top: 10px;
  }
`;

export const PaginateCtn = styled.div`
  display: flex;
`;
