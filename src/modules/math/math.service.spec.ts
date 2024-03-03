import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService', () => {
    let service: MathService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MathService],
        }).compile();

        service = module.get<MathService>(MathService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should add numbers correctly', () => {
        expect(service['add'](1, 2)).toEqual(3);
    });

    it('should subtract numbers correctly', () => {
        expect(service['subtract'](5, 2)).toEqual(3);
    });

    it('should multiply numbers correctly', () => {
        expect(service['multiply'](3, 2)).toEqual(6);
    });

    it('should divide numbers correctly', () => {
        expect(service['divide'](6, 2)).toEqual(3);
    });
});
