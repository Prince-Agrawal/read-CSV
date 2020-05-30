const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(
  "mongodb://127.0.0.1:27017/auth",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongoose connected...");
  }
);

const RecruiterCommanDetailSchema = new Schema({
  FAQ_url: {
    type: Schema.Types.String,
  },

  company_name: {
    type: [Schema.Types.String],
  },
});

RecruiterCommanDetail = mongoose.model(
  "recruiter_comman_detail",
  RecruiterCommanDetailSchema
);

module.exports = RecruiterCommanDetail;
