import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtHelperService } from './jwtHelper.service';
import { JwtModule } from '@nestjs/jwt';
import { UserHistory } from './../entities/user-history.entity';
import { EmailVerificationService } from 'src/email-verification/email-verification.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EmailVerificationModule } from 'src/email-verification/email-verification.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserHistory]),
    EmailVerificationModule,
    HttpModule,
    JwtModule.register({
      publicKey: 'PUBLIC_KEY',
      privateKey: 'PRIVATE_KEY',
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    EmailVerificationService,
    JwtHelperService,
    JwtService,
    ConfigService,
  ],
})
export class AuthModule {}
