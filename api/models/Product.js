/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    pdname: {
      type: 'string',
      required: true
    },
    quantity:{
      type: 'integer',
      required:true   
    },
    price: {
      type: 'integer',
      required: true
    },
    SellerName: {
      type: 'string',
      required: true
    },
    Section: {
      type: 'string',
      required: true
    },
    category: {
      type: 'string',
      required: true
    }

  }, 
  connection: 'mongodb',
};

