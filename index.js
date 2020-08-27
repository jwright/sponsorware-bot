const postInstallSetup = require('./lib/postInstallSetup')

module.exports = robot => {
  postInstallSetup(robot.router)
}
