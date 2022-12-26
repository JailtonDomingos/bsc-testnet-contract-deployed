//Testing on ganache config.

const ChangeName = artifacts.require("ChangeName")

contract("ChangeName", (Accounts) => {

    it("Name empty", async () => {

        let instance = await ChangeName.deployed();

        assert(instance, "Contract not migrated!")

    })

    
})