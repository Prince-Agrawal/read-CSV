const csv = require("csvtojson");
const _ = require("lodash");
const mongoose = require("mongoose");
const RecruiterCommanDetail = require("./RecruiterCommanDetails");
const TopClientDetail = require('./TopClient');

const csvFilePath = "companyData.csv";

csv()
  .fromFile(csvFilePath)
  .then(async (jsonArray) => {
    const companyList = _.map(jsonArray, "Top % clients");
    // console.log(companyList);
    // const companyObj = companyList.map(companyName => {
    //     return {company_name: companyName}
    // })
    const companyObj = {
      company_name: companyList,
    };
    console.log(companyObj);
    try {
      await RecruiterCommanDetail.insertMany(companyObj);
      console.log("done");
    } catch (e) {
      console.log(e);
    }
  });
