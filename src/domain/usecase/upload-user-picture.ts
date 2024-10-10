import { S3Error } from "../execption/s3-error";
import S3Helper from "../../integration/helper/s3-helper";

class UploadUserPicture {
  async execute(userId: string, file: string): Promise<string> {
    console.log('userId', userId);
    try {
        const fileUrl = await S3Helper.uploadFile(userId, file);

        console.log(fileUrl);

        return fileUrl
    } catch (error) {
        throw new S3Error('Error uploading');
    }
  }
}

export default new UploadUserPicture();