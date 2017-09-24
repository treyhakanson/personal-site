// custom modules
import SHARED_CONSTANTS from '../../constants.js';
import pool from '../db';

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

function getTopProjects(req, res) {
    pool.query(`
        SELECT id,
               tm AS date,
               title,
               banner_img AS bannerimage,
               project_body AS projectbody
            FROM projects
            ORDER BY tm DESC;
    `, [])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.json({ success: false });
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
    `, [projectTitle])
        .then(({ rows }) => {
            res.json(rows);
        }).catch(err => {
            console.log(err);
            res.json({ success: false });
        });
}

export default function(app) {
    app.get(`/api/v${API_INFO.VERSION}/project/get-top-projects`, getTopProjects);
    app.get(`/api/v${API_INFO.VERSION}/project/get-project/:projectTitle`, getProject);
}
