import {  Body,  Controller,  Get,  Param,  Patch,  Post,} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenTrabajo } from '../models/ordenTrabajo.models';
import { CrearOrdenTrabajoDto } from '../models/dtos/crearOrdenTrabajo.dto';
import { ActualizarOrdenTrabajoDto } from '../models/dtos/actualizarOrdenTrabajo.dto';
import { OrdenTrabajoService } from './orden-trabajo.service';

@ApiTags('OrdenTrabajo')
@Controller('ordenes-trabajo')
export class OrdenTrabajoController {

  constructor(
    private readonly ordenTrabajoService: OrdenTrabajoService) {}

  @Post()
    crearOrdenTrabajo( @Body() ordenDto: CrearOrdenTrabajoDto): OrdenTrabajo {
        return this.ordenTrabajoService.crearOrdenTrabajo(ordenDto);
    }

  @Get(':id')
    obtenerOrdenPorId( @Param('id') id: string): OrdenTrabajo {
        return this.ordenTrabajoService.obtenerOrdenPorId(+id);
    }

  @Get()
    obtenerOrdenes(): OrdenTrabajo[] {
        return this.ordenTrabajoService.obtenerOrdenes();
    }

  @Patch(':id/diagnostico')
    actualizarOrdenTrabajo(@Param('id') id: string, @Body() actualizarDto: ActualizarOrdenTrabajoDto ): OrdenTrabajo {
        return this.ordenTrabajoService.actualizarOrdenTrabajo( +id,actualizarDto);
    }
}