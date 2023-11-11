
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type parrentDocument = HydratedDocument<Parrent>;

@Schema()
export class Parrent {
    @Prop({ required: true, unique: false })
    CarName: string;

    @Prop()
    Url: string[];

}

export const parrent = SchemaFactory.createForClass(Parrent);
