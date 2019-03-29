import pkg from '.././package.json'

const browserUA = navigator.userAgent.toLocaleLowerCase();
// clientId is retrieve from .env file
const clientId = process.env.REACT_APP_CLIENT_ID;

export default {
  userAgent: `${browserUA}:${pkg.name}:v${pkg.version}`,
  clientId: clientId
}