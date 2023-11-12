
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type parrentDocument = HydratedDocument<Images>;

@Schema()
export class Images {
    @Prop({ required: true, unique: false })
    CarName: string;

    @Prop()
    Url: string[];

}

export const parrent= SchemaFactory.createForClass(Images);
