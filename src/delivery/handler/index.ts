import { Context } from 'aws-lambda';
import UploadImage from '../../domain/usecase/upload-user-picture';
import { S3Error } from '../../domain/execption/s3-error';

export default async (event: any, context?: Context) => {
    console.log('event', event.userId);
    try {
        const url = await UploadImage.execute(event.userId, event.file);

        return {
            statusCode: 200,
            body: JSON.stringify({ url })
        }
    }
    catch (error) {
        if(error instanceof S3Error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ message: error.message })
            }
        }
    }
}