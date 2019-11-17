import Resource from "../util/Resource";

const randIntArray = require("random-int-array");

export default class CompHome {
    static async getData() {
        let res = await Resource.getLatestIssuesData();
        let randIndex = randIntArray({ count: 4, max: res.length, unique: true });
        let retval = randIndex.map(item => { return res[item]; });
        return retval;
    }
}