import Util from "../util/Util";

const srcUrl: string = Util.assetsUrl;
export default class Issue {
    name: string;
    nameEncoded: string;
    title: string;
    titleEncoded: string;
    date: string;
    images: Images;

    constructor(obj: any) {
        this.name = obj.name;
        this.nameEncoded = Util.textEncode(obj.name);
        this.title = obj.title;
        this.titleEncoded = Util.textEncode(obj.title);
        this.date = obj.date;
        this.images = new Images(obj.images);
    }
}

export class Images {
    lg: string;
    md: string;
    sm: string;
    xs: string;

    constructor(obj: any) {
        this.lg = `${srcUrl}/${obj.lg}`;
        this.md = `${srcUrl}/${obj.md}`;
        this.sm = `${srcUrl}/${obj.sm}`;
        this.xs = `${srcUrl}/${obj.xs}`;
    }
}