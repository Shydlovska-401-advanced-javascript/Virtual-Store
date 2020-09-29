import React from 'react';
import { connect } from 'react-redux';
import { change } from '../Store/Catgories.js'

function Categories(props){
    console.log(props)
    return(
        <section>
        <h1>{props.activeCategory ? props.activeCategory : "Please select the category"}</h1>
        <ul>
            {props.categories.map(category =>
                <li onClick={() => props.change(category.normalizedName)} key={category.normalizedName}>{category.normalizedName}</li> )}
        </ul>


        </section>
    )
}

const mapDispatchToProps = {
    change
  }
const mapStateToPops = (state) => {
    console.log(state, "state");
    return{
      activeCategory: state.categories.activeCategory,
      categories: state.categories.categories
    }
}


export default connect(mapStateToPops, mapDispatchToProps)(Categories);