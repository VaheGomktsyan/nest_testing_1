import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './entities/list.entity';
import { ListController } from './list.controller';
import { ListService } from './list.service';

describe('ListController', () => {
  let controller: ListController;
  let service: ListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [
        ListService,
        {
          provide: getRepositoryToken(List),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ListController>(ListController);
    service = module.get<ListService>(ListService);
  });

  describe('GET', () => {
    it('should return an array of lists', async () => {
      const expectedResult: any = [];
      jest.spyOn(service, 'findAll').mockImplementation(() => expectedResult);
      const result = await controller.findAll();
      expect(result).toBe(expectedResult);
    });
  });

  describe('GET/:id', () => {
    it('should be return an object of list', async () => {
      const newResult: any = {};
      jest.spyOn(service, 'findOne').mockResolvedValueOnce(newResult);
      const result = await controller.findOne("1");
      return expect(result).toBe(newResult);
    });
  });
  
  describe('POST', () => {
    it('should be add new list', async () => {
      const newResult: any = {
        "name": "todo",
      };
      jest.spyOn(service, 'create').mockImplementation(() => newResult);
      const result = await controller.create(newResult);
      expect(result).toEqual(newResult);
    });
  });

  describe('PATCH', () => {
    it('should be updated correct list', async () => {
      const newlist: any = {};
      jest.spyOn(service, 'update').mockImplementation(() => newlist);
      const result = await controller.update("1", newlist);
      expect(result).toEqual(newlist);
    });
  });

  describe('DELETE', () => {
    it('should be delete correct list', async () => {
      const deletelist: any = {};
      jest.spyOn(service, 'remove').mockImplementation(() => deletelist);
      const result = await controller.remove("1");
      expect(result).toEqual(deletelist);
    });
  });
});
