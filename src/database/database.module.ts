import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config';
const API_KEY = '23443069';

@Global()
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017', {
    //   user: 'root',
    //   pass: 'root',
    //   dbName: 'mrs_api',
    // }),
    MongooseModule.forRootAsync({
      useFactory: async (configServices: ConfigType<typeof config>) => {
        const { user, pass, host, port, dbName, connection } =
          configServices.mongo;
        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: API_KEY,
    },
  ],
  exports: ['API_KEY', MongooseModule],
})
export class DatabaseModule {}
