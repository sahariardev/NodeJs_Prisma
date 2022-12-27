import {Router} from 'express';

const   router = Router();

router.get('/product', ()=>{});
router.get('/product/:id', ()=>{});
router.put('/product/:id', ()=>{});
router.post('/product', ()=>{});
router.delete('/product', ()=>{});

router.get('/update', ()=>{});
router.get('/update/:id', ()=>{});
router.put('/update/:id', ()=>{});
router.post('/update', ()=>{});
router.delete('/update', ()=>{});

router.get('/updatepoints', ()=>{});
router.get('/updatepoints/:id', ()=>{});
router.put('/updatepoints/:id', ()=>{});
router.post('/updatepoints', ()=>{});
router.delete('/updatepoints', ()=>{});

export default router;