import axios from 'axios';
// by default, 4xx errors throw. Since we can anticipate these we should treat them as a regular result.
axios.defaults.validateStatus = status => status >= 200 && status < 500;
