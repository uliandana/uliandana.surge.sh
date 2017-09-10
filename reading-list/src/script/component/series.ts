import Resource from "../util/Resource";
import Series from "../entity/Series";

export default class CompSeries {
    static async getData(category: string, title: string, page: string) {
        return await Resource.getSeriesData(category, title, page);
    }
}