"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

exports.up = function (knex, Promise) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(resolve, reject) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Promise.all([knex.schema.createTable('users', function (users) {
                users.increments('id').primary().unsigned();
                users.string('userid').notNullable();
                users.string('username').notNullable();
                users.string('password').notNullable();
              }).createTable('threats', function (threats) {
                threats.increments('weaponid').primary().unsigned();
                threats.timestamp('created_at');
                threats.timestamp('updated_at');
                threats.string('weapon').notNullable();
                threats.longtext('img').notNullable();
                threats.string('percentage').notNullable();
              }).then(function () {
                return knex('users').insert([{
                  userid: '3333',
                  username: 'USER',
                  password: '1234'
                }]);
              })]);

            case 3:
              console.log('Tables created successfully!');
              resolve();
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};