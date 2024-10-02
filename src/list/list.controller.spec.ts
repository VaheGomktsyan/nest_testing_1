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


  
});
