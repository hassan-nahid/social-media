import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (fileStr, folderName = "user_profiles") => {
    try {
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            folder: folderName,
        });
        return uploadedResponse.secure_url;
    } catch (error) {
        throw new Error("Cloudinary upload failed");
    }
};
