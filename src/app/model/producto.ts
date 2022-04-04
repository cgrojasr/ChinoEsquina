export interface producto{
    idProducto: number,
    sku: string;
    nombre: string;
    descripcion: string;
    cantidadUnitaria: number;
    idUnidadMedida: number;
    idMarca: number;
    activo: boolean;
    idUsuarioRegistro: number;
    idUsuarioModifico: number;
}