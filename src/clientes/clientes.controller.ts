import { Controller, Post, Body, Get,Query, Param, Delete, Patch} from '@nestjs/common';
import { CrearClienteDto } from '../models/dtos/cliente.dto';
import { Cliente } from '../models/cliente.models';
import { ClientesService } from './clientes.service';
import { ApiQuery } from '@nestjs/swagger';
import { ActualizarClienteDto} from '../models/dtos/actualizarCliente.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clienteService: ClientesService) {}
    @Post()
    crearCliente(@Body() cliente: CrearClienteDto):Cliente {
        return this.clienteService.crearCliente(cliente);
    }

    @Get(':id')
    obtenerCliente(@Param('id') id: number): Cliente {
        return this.clienteService.obtenerClientePorId(+id);
    }

    @Get()
    @ApiQuery({ name: 'nombre', required: false, type: String })
    obtenerClientes(@Query('nombre') nombre: string): Cliente[] {
        return this.clienteService.obtenerClientes(nombre);
    }
    
    @Patch(':id/contacto')
    actualizarCliente( @Param('id') id: string, @Body() actualizarDto: ActualizarClienteDto,): Cliente {
        return this.clienteService.actualizarCliente( +id, actualizarDto);
    }


    @Delete(':id')
    eliminarCliente(@Param('id') id: number): void {
      return this.clienteService.eliminarCliente(+id);
    }
}
