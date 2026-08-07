import { BadRequestException, Injectable, NotFoundException} from '@nestjs/common';

import { OrdenTrabajo } from '../models/ordenTrabajo.models';
import { CrearOrdenTrabajoDto } from '../models/dtos/crearOrdenTrabajo.dto';
import { ActualizarOrdenTrabajoDto } from '../models/dtos/actualizarOrdenTrabajo.dto';
import { VehiculosService } from '../vehiculos/vehiculos.service';

@Injectable()
export class OrdenTrabajoService {

  private ordenesTrabajo: OrdenTrabajo[] = [];
  private ultimoIdOrden = 0;

  constructor( private readonly vehiculosService: VehiculosService ) {}

  crearOrdenTrabajo( ordenDto: CrearOrdenTrabajoDto): OrdenTrabajo {

    const vehiculo =  this.vehiculosService.obtenerVehiculoPorId( ordenDto.vehiculoId );

    if (!vehiculo.activo) {
      throw new BadRequestException(
        'El vehículo no está activo');
    }

    this.ultimoIdOrden++;
    const fechaIngreso = new Date();
    const estadoInicial = 'recibida';
    const costoTotal =
      ordenDto.horasManoObra * ordenDto.valorHora;

    const nuevaOrden = new OrdenTrabajo(
      this.ultimoIdOrden,
      vehiculo,
      fechaIngreso,
      ordenDto.descripcionProblema,
      '',
      ordenDto.horasManoObra,
      ordenDto.valorHora,
      costoTotal,
      estadoInicial);

    this.ordenesTrabajo.push(nuevaOrden);

    return nuevaOrden;
}

  obtenerOrdenPorId(id: number): OrdenTrabajo {

    const orden = this.ordenesTrabajo.find( (ordenGuardada) => ordenGuardada.id === id);

    if (!orden) {
      throw new NotFoundException('Orden de trabajo no encontrada');
    }
    return orden;
  }

  obtenerOrdenes(): OrdenTrabajo[] {
    return this.ordenesTrabajo;
  }

  actualizarOrdenTrabajo(id: number,actualizarDto: ActualizarOrdenTrabajoDto): OrdenTrabajo {

    const orden =
      this.obtenerOrdenPorId(id);

    if (
      orden.estado !== 'recibida' &&
      orden.estado !== 'en_reparacion'
    ) {
      throw new BadRequestException(
        'No se puede registrar el diagnóstico en el estado actual',
      );
    }

    orden.diagnostico = actualizarDto.diagnostico;
    orden.horasManoObra = actualizarDto.horasManoObra;
    orden.estado = actualizarDto.estado;
    orden.costoTotal =  orden.horasManoObra * orden.valorHora;
    return orden;
  }
}