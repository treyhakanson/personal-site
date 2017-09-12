// custom modules
import SHARED_CONSTANTS from '../../constants.js';
import pool from '../db';

// pull off required shared constants
const { API_INFO } = SHARED_CONSTANTS;

function submitContactForm(req, res) {
    const { name, email, message } = req.body;

    pool.query(`
        INSERT INTO contact_form (
            name, email, message
        ) VALUEs (
            $1, $2, $3
        )
    `, [name, email, message])
        .then(() => {
            res.json({ success: true });
        }).catch(err => {
            console.log(err);
            res.json({ success: false });
        });
}

export default function(app) {
    app.post(`/api/v${API_INFO.VERSION}/contact-form/submit`, submitContactForm);
};
