import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import eventosRoutes from './routes/eventos.routes'; // Asegúrate de que esta línea esté

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/eventos', eventosRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcionando. Prueba en /api/eventos');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
});