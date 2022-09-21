import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 5500;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD')
    .setDescription('Documentation for REST API')
    .setVersion('1.0.0')
    .addTag('Mikita Radzkou')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    return console.log(`Server is running on PORT = ${PORT}`);
  });
}
bootstrap();
