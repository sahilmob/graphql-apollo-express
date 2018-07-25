exports.resolvers = {
    Query: {
        getAllRecipes: async(root, args, {Recipe}) => {
            const AllRecipes = await Recipe.find();
            return AllRecipes;
            // it could be "return await Recipe.find();"
        }
    },
    Mutation: {
        addRecipe: async (root,{name, description, category, instructions, username}, {Recipe}) => {
            const newRecipe = await new Recipe({
                name,
                description,
                category,
                instructions,
                username
            }).save();
            return newRecipe;
        }
    }
};