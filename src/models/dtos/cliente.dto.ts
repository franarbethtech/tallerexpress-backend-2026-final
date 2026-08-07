import { ApiProperty } from '@nestjs/swagger';
export class CrearClienteDto {
    @ApiProperty({default: "Juan Perez"})
    nombre:string;  
    @ApiProperty({default: "12345678-9"})
    rut:string;  
    @ApiProperty({default: "Juan@gmail.com"})  
    correoElectronico:string;  
    @ApiProperty({default: "123-456-7890"})
    telefono:string; 
    @ApiProperty({default: "Calle Principal 123"})
    direccion:string;     

    constructor(
    nombre:string,
    rut:string,
    correoElectronico:string,   
    telefono:string,
    direccion:string,
) {
    this.nombre = nombre;
    this.rut = rut;
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.direccion = direccion;
    }
}
