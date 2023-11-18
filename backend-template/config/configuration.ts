import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default () => {
    return yaml.load(
        readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
    ) as Record<string, any>;
};

export const cars = () => {
    return {
        cars:[
            ['alpha','https://divar.ir/s/tehran/car/alfa-romeo/4c'],

        ]
    }
}