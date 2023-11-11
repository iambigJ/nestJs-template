
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type parrentDocument = HydratedDocument<Parrent>;

@Schema()
export class Parrent {
    @Prop({ required: true, unique: false }) // `required` enforces the field is present, `unique` enforces uniqueness
    CarName: string;

    @Prop()
    Url: number;

}

export const parrent = SchemaFactory.createForClass(Parrent);
