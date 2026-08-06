import { ApiProperty } from '@nestjs/swagger';

export class Cliente {
    id:number;
    nombre:string;
    rut:string;
    correoElectronico:string;
    telefono:string;
    direccion:string;
    fechaRegistro:Date;

    constructor(
    id:number,
    nombre:string,
    rut:string,
    correoElectronico:string,   
    telefono:string,
    direccion:string,
    fechaRegistro:Date,
) {
    this.id = id;
    this.nombre = nombre;
    this.rut = rut;
    this.correoElectronico = correoElectronico;
    this.telefono = telefono;
    this.direccion = direccion;
    this.fechaRegistro = fechaRegistro;
    }
}

