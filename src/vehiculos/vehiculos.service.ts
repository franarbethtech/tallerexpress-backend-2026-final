import {  BadRequestException,  ConflictException,  Injectable,  NotFoundException,} from '@nestjs/common';
import { Vehiculo } from '../models/vehiculo.models';
import { ActualizarVehiculoDto } from '../models/dtos/ActualizarVehiculo.dto';
import { ClientesService } from '../clientes/clientes.service';
import { CrearVehiculoDto } from '../models/dtos/CrearVehiculo.dto';

@Injectable()
export class VehiculosService {

  private vehiculos: Vehiculo[] = [];
  private ultimoIdVehiculo = 0;

  constructor(
    private readonly clientesService: ClientesService,
  ) {}

  crearVehiculo(vehiculoDto: CrearVehiculoDto): Vehiculo {

    // Validar que el cliente exista
    const cliente = this.clientesService.obtenerClientePorId(
      vehiculoDto.clienteId,
    );

    // obtenerClientePorId envia error 404 si no existe
    // Validar patente única
    const patenteExistente = this.vehiculos.find(
      (vehiculo) =>
        vehiculo.patente.toLowerCase() ===
        vehiculoDto.patente.toLowerCase(),
    );

    if (patenteExistente) {
      throw new ConflictException('La patente ya se encuentra registrada');
    }

    // Crear vehículo
    const nuevoVehiculo = new Vehiculo(
      ++this.ultimoIdVehiculo,
      vehiculoDto.patente,
      vehiculoDto.marca,
      vehiculoDto.modelo,
      vehiculoDto.tipo,
      vehiculoDto.anio,
      vehiculoDto.kilometraje,
      cliente,
      true,
    );

    this.vehiculos.push(nuevoVehiculo);

    return nuevoVehiculo;
  }

  obtenerVehiculoPorId(id: number): Vehiculo {

    const vehiculo = this.vehiculos.find(
      (vehiculoGuardado) => vehiculoGuardado.id === id );

    if (!vehiculo) {
      throw new NotFoundException(
        'Vehículo no encontrado',
      );
    }

    return vehiculo;
  }

  obtenerVehiculos(): Vehiculo[] {

    return this.vehiculos.filter(
      (vehiculo) => vehiculo.activo === true);
  }

  actualizarKilometraje(id: number, vehiculoDto: ActualizarVehiculoDto): Vehiculo {

    const vehiculo = this.obtenerVehiculoPorId(id);

    if (
      vehiculoDto.kilometraje < vehiculo.kilometraje) {
      throw new BadRequestException('kilometraje inválido');
    }

    vehiculo.kilometraje = vehiculoDto.kilometraje;

    return vehiculo;
  }

  eliminarVehiculo(id: number): Vehiculo { const vehiculo = this.obtenerVehiculoPorId(id);

    vehiculo.activo = false;

    return vehiculo;
  }
}