import styled from 'styled-components';
import theme from './styles/theme';

export const AppWrapper = styled.div`
    background-color: ${theme.backgroundColor};
    display: flex;
    flex-direction: column;
    max-width: 1455px;
    height: 667px;
  `;

export const Header = styled.div`
    padding: 35px 0 0 51px;
  `
export const HeaderText = styled.h3`
    color: #272b30;
    font-family: ${theme.interSemiBoldHelvetica};
    font-size: ${theme.largeFontSize};
    font-style: ${theme.normalFontStyle};
    font-weight: ${theme.semiBoldFontWeight};
    letter-spacing: -0.8px;
    line-height: ${theme.largeLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  `

export const HeadingContainer = styled.div`
    padding: 92px 90px 0 70px;
    width: 1337px;
    display: flex;
    justify-content: space-between;
  `

export const TitleDiv = styled.div`
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
  `
export const TagDiv = styled.div`
    background-color: #999dff;
    border-radius: 4px;
    height: 32px;
    position: relative;
    width: 16px;
  `
export const Overview = styled.h4`
    color: ${theme.textSemiDark};
    font-family: ${theme.interSemiBoldHelvetica};
    font-size: ${theme.mediumLargeFontSize};
    font-style: ${theme.normalFontStyle};
    font-weight: ${theme.semiBoldFontWeight};
    letter-spacing: -0.4px;
    line-height: 32px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  `
export const EarningReport = styled.div`
    border-radius: 8px;
    padding: 18px 48px 70px 70px;
    width: 1337px;
  `
export const TableHead = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
    position: relative;
    width: 100%;
    color: ${theme.textSecondaryLight};
    font-family: ${theme.interMediumHelvetica};
    font-size: ${theme.xsFontSize};
    font-style: ${theme.normalFontStyle};
    font-weight: ${theme.mediumFontWeight};
    letter-spacing: -0.12px;
    line-height: ${theme.mediumLineHeight};
  `
export const TableHeadText = styled.div`
    margin-top: -1px;
    position: relative;
    width: 136px;
  `