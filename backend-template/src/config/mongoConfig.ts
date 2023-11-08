import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleOptions = {
    uri: 'mongodb://localhost:27017/nestjs-mongodb', // Connection URL
    useNewUrlParser: true,
    useUnifiedTopology: true,
};