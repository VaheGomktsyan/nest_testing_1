import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel: Model<List>) {}
  async create(createListDto: CreateListDto) {
    return await this.listModel.create(createListDto);
  }

  async findAll() {
    return await this.listModel.find();
  }

  async findOne(id: string) {
    return this.listModel.findById(id);
  }

  async update(id: string, updateListDto: UpdateListDto) {
    return this.listModel.findByIdAndUpdate(id, updateListDto);
  }

  async remove(id: string) {
    return this.listModel.findByIdAndDelete(id);
  }
}
