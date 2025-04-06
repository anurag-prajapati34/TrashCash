const multer=require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {

      console.log("file we geting ;",file);
      
      cb(null, "uploads/"); // Folder to store images temporarily
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
      );
    },
  });
  
  const upload = multer({ storage: storage });
  const uploadImage=upload.fields([
    { name: "trashimage", maxCount: 1 },
    
  ])

  module.exports= uploadImage