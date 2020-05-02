import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Todo example')
  .setDescription('The Todo Example API description')
  .setVersion('0.0.1-alpha.1')
  .addTag('0.0.1-alpha.1+todoexample')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
