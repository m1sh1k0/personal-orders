import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { Facility } from './entities/facility.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './entities/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Facility.name) private readonly facilityModel: Model<Facility>,
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  createFacility(dto: CreateFacilityDto) {
    return this.facilityModel.create(dto);
  }

  updateFacility(dto: UpdateFacilityDto) {
    return dto;
  }

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create(createOrderDto);
  }

  findAll() {
    return this.orderModel.find();
  }

  findOne(id: string) {
    return this.orderModel.findById(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
