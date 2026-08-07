import { ApiProperty } from '@nestjs/swagger';

export class CrearOrdenTrabajoDto {

    @ApiProperty({example: 1})
    vehiculoId: number;

    @ApiProperty({example: 'Vehículo presenta ruido en el tren delantero'})
    descripcionProblema: string;

    @ApiProperty({example: 3 })
    horasManoObra: number;

    @ApiProperty({example: 25000})
    valorHora: number;

    constructor(
        vehiculoId: number,
        descripcionProblema: string,
        horasManoObra: number,
        valorHora: number,
    ) {
        this.vehiculoId = vehiculoId;
        this.descripcionProblema = descripcionProblema;
        this.horasManoObra = horasManoObra;
        this.valorHora = valorHora;
    }
}