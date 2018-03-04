const Apollo = artifacts.require("./Apollo.sol");

module.exports = function(deployer) {
    deployer.deploy(Apollo);
}
