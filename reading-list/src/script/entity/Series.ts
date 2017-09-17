import Issue from "./Issue";

export default class Series {
    title: string;
    titleEncoded: string;
    status: "ongoing" | "completed" | "incomplete";
    startDate: string;
    endDate: string;
    totalIssues: number;
    page: number;
    totalPages: number;
    issuesThisPage: number;
    issues: Issue[];

    constructor(obj: any) {
        this.title = obj.title;
        this.titleEncoded = obj.titleEncoded;
        this.status = obj.status;
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;
        this.totalIssues = obj.totalIssues;
        this.page = obj.page;
        this.totalPages = obj.totalPages;
        this.issuesThisPage = obj.issuesThisPage;
        this.issues = obj.issues.map(item => { return new Issue(item); });
    }

    getIssue(name: string) {
        return this.issues.find(item => { return item.nameEncoded == name; });
    }
}