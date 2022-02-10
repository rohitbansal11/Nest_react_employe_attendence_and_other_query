import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth, AuthSchema } from './scheema/authscheema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    passportModule,
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    JwtModule.register({
      secret: 'hiiiiiiiiiii',
    })
    
  ],
})
export class AuthModule {}
