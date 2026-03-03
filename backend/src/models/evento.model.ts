export interface Evento {
    id_evento: string;
    descripcion: string;
    fecha_evento: Date;
    lugar: string;
    importe_evento: number;
    publicado: 'S' | 'N';
    cancelado: 'S' | 'N';
}