const {  cloudinary } = require('../config/cloudinaryConfig'); 
const multer = require('multer');  
const path = require('path');
const sharp = require('sharp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, 'LoafOfLife_' +Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } }); 


const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const filePath = req.file.path.replace(/\\/g, '/'); 
 
  
  sharp(filePath)
  .resize(800)  
  .toFormat('jpeg') 
  .jpeg({ quality: 80 }) 
  .toBuffer()  
  .then((buffer) => {
    cloudinary.uploader.upload_stream(
      { folder: 'LoafOfLife' },  
      (error, result) => {
        if (error) {
          console.log('Error uploading image:', error);
          return res.status(500).json({ message: 'Error uploading image', error });
        }
        console.log('Uploaded to Cloudinary:', result.secure_url);
        return res.status(200).json({
          message: 'Image uploaded successfully',
          imageUrl: result.secure_url
        });
      }
    ).end(buffer); 
  })
};


module.exports = { upload, uploadImage };
