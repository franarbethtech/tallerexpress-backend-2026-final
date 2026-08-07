import { ApiProperty } from "@nestjs/swagger";

export class ActualizarClienteDto { 
    @ApiProperty({default:"serviciosbrito@gmail.com"})
    correoElectronico:string;  
    @ApiProperty({default:"959263983"})  
    telefono:string; 
    @ApiProperty({default: "Av. Manquehue sur 520"}) 
    direccion:string;     

    constructor(
    correoElectronico:string,   
    telefono:string,
    direccion:string,
) {
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.direccion = direccion;
    }
}