// // generic.repository.ts
// import { Model } from 'mongoose';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
//
// @Injectable()
// export class GenericRepository<Entity, DTO> {
//     constructor(
//         @InjectModel(Entity.name) private readonly model: Model<Entity>,
//     ) {}
//
//     async create(dto: DTO): Promise<void> {
//         try {
//             const result = await this.model.create(dto);
//             console.log('Created:', result);
//         } catch (error) {
//             console.error('Error creating entity:', error);
//             // Handle error as needed
//         }
//     }
//
//     async findAndUpdate(filter: object, update: object): Promise<any> {
//         try {
//             const options = {
//                 upsert: true,
//                 new: true,
//                 runValidators: true,
//             };
//             const result = await this.model.findOneAndUpdate(filter, update, options);
//             console.log('Updated:', result);
//         } catch (error) {
//             console.error('Error finding/updating entity:', error);
//             // Handle error as needed
//         }
//     }
//
//     async findOne(filter: object): Promise<any> {
//         try {
//             const result = await this.model.findOne(filter);
//             return result;
//         } catch (error) {
//             console.error('Error finding entity:', error);
//             // Handle error as needed
//             throw error; // Re-throw the error if you want to propagate it
//         }
//     }
// }