import Series from "./Series"

export class CategoryInfo {
    category: string;
    series: InfoSeries[];
    week: InfoWeek[];

    constructor(obj) {
        this.category = obj.category;
        this.series = obj.series;
        this.week = obj.week;
    }
}

export class InfoSeries {
    title: string;
    titleEncoded: string;
    status: string;
    startDate: string;
    endDate: string;
    totalIssues: number;

    constructor(obj: any) {
        this.title = obj.title;
        this.titleEncoded = obj.titleEncoded;
        this.status = obj.status;
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;
        this.totalIssues = obj.totalIssues;
    }
}

export class InfoWeek {
    year: string;
    months: { month: string; dates: string[] }[];

    constructor(obj: any) {
        this.year = obj.year;
        this.months = obj.months;
    }
}

