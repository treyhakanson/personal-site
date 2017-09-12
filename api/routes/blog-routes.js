// custom modules
import SHARED_CONSTANTS from '../../constants.js';
import pool from '../db';

// pull off required shared constants
const { API_INFO, BLOG } = SHARED_CONSTANTS;

function getTopPosts(req, res) {
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               hook,
               banner_img AS bannerimage,
               author_name AS authorname,
               author_img AS authorimage,
               blog_body AS blogbody
            FROM blog_posts
            ORDER BY tm DESC
        LIMIT 3;
    `, [])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.json({ success: false });
        });
}

function getBlogPost(req, res) {
    const { blogTitle } = req.params;
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               hook,
               banner_img AS bannerimage,
               author_name AS authorname,
               author_img AS authorimage,
               blog_body AS blogbody
            FROM blog_posts
            WHERE LOWER(title) = LOWER($1)
        LIMIT 1;
    `, [blogTitle.replace(/-/g, ' ')])
        .then(({ rows }) => {
            if (rows.length) {
                res.json(rows[0]);
            } else {
                res.status(404).json({ error: 'post does not exist' });
            }
        }).catch(err => {
            console.log(err);
            res.json({ success: false });
        });
}

function getBlogPosts(req, res) {
    const { page = 0 } = req.query;
    pool.test(`
        SELECT id,
               tm AS date,
               title,
               hook,
               banner_img AS bannerimage,
               author_name AS authorname,
               author_img AS authorimage,
               blog_body AS blogbody
            FROM blog_posts
        LIMIT $1 OFFSET $2
    `, [BLOG.POSTS_PER_PAGE, BLOG.POSTS_PER_PAGE * page]);
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               hook,
               banner_img AS bannerimage,
               author_name AS authorname,
               author_img AS authorimage,
               blog_body AS blogbody
            FROM blog_posts
        LIMIT $1 OFFSET $2
    `, [BLOG.POSTS_PER_PAGE, BLOG.POSTS_PER_PAGE * page])
        .then(({ rows = [] }) => {
            res.json(rows);
        }).catch(err => {
            console.error(err);
            res.status(500).json({ error: 'an unexpected error occurred' });
        })
}

export default function(app) {
    app.get(`/api/v${API_INFO.VERSION}/blog/get-top-posts`, getTopPosts);
    app.get(`/api/v${API_INFO.VERSION}/blog/get-post/:blogTitle`, getBlogPost);
    app.get(`/api/v${API_INFO.VERSION}/blog/posts`, getBlogPosts);
};
