import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { VehiculosService } from './vehiculos/vehiculos.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { OrdenTrabajoController } from './orden-trabajo/ordenTrabajo.controller';
import { OrdenTrabajoService } from './orden-trabajo/ordenTrabajo.service';

@Module({
  imports: [],
  controllers: [AppController, ClientesController, VehiculosController, OrdenTrabajoController],
  providers: [AppService, ClientesService, VehiculosService, OrdenTrabajoService],
})
export class AppModule {}
