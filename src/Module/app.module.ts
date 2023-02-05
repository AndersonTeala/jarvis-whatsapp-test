import { Module } from '@nestjs/common';
import { AppController } from '../Controllers/app.controller';
import { JarvisController } from '../Controllers/jarvis.controller';
import { AppService } from '../Service/app.service';
import { JarvisRepository } from '../Repository/jarvis.repository';

@Module({
  imports: [],
  controllers: [AppController, JarvisController],
  providers: [AppService, JarvisRepository],
})
export class AppModule {}
