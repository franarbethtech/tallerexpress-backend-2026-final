import { ApiProperty } from '@nestjs/swagger';
import { Cliente } from './cliente.models';

export class Vehiculo {

    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'ABCD12' })
    patente: string;

    @ApiProperty({ example: 'Toyota' })
    marca: string;

    @ApiProperty({ example: 'Corolla' })
    modelo: string;

    @ApiProperty({
        example: 'automovil',
        enum: ['automovil', 'camioneta', 'moto', 'camion', 'otro'],
    })
    tipo: string;

    @ApiProperty({ example: 2022 })
    anio: number;

    @ApiProperty({ example: 35000 })
    kilometraje: number;

    @ApiProperty({ type: Cliente })
    cliente: Cliente;

    @ApiProperty({ example: true })
    activo: boolean;

    constructor(
        id: number,
        patente: string,
        marca: string,
        modelo: string,
        tipo: string,
        anio: number,
        kilometraje: number,
        cliente: Cliente,
        activo: boolean = true,
    ) {
        this.id = id;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this.cliente = cliente;
        this.activo = activo;
    }
}