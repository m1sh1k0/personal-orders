import { Logger, Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MONGO_URI } from './connections';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({
  imports: [
    MonitoringModule,
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    OrderModule,
    MongooseModule.forRoot(MONGO_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
