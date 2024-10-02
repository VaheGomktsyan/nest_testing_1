import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { Repository } from 'typeorm';
import { List } from './entities/list.entity';
import { ListService } from './list.service';

describe('ListService', () => {
  let service: ListService;
  let repository: Repository<List>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListService,
        {
          provide: getRepositoryToken(List),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ListService>(ListService);
    repository = module.get<Repository<List>>(getRepositoryToken(List));
  });

  describe('findAll', () => {
    it('should return List[ ]', async () => {
      const expectedResult: any = [];
      jest.spyOn(repository, 'find').mockResolvedValue(expectedResult);
      const result = await service.findAll();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return List', async () => {
      const expectedResult: any = {};
      jest
        .spyOn(repository, 'findOne')
        .mockImplementation(() => expectedResult);
      const result = await service.findOne(1);
      if (expectedResult) {
        expect(result).toEqual(expectedResult);
      } else {
        expect(service.update(2, expectedResult)).toEqual('list not found');
      }
    });

    describe('create', () => {
      it('should create List', async () => {
        const expectedResult: any = {};
        jest.spyOn(repository, 'save').mockImplementation(() => expectedResult);
        const result = await service.create(expectedResult);
        expect(result).toEqual(expectedResult);
      });
    });

    describe('update', () => {
      it('should be return List with update data', async () => {
        const param: number = 2;
        const expectedResult: any = {
          name: 'Task 1',
        };
        jest
          .spyOn(repository, 'findOne')
          .mockImplementation(() => expectedResult);
        if (expectedResult) {
          const result = jest
            .spyOn(repository, 'update')
            .mockReturnValue(undefined);
          await service.update(param, expectedResult);
          expect(result).toHaveBeenCalledWith(param, expectedResult);
        } else {
          expect(service.update(param, expectedResult)).toEqual(
            'task not found',
          );
        }
      });
    });

    describe('remove', () => {
      it('should be delete List', async () => {
        const expectedResult: any = {};
        jest
          .spyOn(repository, 'findOne')
          .mockImplementation(() => expectedResult);
        if (expectedResult) {
          jest
            .spyOn(repository, 'delete')
            .mockImplementation(() => expectedResult);
          const result = await service.remove(1);
          expect(result).toEqual(true);
        } else {
          expect(service.remove(1)).toEqual(false);
        }
      });
    });
  });
});
