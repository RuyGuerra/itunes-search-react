import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Open Sans',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
