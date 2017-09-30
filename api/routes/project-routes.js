// custom modules
import SHARED_CONSTANTS from '../../constants.js';
import pool from '../db';

// pull off required shared constants
const { API_INFO, PROJECT } = SHARED_CONSTANTS;

function getTopProjects(req, res) {
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               banner_img AS bannerimage,
               project_body AS projectbody
            FROM projects
            ORDER BY tm DESC
        LIMIT 3;
    `, [])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: 'an unexpected error occurred' });
        });
}

function getProject(req, res) {
    const { projectTitle } = req.params;
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               banner_img AS bannerimage,
               project_body AS projectbody
            FROM projects
            WHERE LOWER(title) = LOWER($1)
        LIMIT 1;
    `, [projectTitle.replace(/-/g, ' ')])
        .then(({ rows }) => {
            if (rows.length) {
                res.json(rows[0]);
            } else {
                res.status(404).json({ error: 'post does not exist' });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: 'an unexpected error occurred' });
        });
}

function getProjects(req, res) {
    const { page = 0 } = req.query;
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               banner_img AS bannerimage,
               project_body AS projectbody
            FROM projects
            ORDER BY tm DESC
        LIMIT $1 OFFSET $2;
    `, [PROJECT.PROJECTS_PER_PAGE, PROJECT.PROJECTS_PER_PAGE * page])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: 'an unexpected error occurred' });
        });
}

export default function(app) {
    app.get(`/api/v${API_INFO.VERSION}/project/get-top-projects`, getTopProjects);
    app.get(`/api/v${API_INFO.VERSION}/project/get-project/:projectTitle`, getProject);
    app.get(`/api/v${API_INFO.VERSION}/project/posts`, getProjects);
}
