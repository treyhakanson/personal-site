// custom modules
import { API_INFO } from '../utils/constants';

function helloWorld(req, res) {
    res.send('Hello World!');
}

export default function(app) {
    // Only add dev routes it in dev environment
    if (process.env.NODE_ENV != 'development') return;
    app.get(`/v${API_INFO.VERSION}/dev/hello-world`, helloWorld);
}
