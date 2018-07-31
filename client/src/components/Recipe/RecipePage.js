import React from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries/index'
const RecipePage = ({match}) => {
    const {_id} = match.params;
    return (
        <Query query={ GET_RECIPE } variables={ { _id } }>
          { (data, loading, err) => {
                if (loading) {
                    return <div>Loading</div>
                }
                if (err) {
                    return <div>err</div>
                }
                console.log(data)
                return <h1>Recipe Page</h1>
            } }
        </Query>
    )
}

export default withRouter(RecipePage);