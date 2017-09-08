// custom modules
import SHARED_CONSTANTS from '../../constants.js';
import pool from '../db';

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

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
            LIMIT 3;
    `, [])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.json({ success: false });
        });
}

export default function(app) {
    app.get(`/v${API_INFO.VERSION}/blog/get-top-posts`, getTopPosts);
};
