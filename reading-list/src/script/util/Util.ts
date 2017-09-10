export default class Util {
    static assetsUrl: string = "http://127.0.0.1:8090";

    static textEncode(text: string) {
        return text.toLowerCase().replace(/[^0-9A-Za-z\-\s]/g, '').replace(/\-/g, ' ').replace(/\s+/g, '-').replace(/\-$/g, '');
    }
}