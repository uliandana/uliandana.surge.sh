import Issue from "./Issue";

export default class Week {
    date: string;
    totalIssues: number;
    issues: Issue[];

    constructor(obj: any) {
        this.date = obj.date;
        this.totalIssues = obj.totalIssues;
        this.issues = obj.issues.map(item => { return new Issue(item); });
    }
}