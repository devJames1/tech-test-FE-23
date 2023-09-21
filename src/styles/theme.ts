// Define a type for your theme object
interface Theme {
    interSemiBoldHelvetica: string;
    smallFontSize: string;
    normalFontStyle: string;
    semiBoldFontWeight: string;
    xsLetterSpacing: string;
    mediumLargeLineHeight: string;
    interMediumHelvetica: string;
    xsFontSize: string;
    mediumFontWeight: string;
    mediumLineHeight: string;
    largeFontSize: string;
    largeLineHeight: string;
    backgroundColor: string;
    textSecondaryLight: string;
    textSemiDark: string;
    backgroundSecondaryLight: string;
    successSemiLight: string;
    mediumLargeFontSize: string;
}

// Create your theme object
const theme: Theme = {
    interSemiBoldHelvetica: '"Inter-SemiBold", Helvetica',
    smallFontSize: '14px',
    normalFontStyle: 'normal',
    semiBoldFontWeight: '600',
    xsLetterSpacing: '-0.14px',
    mediumLargeLineHeight: '24px',
    interMediumHelvetica: '"Inter-Medium", Helvetica',
    xsFontSize: '12px',
    mediumFontWeight: '500',
    mediumLineHeight: '12px',
    largeFontSize: '40px',
    largeLineHeight: '48px',
    backgroundColor: '#fcfcfc',
    textSecondaryLight: '#6f767e',
    textSemiDark: 'rgba(26, 29, 31, 1)',
    backgroundSecondaryLight: '#6f767e66',
    successSemiLight: 'rgba(96, 202, 87, 1)',
    mediumLargeFontSize: '20px',
};

export default theme;
