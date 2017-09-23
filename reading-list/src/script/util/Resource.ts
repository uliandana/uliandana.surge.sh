import Axios from "axios";
import Util from "../util/Util";
import { CategoryInfo } from "../entity/CategoryInfo";
import Series from "../entity/Series";
import Week from "../entity/Week";
import Issue from "../entity/Issue";

const srcUrl: string = Util.assetsUrl;
export default class Resource {
    static async getCategoryInfo(category:string) {
        let res = await Resource.axiosRequest(`${srcUrl}/${category}/data/info.json`);
        return new CategoryInfo(res);
    }

    static async getSeriesData(category:string, title:string, page: string) {
        let res = await Resource.axiosRequest(`${srcUrl}/${category}/data/series/${title}-${page}.json`);
        return new Series(res);
    }

    static async getWeekData(category:string, date:string) {
        let res = await Resource.axiosRequest(`${srcUrl}/${category}/data/week/${date}.json`);
        return new Week(res);
    }

    static async getLatestIssuesData() {
        let res = await Resource.axiosRequest(`${srcUrl}/latest-issues.json`);
        let retval: Issue[] = res.data.map(item => { return new Issue(item); });
        return retval;
    }

    static async axiosRequest(url:string) {
        let spinner = document.getElementById("spinnerOverlay");
        spinner.style.display = "block";
        let res = await Axios.get(url);
        Util.scrollToTop();
        spinner.style.display = "none";
        if (res.data) return res.data;
        else return null;
    }
}