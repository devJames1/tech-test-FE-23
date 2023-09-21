import styled, { keyframes } from "styled-components"
import theme from "../../styles/theme"

export interface StatusWrapperProps {
    status: string;
}

export const EarningRow = styled.div`
        align-items: flex-start;
        align-self: stretch;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 48px;
        justify-content: space-around;
        padding: 24px;
        position: relative;
        width: 100%;

        &:nth-child(odd) {
            background-color: #f4f4f480;
        }
    `

export const EarningFlex = styled.div`
        align-items: center;
        align-self: stretch;
        display: flex;
        flex: 0 0 auto;
        justify-content: space-between;
        margin-bottom: -16px;
        margin-top: -16px;
        position: relative;
        width: 100%;
    `

export const DateUserData = styled.div`
        color: ${theme.textSecondaryLight};
        font-family: ${theme.interSemiBoldHelvetica};
        font-size: ${theme.smallFontSize};
        font-style: ${theme.normalFontStyle};
        font-weight: ${theme.semiBoldFontWeight};
        letter-spacing: ${theme.xsLetterSpacing};
        line-height: ${theme.mediumLargeLineHeight};
        position: relative;
        width: 136px;
    `
export const StatusWrapperContainer = styled.div`
        height: 32px;
        position: relative;
        width: 136px;
    `

export const StatusWrapper = styled.div<{ status: string }>`
        align-items: center;
        background-color: ${(props: { status: string; }) => (props.status === 'Paid' ? `${theme.successSemiLight}` : `${theme.backgroundSecondaryLight}`)};
        border-radius: 6px;
        display: inline-flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        overflow: hidden;
        padding: 2px 8px;
        position: relative;
        top: 2px;

    `
export const StatusData = styled.div`
         color: ${theme.textSemiDark};
        font-family: ${theme.interSemiBoldHelvetica};
        font-size: ${theme.smallFontSize};
        font-style: ${theme.normalFontStyle};
        font-weight: ${theme.semiBoldFontWeight};
        letter-spacing: ${theme.xsLetterSpacing};
        line-height: ${theme.mediumLargeLineHeight};
        margin-top: -1px;
        position: relative;
        text-align: center;
        white-space: nowrap;
        width: fit-content;
    `
export const ValueData = styled.div`
        color: ${theme.textSemiDark};
        font-family: ${theme.interSemiBoldHelvetica};
        font-size: ${theme.smallFontSize};
        font-style: ${theme.normalFontStyle};
        font-weight: ${theme.semiBoldFontWeight};
        letter-spacing: ${theme.xsLetterSpacing};
        line-height: ${theme.mediumLargeLineHeight};
        position: relative;
        width: 136px;
    `

export const SpinnerContainer = styled.div`
    position: absolute;
    top: 268px;
    left: 74px;
    width: 90%;
    height: 69%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;