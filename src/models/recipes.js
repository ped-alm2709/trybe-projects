const connection = require('./connection');

const createRecipe = async (data) => {
  const { _id: userId, name, ingredients, preparation } = data;
  const db = await connection();
  const newRecipe = await db.collection('recipes').insertOne({
    userId,
    name,
    ingredients,
    preparation,
  });
  return { userId, name, ingredients, preparation, _id: newRecipe.insertedId }; 
};

module.exports = {
  createRecipe,
};