import { S3 } from '@aws-sdk/client-s3';
import { PROPERTIES } from '../../application/config/properties';

class S3Helper{ 
    constructor(private s3Client = new S3()) {}

    async uploadFile(fileName: string, file: any): Promise<string> {
        const base64Data =  Buffer.from(file.replace(/^data:\w+\/[a-zA-Z+\-.]+;base64,/, ''), 'base64');
        const type = file.split(';')[0].split('/')[1];

        const params = {
            Bucket: PROPERTIES.BUCKET_NAME,
            Key: `${fileName}.${type}`,
            Body: base64Data,
            ContentEncoding: 'base64'
        };
        return new Promise((resolve, reject) => {
            this.s3Client.putObject(params, (err: any, data: any) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}

export default new S3Helper()