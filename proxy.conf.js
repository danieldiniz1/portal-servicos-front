const PROXY_CONFIG = [
 {
    context: '/api',
    target: 'https://portal-servicos-test.herokuapp.com',
    secure: false,
    logLevel: 'debug',
    pathRewrite: {'^/api': ''}
 }
]
module.exports = PROXY_CONFIG