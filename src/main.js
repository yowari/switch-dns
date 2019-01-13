const Koa = require('koa');
const route = require('koa-route');
const config = require('./config');

const app = new Koa();

app.use(route.get('/', (ctx) => {
    ctx.redirect('http://google.com');
}));

app.listen(config.port);