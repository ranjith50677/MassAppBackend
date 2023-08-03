import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: "demxjipir",
  api_key: "727426195897489",
  api_secret: "3UPENJ1yoLlB87pLUWAz_3mPXlw",
  secure: true,
});

export default cloudinary;
