const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const pictureSchema = new Schema({
  pic_path: String,
  pic_name: String,
	user: { type: Schema.Types.ObjectId, ref: 'User' },
  secret: { type: Schema.Types.ObjectId, ref: 'Secret' },
  profile: {type: Boolean,
    default: false}
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

var Picture = mongoose.model("Picture", pictureSchema);
module.exports = Picture;
