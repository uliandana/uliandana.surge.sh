import Resource from "../util/Resource";
import { CategoryInfo } from "../entity/CategoryInfo";

export default class CompCategory {
    static async getData(category: string) {
        let res = await Resource.getCategoryInfo(category);
        let retval = {
            category: res.category,
            series: res.series,
            week: res.week,
            select: {
                year: res.week[res.week.length - 1].year,
                month: res.week[res.week.length - 1].months[res.week[res.week.length - 1].months.length - 1].month,
                date: res.week[res.week.length - 1].months[res.week[res.week.length - 1].months.length - 1].dates[res.week[res.week.length - 1].months[res.week[res.week.length - 1].months.length - 1].dates.length - 1]
            },
            options: {
                months: [],
                dates: []
            },
            weekTarget: ""
        }
        retval.options.months = CompCategory.getMonthsByYear(retval.select.year, retval.week);
        retval.options.dates = CompCategory.getDatesByMonth(retval.select.month, retval.options.months);
        retval.weekTarget = `${retval.select.year}-${retval.select.month}-${retval.select.date}`
        return retval;
    }

    static getMonthsByYear(year: string, weekInfos: any[]): string[] {
        return weekInfos.find(item => { return item.year == year; }).months;
    }

    static getDatesByMonth(month: string, months: any[]): string[] {
        return months.find(item => { return item.month == month; }).dates;
    }
}