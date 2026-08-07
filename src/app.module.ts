import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesController } from './clientes/clientes.controller';
import { ClientesService } from './clientes/clientes.service';
import { VehiculosService } from './vehiculos/vehiculos.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';

@Module({
  imports: [],
  controllers: [AppController, ClientesController, VehiculosController],
  providers: [AppService, ClientesService, VehiculosService],
})
export class AppModule {}
