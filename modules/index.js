const User = require('./User');
const Person = require('./Person');
const Product = require('./Product');
const Project = require('./Project');
const Comments = require('./Comments');
const ShoppingCart = require('./ShoppingCart');
const sequelize = require('../db/connection');

// קשרים של User
User.hasOne(ShoppingCart, { foreignKey: 'userId' });
ShoppingCart.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Person, { foreignKey: 'userId' });
Person.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Project, { foreignKey: 'userId' });
Project.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Comments, { foreignKey: 'userId' });
Comments.belongsTo(User, { foreignKey: 'userId' });

Person.hasMany(Comments, { foreignKey: 'personId' });
Comments.belongsTo(Person, { foreignKey: 'personId' });

const CartProduct = sequelize.define('CartProduct', {}, { timestamps: false });

ShoppingCart.belongsToMany(Product, { through: CartProduct, foreignKey: 'cartId' });
Product.belongsToMany(ShoppingCart, { through: CartProduct, foreignKey: 'productId' });

module.exports = {
  User,
  Person,
  Product,
  Project,
  Comments,
  ShoppingCart,
  CartProduct
};
