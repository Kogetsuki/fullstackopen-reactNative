import Router from 'koa-router';
import repositories from './repositories';

const router = new Router();

// Mount repositories router under /repositories
router.use('/repositories', repositories.routes());

export default router;
