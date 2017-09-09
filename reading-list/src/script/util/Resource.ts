import Axios from "axios";
import { CategoryInfo } from "../entity/CategoryInfo";

const srcUrl = "http://127.0.0.1:8090";
export default class Resource {
    static async getCategoryInfo(category:string) {
        let res = await Resource.axiosRequest(`${srcUrl}/${category}/data/info.json`);
        return new CategoryInfo(res);
    }

    static async getSeriesData(category:string, title:string) {
        return await Resource.axiosRequest(`${srcUrl}/${category}/data/series/${title}.json`);
    }

    static async getWeekData(category:string, date:string) {
        return await Resource.axiosRequest(`${srcUrl}/${category}/data/week/${date}.json`);
    }

    static async axiosRequest(url:string) {
        let res = await Axios.get(url);
        if (res.data) return res.data;
        else return null;
    }
}