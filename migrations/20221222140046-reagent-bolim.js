'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable("reagent_department", {
    id:{
      type: 'int',
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    name:{
      type: 'string',
      notNull: true
    },
    reagent_id:{
      type: 'int',
      notNull: true
    }
  });
};

exports.down = function(db) {
  return db.dropTable("reagent_department");
};

exports._meta = {
  "version": 1
};
