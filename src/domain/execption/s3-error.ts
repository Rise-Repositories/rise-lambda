export class S3Error extends Error {
    private statusCode: number = 500;
    constructor(message: string) {
        super(message);
    }
}