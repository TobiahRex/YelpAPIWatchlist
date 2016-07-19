const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const s3 = new AWS.S3();
const bucketName = process.env.AWS_BUCKET;
const urlBase = process.env.AWS_URL_BASE;
const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  name: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
});

imageSchema.statics.upload = (file, cb) => {
  const File = file;
  if (!File.mimetype.match('/image/')) cb({ error: 'File must be an image.' });
};

const fileNameParts = File.orginalName.split('.');

let ext;
if (fileNameParts.length > 1) {
  ext = `.${fileNameParts.pop()}`;
} else {
  ext = '';
}

const key = uuid() + `${ext}`;
const params = {
  Bucket: bucketName,
  Key: key,
  ACL: 'public-read',
  Body: File.buffer
};

s3.putObject(params, (err, result) => {
  if (err) return cb(err);

  const imgUrl.........................
})

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
