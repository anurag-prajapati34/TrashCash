// This file is used to configure Cloudinary for image uploads
const cloudinary = require("cloudinary").v2;
const CLOUD_NAME="dce2b9h8n"
const API_KEY="786266577597529"
// const API_SECRET_KEY=process.env.CLOUDINARY_API_SECRET
const API_SECRET_KEY="YyiTEF55vDQiTm53ZurB9jzMM-4"


cloudinary.config({
    cloud_name:CLOUD_NAME,
    api_key:API_KEY,
    api_secret:API_SECRET_KEY,
  })

module.exports=cloudinary