// Datos con ? son opcionales
export interface Game {
    id?: number,
    titulo?: string, 
    descripcion?: string,
    image?: string,
    created_at?: Date
}