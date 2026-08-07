import { ApiProperty } from '@nestjs/swagger';
import { Vehiculo } from './vehiculo.models';

export class OrdenTrabajo {

    @ApiProperty({example: 1, description: 'Identificador único de la orden'})
    id: number;

    @ApiProperty({ type: Vehiculo})
    vehiculo: Vehiculo;

    @ApiProperty({ example: new Date()})
    fechaIngreso: Date;

    @ApiProperty({example: 'Vehículo presenta ruido en el tren delantero'})
    descripcionProblema: string;

    @ApiProperty({example: 'Bujes de bandeja con desgaste'})
    diagnostico: string;

    @ApiProperty({example: 3})
    horasManoObra: number;

    @ApiProperty({example: 25000})
    valorHora: number;

    @ApiProperty({example: 75000})
    costoTotal: number;

    @ApiProperty({example: 'recibida',
        enum: [
            'recibida',
            'en_reparacion',
            'finalizada',
            'cancelada']})
    estado: string;

    constructor(
        id: number,
        vehiculo: Vehiculo,
        fechaIngreso: Date,
        descripcionProblema: string,
        diagnostico: string,
        horasManoObra: number,
        valorHora: number,
        costoTotal: number,
        estado: string,
    ) {
        this.id = id;
        this.vehiculo = vehiculo;
        this.fechaIngreso = fechaIngreso;
        this.descripcionProblema = descripcionProblema;
        this.diagnostico = diagnostico;
        this.horasManoObra = horasManoObra;
        this.valorHora = valorHora;
        this.costoTotal = costoTotal;
        this.estado = estado;
    }
}