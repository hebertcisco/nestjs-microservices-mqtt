import type { MqttContext } from '@nestjs/microservices';

export interface ICalculateData {
    a: number;
    b: number;
    operation: string;
}
export class GetNotificationsDto {
    data: string;
    context: MqttContext;
}
