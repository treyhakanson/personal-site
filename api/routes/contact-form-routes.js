// custom modules
import { API_INFO } from '../utils/constants';

function submitContactForm(req, res) {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    res.json({ success: true });
}

export default function(app) {
    app.post(`/v${API_INFO.VERSION}/contact-form/submit`, submitContactForm)
}
