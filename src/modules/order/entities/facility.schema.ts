import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CreateFacilityDto } from '../dto/create-facility.dto';

export type FacilityDocument = HydratedDocument<Facility>;

@Schema()
export class Facility implements CreateFacilityDto {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  cost: number;

  @Prop({ required: true })
  currency: string;
}

export const FacilitySchema = SchemaFactory.createForClass(Facility);
