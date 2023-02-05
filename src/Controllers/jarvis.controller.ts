import { Controller, Get } from '@nestjs/common';
import { JarvisRepository } from '../Repository/jarvis.repository';

@Controller()
export class JarvisController {
  constructor(private readonly jarvisRepository: JarvisRepository) {}

  @Get('/whatsapp/connection')
  connectionWhatsApp() {
    return this.jarvisRepository.connectionWhatsApp();
  }
}
