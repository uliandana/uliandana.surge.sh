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
    prevTitle: string;
    prevTitleEncoded: string;
    nextTitle: string;
    nextTitleEncoded: string;

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
        this.prevTitle = obj.prevTitle;
        this.prevTitleEncoded = obj.prevTitleEncoded;
        this.nextTitle = obj.nextTitle;
        this.nextTitleEncoded = obj.nextTitleEncoded;
    }

    getIssue(name: string) {
        return this.issues.find(item => { return item.nameEncoded == name; });
    }
}