import React, { Component } from 'react'

class AddRecipe extends Component {
    state = {
        name: '',
        instructions: '',
        category: 'Breakfast',
        description: '',
        username: ''
    };

    handelChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const {name, category, description, instructions} = this.state
        return (
            <div className="App">
              <h2 className="App">Add Recipe</h2>
              <form className="form">
                <input type="text" name="name" placeholder="Recipe Name" onChange={ this.handelChange } value={name}/>
                <select name="category" onChange={ this.handelChange } value={category}>
                  <option value="Breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                </select>
                <input type="text" name="description" onChange={ this.handelChange } value={description} placeholder="Add description" />
                <textarea name="instructions" onChange={ this.handelChange } placeholder="Add instructions" value={instructions}/>
                <button type="Submit" className="button-primary">Submit</button>
              </form>
            </div>
        )
    }
}

export default AddRecipe;