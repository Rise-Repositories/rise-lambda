import * as fs from 'fs';
import * as path from 'path';
import h from './src/delivery/handler/index';

const imagePath = path.join(__dirname, 'a.png');
const imageBase64 = fs.readFileSync(imagePath, 'base64');

h({
    userId: '123',
    file: imageBase64
}, undefined)