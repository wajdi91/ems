import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://wajdi:wajdi@cluster0.dlql6ky.mongodb.net/wajdi?retryWrites=true&w=majority',
    ),
    SignupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
