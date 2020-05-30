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

const TopClientSchema = new Schema({
    company_name: {
        type: Schema.Types.String
    }
});

TopClientDetail = mongoose.model("top_client_detail", TopClientSchema);

module.exports = TopClientDetail;
