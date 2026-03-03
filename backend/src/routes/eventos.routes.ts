import { Router } from 'express';
import { getEventos } from '../controllers/eventos.controller';

const router = Router();
// Ruta para obtener todos los eventos
router.get('/', getEventos);

export default router;