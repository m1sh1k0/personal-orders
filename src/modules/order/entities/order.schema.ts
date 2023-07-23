import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Facility } from './facility.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Facility',
  })
  facility: Facility;

  @Prop({ required: true })
  date: Date;

  @Prop()
  paid: boolean = false;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
