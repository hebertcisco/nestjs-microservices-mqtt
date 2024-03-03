import { Injectable } from '@nestjs/common';
import { AppServiceInterface } from 'nest-shared';
import packageJson from '../../package.json';

@Injectable()
export class AppService {
    async info(): Promise<AppServiceInterface> {
        return {
            name: packageJson.name,
            version: packageJson.version,
            status: 'online',
            date: new Date(),
            environment: process.env.NODE_ENV,
            aws: {
                region: process.env.AWS_REGION,
            },
        };
    }
}
