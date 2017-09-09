import Resource from "../util/Resource";
import { CategoryInfo } from "../entity/CategoryInfo";

export default class CompCategory {
    static async getData(category: string) {
        let res = await Resource.getCategoryInfo(category);
        return {
            category: category,
            series: res.series,
            week: res.week
        }
    }
}