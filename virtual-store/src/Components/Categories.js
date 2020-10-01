import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import { change, getCategories } from '../Store/Catgories.js'

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    categories: {
      margin: theme.spacing(3),
    },
  }));

function Categories(props){

  const classes = useStyles();

  useEffect(() =>{
    props.getCategories()
  }, [props])

  return (
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
      {props.categories.map(category =>
          <Button
            // key={cat._id}
            color="primary"
            onClick={() => props.change(category.name)} key={category.name}
          >
           {category.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}


const mapDispatchToProps = {
    change,
    getCategories
  }
const mapStateToPops = (state) => {
    // console.log(state, "state");
    return{
      activeCategory: state.categories.activeCategory,
      categories: state.categories.categories
    }
}


export default connect(mapStateToPops, mapDispatchToProps)(Categories);