import { ApiProperty } from '@nestjs/swagger';

export class CrearVehiculoDto {

  @ApiProperty({ example: 'ABCD12' })
  patente: string;

  @ApiProperty({ example: 'Toyota' })
  marca: string;

  @ApiProperty({ example: 'Corolla' })
  modelo: string;

  @ApiProperty({
    example: 'automovil'})
  tipo: string;

  @ApiProperty({ example: 2022 })
  anio: number;

  @ApiProperty({ example: 35000 })
  kilometraje: number;

  @ApiProperty({example: 1, description: 'ID del cliente dueño del vehículo',})
  clienteId: number;

    constructor(
        patente:string,
        marca:string,
        modelo:string,   
        tipo:string,
        anio:number,
        kilomeraje: number,
        clienteId:number,

    ) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.anio = anio;
        this.kilometraje = kilomeraje;
        this.clienteId = clienteId
    }
}
