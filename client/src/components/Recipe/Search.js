import React from 'react'
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import { SEARCH_RECIPES } from '../../queries';

const Search = () => {
    return (
        <Query query={ SEARCH_RECIPES } variables={ { searchTerm: "" } }>
          { ({data, loading, error}) => {
                console.log(data)
                if (loading) {
                    return <div>Loading</div>
                }
                if (error) {
                    return <div>Error</div>
                }
                return (
                    <div className="App">
                      <input type="search" />
                      <ul>
                        { data.searchRecipes.map(recipe => (<li key={ recipe._id }>
                                                              <Link to={ `/recipe/${recipe._id}` }>
                                                              <h4>{ recipe.name }</h4></Link>
                                                              <p>
                                                                { recipe.likes }
                                                              </p>
                                                            </li>)
                          
                          ) }
                      </ul>
                    </div>
                )
            } }
        </Query>
    )
}

export default Search;
