"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function (app) {
   app.get("/api/v" + API_INFO.VERSION + "/blog/get-top-posts", getTopPosts);
   app.get("/api/v" + API_INFO.VERSION + "/blog/get-post/:blogTitle", getBlogPost);
   app.get("/api/v" + API_INFO.VERSION + "/blog/posts", getBlogPosts);
};

var _constants = require("../../constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pull off required shared constants
// custom modules
var API_INFO = _constants2.default.API_INFO,
    BLOG = _constants2.default.BLOG;


function getTopPosts(req, res) {
   _db2.default.query("\n        SELECT id,\n               tm AS date,\n               title,\n               hook,\n               banner_img AS bannerimage,\n               author_name AS authorname,\n               author_img AS authorimage,\n               blog_body AS blogbody\n            FROM blog_posts\n            ORDER BY tm DESC\n        LIMIT 4;\n    ", []).then(function (_ref) {
      var rows = _ref.rows;

      res.json(rows);
   }).catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "an unexpected error occurred" });
   });
}

function getBlogPost(req, res) {
   var blogTitle = req.params.blogTitle;

   _db2.default.query("\n        SELECT id,\n               tm AS date,\n               title,\n               hook,\n               banner_img AS bannerimage,\n               author_name AS authorname,\n               author_img AS authorimage,\n               blog_body AS blogbody\n            FROM blog_posts\n            WHERE LOWER(title) = LOWER($1)\n        LIMIT 1;\n    ", [blogTitle.replace(/-/g, " ")]).then(function (_ref2) {
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

function getBlogPosts(req, res) {
   var _req$query$page = req.query.page,
       page = _req$query$page === undefined ? 0 : _req$query$page;

   _db2.default.query("\n        SELECT id,\n               tm AS date,\n               title,\n               hook,\n               banner_img AS bannerimage,\n               author_name AS authorname,\n               author_img AS authorimage,\n               blog_body AS blogbody\n            FROM blog_posts\n        LIMIT $1 OFFSET $2;\n    ", [BLOG.POSTS_PER_PAGE, BLOG.POSTS_PER_PAGE * page]).then(function (_ref3) {
      var _ref3$rows = _ref3.rows,
          rows = _ref3$rows === undefined ? [] : _ref3$rows;

      res.json(rows);
   }).catch(function (err) {
      console.error(err);
      res.status(500).json({ error: "an unexpected error occurred" });
   });
}