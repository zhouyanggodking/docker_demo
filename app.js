'use strict';

const Koa = require('koa');

const PORT = 9000;

const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.body = 'index page';
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  if (ctx.request.path === '/user') {
    ctx.response.body = {
      name: 'godking',
      title: 'SE'
    };
  } else {
    await next();
  }
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);