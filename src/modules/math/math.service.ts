import { Injectable, Logger } from '@nestjs/common';
import {
    GetNotificationsDto,
    ICalculateData,
} from './dto/get-notifications.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class MathService {
    private logger = new Logger(MathService.name);

    public getNotifications(getNotificationsDto: GetNotificationsDto): number {
        const { data } = getNotificationsDto;
        const dataObject = data as unknown as ICalculateData;
        if (
            !dataObject ||
            !dataObject.a ||
            !dataObject.b ||
            !dataObject.operation
        ) {
            this.logger.error('Invalid data');
            throw new RpcException('Invalid data');
        }
        const result = this.calculate(dataObject);
        if (!result) {
            this.logger.error('Operation failed');
            throw new RpcException('Operation failed');
        }
        console.log('Result:', result);
        return result;
    }

    private calculate(data: ICalculateData): number {
        const { a, b, operation } = data;
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                this.logger.log('Operation not supported');
                return null;
        }
    }

    private add(a: number, b: number): number {
        return a + b;
    }

    private subtract(a: number, b: number): number {
        return a - b;
    }

    private multiply(a: number, b: number): number {
        return a * b;
    }

    private divide(a: number, b: number): number {
        return a / b;
    }
}
