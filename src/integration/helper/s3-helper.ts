import { S3 } from '@aws-sdk/client-s3';
import { PROPERTIES } from '../../application/config/properties';

class S3Helper{ 
    constructor(private s3Client = new S3()) {}

    async uploadFile(fileName: string, file: any): Promise<string> {
        const params = {
            Bucket: PROPERTIES.BUCKET_NAME,
            Key: fileName,
            Body: file
        };
        return new Promise((resolve, reject) => {
            this.s3Client.putObject(params, (err: any, data: any) => {
                console.log('err', err);
                if (err) {
                    reject(err);
                }
                console.log('data', data);
                resolve(data);
            });
        });
    }
}

export default new S3Helper()