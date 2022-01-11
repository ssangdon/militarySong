import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";
import LottoImg from "../public/Lotto.jpeg";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import soldier from '../public/soldier.png';


const useStyles = makeStyles({
  mobileLayoutBlock: {
    position: "relative",
    border: "1px solid white",
    backgroundColor: "#536349",
    borderRadius: "16px",
    width: "720px",
    height: "500px",
    boxShadow: "0 0 8px 0 rgba(0, 0 ,0, 0.04)",
    marginTop: "96px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
  },
  pcLayoutBlock: {
    position: "relative",
    border: "1px solid white",
    backgroundColor: "#536349",
    borderRadius: "16px",
    width: "560px",
    height: "500px",
    boxShadow: "0 0 8px 0 rgba(0, 0 ,0, 0.04)",
    marginTop: "96px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column",
    backgroundImage:""
  },
  mobileImgStyle: {
    marginTop: "23px",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const match=useMediaQuery('(max-width:600px)');

  return (
    <Grid container item xs={12} justifyContent='center' alignItems='center'>
      <Grid className={match ? classes.mobileLayoutBlock : classes.pcLayoutBlock }>
        <Grid container item xs={12} justifyContent='center' alignContent='center'>
          <Image
            width={390}
            height={131}
            src={soldier}
            alt="Picture of Soldier"
          />
        </Grid>
        <Grid>{children}</Grid>

        <Grid
          style={{marginTop:"30%"}}
          container
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
