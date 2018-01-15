// custom modules
import SHARED_CONSTANTS from '../../constants.js';
import pool from '../db';

// pull off required shared constants
const { API_INFO, BLOG } = SHARED_CONSTANTS;

function getTopRecommendations(req, res) {
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               link,
               thumbnail
            FROM recommendations
            ORDER BY tm DESC
        LIMIT 4;
    `, [])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: 'an unexpected error occurred' });
        });
}

export default function(app) {
    app.get(`/api/v${API_INFO.VERSION}/recommendations/get-top-recommendations`, getTopRecommendations);
};
