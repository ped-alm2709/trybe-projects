const { ObjectId } = require('mongodb');
const connection = require('./connection');

const insertImage = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const image = `localhost:3000/src/uploads/${id}.jpeg`;
  const db = await connection();
  const findRecipe = await db.collection('recipes')
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { image } },
      { returnOriginal: false },
    );

  // console.log(findRecipe.value);
  return findRecipe.value;
};

module.exports = insertImage;
