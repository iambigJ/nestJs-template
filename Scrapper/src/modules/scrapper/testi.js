// import { Injectable } from '@nestjs/common';
// import { InjectModel, Schema as MongooseSchema, Model } from 'mongoose';
// import { InjectConnection } from '@nestjs/mongoose';
// import { Connection } from 'mongoose';
//
// const  x = new Map('sd')
// console.log(x)
// @Injectable()
// export class DynamicRepositoryService {
//     private dynamicModels: Map<string, Model<any>> = new Map();
//
//     constructor(
//         @InjectConnection() private readonly connection: Connection,
//     ) {}
//
//     getModel(name: string, schema: MongooseSchema): Model<any> {
//         if (!this.dynamicModels.has(name)) {
//             const model = this.connection.model(name, schema);
//             this.dynamicModels.set(name, model);
//         }
//
//         return this.dynamicModels.get(name);
//     }
