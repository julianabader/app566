const Parent = require('./parents/models/parent.model');
const Category = require('./activities/models/category.model');

module.exports = {
  getParent(parentId, cb) {
    Parent.findById(parentId, (error, parent) => cb(error, parent));
  },
  getParentByName(parentName, cb) {
    Parent.findOne({ name: parentName }, (error, parent) => cb(error, parent));
  },
  getChild(parentId, childId, cb) {
    Parent.findById(parentId, (error, parent) => {
      cb(error, parent.children.id(childId));
    });
  },

  getCategory(categoryId, cb) {
    Category.findById(categoryId, (error, category) => cb(error, category));
  },

  getActivity(categoryId, activityId, cb) {
    Category.findById(categoryId, (error, category) => {
      cb(error, category.children.id(activityId));
    });
  },

  validateFields(requiredFields, object) {
    let fieldsValid = true;
    requiredFields.forEach(field => {
      if (!object[field]) {
        fieldsValid = false;
      }
    });

    return fieldsValid;
  }
};
