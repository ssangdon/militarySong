import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default : "#536349",
    },
  },
  //배경이미지 넣는것... 이거 넣느라 2시간 걸림...... 왜 url로만 먹히지?
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(https://i.ibb.co/gMZhwWV/camouflage-g4350b40d2-1920.jpg)"
        }
      }
    }
  }
  // 폰트사용할꺼면 추가할것
  // typography:{

  // }
});

export default theme;