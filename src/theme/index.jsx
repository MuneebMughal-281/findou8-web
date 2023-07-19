import { useMemo } from 'react';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { palette } from '@src/theme/palette';
import CssBaseline from '@mui/material/CssBaseline';

// eslint-disable-next-line react/prop-types
export const CustomTheme = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
