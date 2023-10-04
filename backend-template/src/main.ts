import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Taskmodule } from './modules/task/task.module'; // Corrected import statement

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.listen(3000).then(()=> {
       console.log(' listening on 3002 ')
   })
}
bootstrap();