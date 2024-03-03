import { Test, TestingModule } from '@nestjs/testing';
import { MathController } from './math.controller';
import { MathService } from './math.service';

describe('MathController', () => {
    let controller: MathController;
    let service: MathService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MathController],
            providers: [
                {
                    provide: MathService,
                    useValue: {
                        getNotifications: jest.fn().mockResolvedValue(10),
                    },
                },
            ],
        }).compile();

        controller = module.get<MathController>(MathController);
        service = module.get<MathService>(MathService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return the number of notifications', async () => {
        const result = await controller.getNotifications('data', {} as any);
        expect(result).toBe(10);
        expect(service.getNotifications).toBeCalledWith({
            data: 'data',
            context: {},
        });
    });
});
