import { fetchUsers } from "../index.js";
import { expect } from "chai";
import fetch from "node-fetch";
import sinon from "sinon";

global.fetch = fetch

describe("Запрос на сервер", function(){
   it("Сравнение с моковыми пользователями",async function() {
    const mockUser = [
        {}, {}
    ]
    let fetchStub = sinon.stub(global, "fetch").resolves({
        ok: true,
        json: async () => mockUser
    })
    const users = await fetchUsers()
    expect(fetchStub.calledOnce).to.be.true

    expect(users).to.deep.equal(mockUser)
   })
})