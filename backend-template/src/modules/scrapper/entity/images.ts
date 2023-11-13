
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageSchema = HydratedDocument<Images>;

@Schema()
export class Images {
    @Prop({ required: true, unique: false })
    CarName: string;

    @Prop()
    Url: string[];

}

export const ImagesEntity= SchemaFactory.createForClass(Images);
