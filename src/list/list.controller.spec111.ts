// import { getModelToken } from '@nestjs/mongoose';
// import { Test, TestingModule } from '@nestjs/testing';
// import {  Model } from 'mongoose';
// import { List } from './entities/list.entity';
// import { ListController } from './list.controller';
// import { ListService } from './list.service';

// describe('ListController', () => {
//   let controller: ListController;
//   let service: ListService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [ListController],
//       providers: [
//         ListService,
//         {
//           provide: getModelToken(List.name),
//           useClass: Model
//         },
//       ],
//     }).compile();

//     controller = module.get<ListController>(ListController);
//     service = module.get<ListService>(ListService);
//   });

//   describe('GET', () => {
//     it('should return an array of lists', async () => {
//       const newResult: any = {
//         "firstName": "Anna",
//         "lastName": "Anyan",
//         "role": "0"
//       };
//       jest.spyOn(service, 'create').mockImplementation(() => newResult);
//       const result = await controller.create(newResult);
//       expect(result).toEqual(newResult);
//     });
//   });
// });
