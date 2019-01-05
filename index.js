const Koa = require('koa');
const app = new Koa();

const main = async (ctx, next)=>{
    // ctx.response.type = 'html';
    ctx.response.body = 'hello world'
};
app.use(main)
app.listen(3000);