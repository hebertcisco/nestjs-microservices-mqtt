import { configService } from 'nest-shared';

export const PORT = configService.getPort() || 4000;
export const NODE_ENV: string = configService.getEnvironment();

export const MQTT_URL: string = configService.getValue('MQTT_URL', true);
