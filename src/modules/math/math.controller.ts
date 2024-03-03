import { Controller } from '@nestjs/common';
import {
    Ctx,
    MessagePattern,
    Payload,
    MqttContext,
} from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MathController {
    constructor(private readonly mathService: MathService) {}

    @MessagePattern('math-topic')
    getNotifications(
        @Payload() data: string,
        @Ctx() context: MqttContext,
    ): number {
        return this.mathService.getNotifications({
            data: data,
            context: context,
        });
    }
}
