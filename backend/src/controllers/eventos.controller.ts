import { Request, Response } from 'express';
import { pool } from '../config/database';

export const getEventos = async (req: Request, res: Response) => {
    try {
        // Consultamos la tabla oficial: en_eventos
        const result = await pool.query("SELECT * FROM en_eventos WHERE publicado = 'S' AND cancelado = 'N'");
        
        if (result.rows.length === 0) {
            // Si la tabla está vacía, mandamos un aviso amistoso
            return res.json([{ message: "Conectado a DB, pero no hay eventos publicados." }]);
        }
        
        res.json(result.rows);
    } catch (error) {
        console.log("=== Usando datos de prueba (DB local no detectada) ===");
        res.json([
            {
                id_evento: "EVT-01",
                descripcion: "Cena de Navidad DAW (Prueba)",
                fecha_evento: new Date(),
                lugar: "Restaurante Local",
                importe_evento: 25.00,
                publicado: 'S',
                cancelado: 'N'
            }
        ]);
    }
};