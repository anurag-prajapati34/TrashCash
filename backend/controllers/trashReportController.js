
exports.reportTrashController = async (req, res) => {
    
  console.log("req body:", req.body);
  const { name , imageUrl, address, description ,city,state,zip} = req.body;

  //upload image to cloudinary

  const files = req.files;
  console.log("file::::", req.files);

  if (files) {
    console.log("entereed to if bloack")
    try {
      const trashimage = req.files["trashimage"][0];

      ///geting cloudinary url for thumbnail image
      const thumbnailImageResult = await cloudinary.uploader.upload(
        trashimage.path,
        {
          folder: "TrashImages",
        },
        (error, result) => {
          fs.unlinkSync(trashimage.path);
          if (error) {
            return res.status(500).json({ "cloudinaryErro:": error });
          }
        }
      );
      const trashImageCloudinaryUrl = trashImageCloudinaryUrl.secure_url;

      ///geting cloudinary url for extraimages

      ////adding data to databse

      if (trashImageCloudinaryUrl) {
        const result = await ProductModel.create({
         

            name: name,
            address: address,
            description: description,
            city: city,
            state: state,
            zip: zip,
            imageUrl: trashImageCloudinaryUrl,
         
        })
          .then((result) => {
            return res.json({"success":"Successfully trash reported"});
          })
          .catch((error) => {
            return res.json({"mongoDB error:": error});
          });
      }
    } catch (error) {
      console.log("errorr rr:",error)
      return res.status(500).json({ Error: "Error uploading to cloudinary" });
    }
  } else {
    return res.json({ Error: "File not found" });
  }
};