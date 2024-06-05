import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './app/modules/appointment/appointment.module';
import { AuthModule } from './app/modules/auth/auth.module';
import { UserModule } from './app/modules/user/user.module';


@Module({
  imports: [ UserModule, AuthModule, AppointmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
