import Resource from "../util/Resource";
import Week from "../entity/Week";

export default class CompWeek {
    static async getData(category: string, date: string) {
        return await Resource.getWeekData(category, date);
    }
}