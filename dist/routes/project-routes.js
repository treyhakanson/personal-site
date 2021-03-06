"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function (app) {
   app.get("/api/v" + API_INFO.VERSION + "/project/get-top-projects", getTopProjects);
   app.get("/api/v" + API_INFO.VERSION + "/project/get-project/:projectTitle", getProject);
   app.get("/api/v" + API_INFO.VERSION + "/project/posts", getProjects);
};

var _constants = require("../../constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pull off required shared constants
// custom modules
var API_INFO = _constants2.default.API_INFO,
    PROJECT = _constants2.default.PROJECT;


function getTopProjects(req, res) {
   _db2.default.query("\n        SELECT id,\n               tm AS date,\n               title,\n               banner_img AS bannerimage,\n               project_body AS projectbody\n            FROM projects\n            ORDER BY tm DESC\n        LIMIT 3;\n    ", []).then(function (_ref) {
      var rows = _ref.rows;

      res.json(rows);
   }).catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "an unexpected error occurred" });
   });
}

function getProject(req, res) {
   var projectTitle = req.params.projectTitle;

   _db2.default.query("\n        SELECT id,\n               tm AS date,\n               title,\n               banner_img AS bannerimage,\n               project_body AS projectbody\n            FROM projects\n            WHERE LOWER(title) = LOWER($1)\n        LIMIT 1;\n    ", [projectTitle.replace(/-/g, " ")]).then(function (_ref2) {
      var rows = _ref2.rows;

      if (rows.length) {
         res.json(rows[0]);
      } else {
         res.status(404).json({ error: "post does not exist" });
      }
   }).catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "an unexpected error occurred" });
   });
}

function getProjects(req, res) {
   var _req$query$page = req.query.page,
       page = _req$query$page === undefined ? 0 : _req$query$page;

   _db2.default.query("\n        SELECT id,\n               tm AS date,\n               title,\n               banner_img AS bannerimage,\n               project_body AS projectbody\n            FROM projects\n            ORDER BY tm DESC\n        LIMIT $1 OFFSET $2;\n    ", [PROJECT.PROJECTS_PER_PAGE, PROJECT.PROJECTS_PER_PAGE * page]).then(function (_ref3) {
      var rows = _ref3.rows;

      res.json(rows);
   }).catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "an unexpected error occurred" });
   });
}