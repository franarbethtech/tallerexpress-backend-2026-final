import { ApiProperty } from '@nestjs/swagger';

export class ActualizarOrdenTrabajoDto {

    @ApiProperty({example: 'Se reemplazaron pastillas de freno delanteras'})
    diagnostico: string;

    @ApiProperty({example: 4})
    horasManoObra: number;

    @ApiProperty({example: 'en_reparacion',
        enum: ['recibida',
            'en_reparacion',
            'finalizada',
            'cancelada',]})
    estado: string;

    constructor(
        diagnostico: string,
        horasManoObra: number,
        estado: string,
    ) {
        this.diagnostico = diagnostico;
        this.horasManoObra = horasManoObra;
        this.estado = estado;
    }
}