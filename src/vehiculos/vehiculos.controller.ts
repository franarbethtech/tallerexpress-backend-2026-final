import { ApiTags } from '@nestjs/swagger';
import { Vehiculo } from '../models/vehiculo.models';
import { CrearVehiculoDto } from '../models/dtos/crear-vehiculo.dto';
import { ActualizarVehiculoDto } from '../models/dtos/actualizarVehiculo.dto';
import { VehiculosService } from './vehiculos.service';
import { Controller, Post, Body, Get,Query, Param, Delete, Patch} from '@nestjs/common';

@ApiTags('Vehiculos')
@Controller('vehiculos')
export class VehiculosController {

  constructor(
    private readonly vehiculosService: VehiculosService,
  ) {}

  // Registrar un nuevo vehículo
    @Post()
        crearVehiculo(
            @Body() vehiculoDto: CrearVehiculoDto,
        ): Vehiculo {
            return this.vehiculosService.crearVehiculo(vehiculoDto);
    }

    // Obtener un vehículo según su id
    @Get(':id')
        obtenerVehiculoPorId(
            @Param('id') id: string,
        ): Vehiculo {
            return this.vehiculosService.obtenerVehiculoPorId(+id);
    }

    // Obtener todos los vehículos activos
    @Get()
        obtenerVehiculos(): Vehiculo[] {
            return this.vehiculosService.obtenerVehiculos();
        }

    // Actualizar kilometraje de un vehículo
    @Patch(':id/kilometraje')
        actualizarKilometraje(
            @Param('id') id: string,
            @Body() vehiculoDto: ActualizarVehiculoDto,
        ): Vehiculo {
            return this.vehiculosService.actualizarKilometraje(
            +id,
            vehiculoDto,
            );
        }

    // Dar de baja un vehículo según su id
    @Delete(':id')
        eliminarVehiculo( @Param('id') id: string): Vehiculo {
            return this.vehiculosService.eliminarVehiculo(+id);
        }
}

