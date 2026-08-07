import { ApiProperty } from '@nestjs/swagger';

export class ActualizarVehiculoDto {

    @ApiProperty({
        example: 45000,
        description: 'Nuevo kilometraje del vehículo'})
    kilometraje: number;

    constructor(
        kilometraje: number,
    ) {
        this.kilometraje = kilometraje;
    }
}