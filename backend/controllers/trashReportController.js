
const cloudinary=require("../config/cloudinary");
const TrashReportModel = require("../models/trashReport");
const fs = require("fs");

exports.reportTrashController = async (req, res) => {
  const { name, address, description, city, state, zip, latitude, longitude ,userAuthId} = req.body;
  const files = req.files;

  if (!files || !files["trashimage"]) {
    return res.status(400).json({ error: "No image provided" });
  }

  try {
    const trashimage = files["trashimage"][0];

    const thumbnailImageResult = await cloudinary.uploader.upload(trashimage.path, {
      folder: "TrashImages",
    });

    fs.unlinkSync(trashimage.path); // delete local file

    const trashImageCloudinaryUrl = thumbnailImageResult.secure_url;

    console.log("Image uploaded successfully:", trashImageCloudinaryUrl);

    await TrashReportModel.create({
      userAuthId:userAuthId,
      name,
      address,
      description,
      city,
      state,
      zip,
      latitude,
      longitude,
      imageUrl: trashImageCloudinaryUrl,
    });

    return res.status(200).json({ success: "Successfully trash reported" });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.getTrashReports = async (req, res) => {
  const {uid}=req.query;
  console.log("uid ::",uid);
  if (!uid) {
    return res.status(400).json({ error: "User ID is required" });
  }
  try {
    const reports = await TrashReportModel.find({userAuthId:uid});
    console.log("fetche reports")
    return res.status(200).json({"reports":reports});
  } catch (error) {
    console.error("Error fetching reports:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
