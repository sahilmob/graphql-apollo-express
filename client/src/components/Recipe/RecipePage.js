import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries/index';
import LikeRecipe from './LikeRecipe';

const RecipePage = ({match}) => {
  const {_id} = match.params;
  return (
    <Query query={ GET_RECIPE } variables={ { _id } }>
      { ({data, loading, err}) => {
          if (loading) {
            return <div>Loading</div>
          }
          if (err) {
            return <div>err</div>
          }
          return (
            <div className="App">
              <h2>{ data.getRecipe.name }</h2>
              <p>Category:
                { data.getRecipe.category }
              </p>
              <p>Description:
                { data.getRecipe.description }
              </p>
              <p>Instructions:
                { data.getRecipe.instructions }
              </p>
              <p>Likes:
                { data.getRecipe.likes }
              </p>
              <p>Create By:
                { data.getRecipe.username }
              </p>
              <LikeRecipe _id={ _id } />
            </div>
          )
        } }
    </Query>
  )
}

export default withRouter(RecipePage);