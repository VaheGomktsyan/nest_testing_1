import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List) private listRepository: Repository<List>,
  ) {}
  async create(createListDto: CreateListDto) {
    return await this.listRepository.save(createListDto);
  }

  async findAll() {
    return await this.listRepository.find();
  }

  async findOne(id: number) {
    const find = await this.listRepository.findOne({ where: { id } });
    if (find) {
      return find;
    } else {
      return { message: 'lesson not found' };
    }
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const find = await this.listRepository.findOne({ where: { id } });
    if (find) {
      await this.listRepository.update(id, updateListDto);
      return true;
    } else {
      return false;
    }
  }

  async remove(id: number) {
    const find = await this.listRepository.findOne({ where: { id } });
    if (find) {
      await this.listRepository.delete(id);
      return true
    } else {
      return false;
    }
  }
}
