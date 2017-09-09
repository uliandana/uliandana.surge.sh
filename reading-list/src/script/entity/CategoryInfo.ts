import Series from "./Series"

export class CategoryInfo {
    series: InfoSeries[];
    week: InfoWeek[];

    constructor(obj) {
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
    year: number;
    month: number;
    date: number;

    constructor(obj: any) {
        this.year = obj.year;
        this.month = obj.month;
        this.date = obj.date;
    }
}

