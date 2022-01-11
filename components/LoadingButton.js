import { CircularProgress, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  button: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  },

  input: {
    display: "none",
  },

  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing(1),
  },
});

const LoadingButton = (props) => {
    const {classes} = props
  return (
    <div>
      <Button variant="contained" className={classes.button} disabled>
        <CircularProgress className={classes.circularProgress} size={20} />
        검색중...
      </Button>
    </div>
  );
};


  
  export default withStyles(styles)(LoadingButton);
  
