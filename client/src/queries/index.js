import {gql} from 'apollo-boost';

export const GET_ALL_RECIPES = gql`
query {
    getAllRecipes {
        name
        description
        category
        instructions
        likes
        createdDate
    }
}
`;