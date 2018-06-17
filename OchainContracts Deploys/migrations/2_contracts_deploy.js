
var TrackerProduct = artifacts.require("./TrackerProduct.sol");

module.exports = function(deployer) {
  deployer.deploy(TrackerProduct);
};
