import Router from 'koa-router';
import repositories from './repositories';

const router = new Router();

router.get('/repositories', repositories.routes());

export default router;
