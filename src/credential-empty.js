import pkg from '.././package.json'
const browserUA = navigator.userAgent.toLocaleLowerCase();

export default {
  userAgent: `${browserUA}:${pkg.name}:v${pkg.version}`,
  clientId: "enter app id here"
}