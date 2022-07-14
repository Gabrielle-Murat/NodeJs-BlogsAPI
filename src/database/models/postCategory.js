// requisito 11

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      foreignKey: true,
    },
  },
  { timestamps: false });

  return PostCategory;
};
