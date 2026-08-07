import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CrearClienteDto } from '../models/dtos/cliente.dto';
import { Cliente } from '../models/cliente.models';
import { ActualizarClienteDto } from '../models/dtos/actualizarCliente.dto';

@Injectable()
export class ClientesService {
    private clientes: Cliente[] = [];
    private ultimoIdCliente = 0;

    // crear alguno usuarios por defecto
    constructor() {}

    crearCliente(CrearClienteDTO: CrearClienteDto):Cliente  {
        const clienteExistente = this.clientes.find(
        (cliente) => cliente.rut === CrearClienteDTO.rut,
        );

        if (clienteExistente) {
        throw new ConflictException(
            'El RUT ya se encuentra registrado',
        );
        }
        const cliente:Cliente = new Cliente(
        ++this.ultimoIdCliente,
        CrearClienteDTO.nombre,
        CrearClienteDTO.rut,
        CrearClienteDTO.correoElectronico,
        CrearClienteDTO.telefono,
        CrearClienteDTO.direccion,
        new Date(),
        );

        this.clientes.push(cliente);

        return cliente;
    }
    obtenerClientePorId(id: number): Cliente {
        const cliente = this.clientes.find((cliente) => cliente.id === id);
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
        return cliente;
    }

    obtenerClientes(nombre?: string): Cliente[] {
        if (!nombre) {
            return this.clientes;
        }
        
        const appFilterName = this.clientes.filter((cliente) => cliente.nombre.toLowerCase().includes(nombre.toLowerCase()));
            if (appFilterName.length === 0) {
                throw new NotFoundException('No hay coincidencia con el patrón de búsqueda');
            }
        return appFilterName;
    }

    eliminarCliente(id: number): void {
        const index = this.clientes.findIndex((cliente) => cliente.id === id);  
        if (index !== -1) {
            this.clientes.splice(index, 1);
        } else {
            throw new NotFoundException('Cliente no encontrado');
        }   
    }

    actualizarCliente(id: number, actualizarDto: ActualizarClienteDto, ): Cliente {
        const clienteEncontrado = this.obtenerClientePorId(id);

        const correoExistente = this.clientes.find(
        (clienteGuardado) => clienteGuardado.id !== id && clienteGuardado.correoElectronico === actualizarDto.correoElectronico);

        if (correoExistente) {
            throw new ConflictException(
            'El correo electrónico ya se encuentra registrado',
            );
        }

        clienteEncontrado.correoElectronico = actualizarDto.correoElectronico;
        clienteEncontrado.telefono = actualizarDto.telefono;
        clienteEncontrado.direccion = actualizarDto.direccion;
        return clienteEncontrado;
    }

}
        