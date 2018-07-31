import React from 'react'

const AddRecipe = () => {
    return (
        <div className="App">
          <h2 className="App">Add Recipe</h2>
          <form className="form">
            <input type="text" name="name" placeholder="Recipe Name" onChange={ this.handelChange } />
            <select name="category" onChange={ this.handelChange }>
              <option value="Breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
            </select>
            <input type="text" name="description" onChange={ this.handelChange } placeholder="Add description" />
            <textarea name="instructions" onChange={ this.handelChange } placeholder="Add instructions" />
            <button type="Submit" className="button-primary">Submit</button>
          </form>
        </div>
    )
}

export default AddRecipe;