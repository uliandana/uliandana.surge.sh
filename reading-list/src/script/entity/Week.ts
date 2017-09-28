import Issue from "./Issue";

export default class Week {
    date: string;
    totalIssues: number;
    issues: Issue[];
    prevDate: string;
    nextDate: string;

    constructor(obj: any) {
        this.date = obj.date;
        this.totalIssues = obj.totalIssues;
        this.issues = obj.issues.map(item => { return new Issue(item); });
        this.prevDate = obj.prevDate;
        this.nextDate = obj.nextDate;
    }
}