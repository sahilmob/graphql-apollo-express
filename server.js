const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Add GraphQL express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Create GraphQL schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// Connects to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database')
    })
    .catch(err => {
        console.error(err);
    })

// Initialize express server
const app = express();

// Create GraphiQL Application
app.use('./graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Connect schemas with GraphQL
app.use('/graphql', graphqlExpress({
    schema,
    context: {
        Recipe,
        User
    }
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})