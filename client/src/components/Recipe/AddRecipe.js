import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import { ADD_RECIPE, GET_ALL_RECIPES } from '../../queries';
import Error from '../Error';

const initialState = {
    name: '',
    instructions: '',
    category: 'Breakfast',
    description: '',
    username: ''
};
class AddRecipe extends Component {
    state = {
        ...initialState
    };

    componentDidMount() {
        this.setState({
            username: this.props.session.getCurrentUser.username
        });
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event, addRecipe) => {
        event.preventDefault();
        addRecipe().then(({data}) => {
            console.log(data);
            this.clearState();
            this.props.history.push('/');
        }).catch(err => {
            console.log(err)
        })
    };

    clearState = () => {
        this.setState({
            ...initialState
        });
    };

    validateForm = () => {
        const {name, category, description, instructions} = this.state;
        const isInvalid = !name || !category || !description || !instructions;
        return isInvalid;
    }

    updateCache = (cache, {data: {addRecipe}}) => {
        const {getAllRecipes} = cache.readQuery({
            query: GET_ALL_RECIPES
        });
        cache.writeQuery({
            query: GET_ALL_RECIPES,
            data: {
                getAllRecipes: [addRecipe, ...getAllRecipes]
            }
        })
    }
    render() {
        const {name, category, description, instructions, username} = this.state;
        return (
            <Mutation mutation={ ADD_RECIPE } variables={ { name, category, description, instructions, username } } update={ this.updateCache }>
              { (addRecipe, {data, loading, error}) => {
                    return (
                        <div className="App">
                          <h2 className="App">Add Recipe</h2>
                          <form className="form" onSubmit={ event => this.handleSubmit(event, addRecipe) }>
                            <input type="text" name="name" placeholder="Recipe Name" onChange={ this.handleChange } value={ name } />
                            <select name="category" onChange={ this.handleChange } value={ category }>
                              <option value="Breakfast">Breakfast</option>
                              <option value="lunch">Lunch</option>
                              <option value="dinner">Dinner</option>
                              <option value="snack">Snack</option>
                            </select>
                            <input type="text" name="description" onChange={ this.handleChange } value={ description } placeholder="Add description" />
                            <textarea name="instructions" onChange={ this.handleChange } placeholder="Add instructions" value={ instructions } />
                            <button disabled={ loading || this.validateForm() } type="Submit" className="button-primary">Submit</button>
                            { error && <Error error={ error } /> }
                          </form>
                        </div>
                    )
                } }
            </Mutation>
        )
    }
}

export default withAuth(session => session && session.getCurrentUser)(withRouter(AddRecipe));