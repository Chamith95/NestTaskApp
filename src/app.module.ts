import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { Tasks1Service } from './tasks1/tasks1.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    TasksModule,
    AuthModule],
  providers: [Tasks1Service],
})
export class AppModule {}
