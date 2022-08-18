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
  return db.createTable('registration', {
    id: { 
      type: 'int', 
      primaryKey: true, 
      autoIncrement: true, 
      notNull: true
    },
    user_id:{
      type: 'int'
    },
    direct_id:{
      type: 'int'
    },
    created_at:{
      type: 'int'
    },
    updated_at:{
      type: 'int'
    },
    status:{
      type: 'string',
      notNull: true,
    },
    patient_id:{
      type: 'int'
    },
    type_service:{
      type: 'int',
      notNull: true
    },
    complaint:{
      type: 'string',
    },
    summa:{
      type: 'decimal',
    },
    pay_summa:{
      type: 'decimal'
    },
    backlog:{
      type: 'decimal',
    },
    discount:{
      type: 'decimal'
    },
    hospital_summa:{
      type: 'decimal'
    }
})
} 

exports.down = function(db) {
  return db.dropTable('registration');
};

exports._meta = {
  "version": 1
};

