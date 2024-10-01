import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { List, ListSchema } from './entities/list.entity';
import { ListService } from './list.service';
const mockUser = { id: '1', name: 'John Doe' };

const mockUserModel = {
  findById: jest.fn(),
  create: jest.fn(),
};
describe('ListService', () => {
  let service: ListService;
  let model: Model<List>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListService,
        {
          provide: getModelToken(List.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<ListService>(ListService);
    model = module.get<Model<List>>(getModelToken(List.name));
  });

  describe('findAll', () => {
    it('should create a new user', async () => {
      mockUserModel.create.mockResolvedValue(mockUser);

      const user = await service.create({ name: 'Jane Doe' });
      expect(user).toEqual(mockUser);
      expect(mockUserModel.create).toHaveBeenCalledWith({ name: 'Jane Doe' });
    });

    
  });
});
