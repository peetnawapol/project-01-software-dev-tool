import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './app.service';
import { dbService } from './config/database/database.service';
import { MemberModule } from './common/member/member.module';
import { ServiceModule } from './common/service/service.module';
import { PaymentModule } from './common/payment/payment.module';
import { BookBankModule } from './common/book-bank/book-bank.module';
import { RoleModule } from './common/role/role.module';
import { FamilyModule } from './common/family/family.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    MongooseModule.forRoot('mongodb+srv://raatchaapol:Na-Pt-1199946713@cluster0.ounut.mongodb.net/paypai?retryWrites=false&w=majority'),
    MemberModule,
    FamilyModule,
    ServiceModule,
    PaymentModule,
    BookBankModule,
    RoleModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
