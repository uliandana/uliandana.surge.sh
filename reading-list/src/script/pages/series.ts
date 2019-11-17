import Resource from "../util/Resource";
import Series from "../entity/Series";

export default class CompSeries {
    static async getData(category: string, title: string, page: string) {
        return await Resource.getSeriesData(category, title, page);
    }

    static setPagination(page: number, totalPages: number) {
        let retval: { isEllips: boolean, number: string, isCurrent: string }[] = [];
        if (totalPages <= 5) {
            for (let idx = 1; idx <= totalPages; idx++) {
                retval.push({
                    isEllips: false,
                    number: idx.toString(),
                    isCurrent: idx == page ? "is-current" : ""
                });
            }
        } else {
            retval.push({
                isEllips: false,
                number: "1",
                isCurrent: page == 1 ? "is-current" : ""
            });
            if (page <= 3) {
                retval.push({
                    isEllips: false,
                    number: "2",
                    isCurrent: page == 2 ? "is-current" : ""
                });
                retval.push({
                    isEllips: false,
                    number: "3",
                    isCurrent: page == 3 ? "is-current" : ""
                });
            }
            if (page == 3) {
                retval.push({
                    isEllips: false,
                    number: "4",
                    isCurrent: ""
                });
            }

            retval.push({
                isEllips: true,
                number: "",
                isCurrent: ""
            });

            if (page > 3 && page < totalPages - 2) {
                retval.push({
                    isEllips: false,
                    number: (page - 1).toString(),
                    isCurrent: ""
                });
                retval.push({
                    isEllips: false,
                    number: page.toString(),
                    isCurrent: "is-current"
                });
                retval.push({
                    isEllips: false,
                    number: (page + 1).toString(),
                    isCurrent: ""
                });
            }

            if (!retval[retval.length - 1].isEllips) {
                retval.push({
                    isEllips: true,
                    number: "",
                    isCurrent: ""
                });
            }
            
            if (page == totalPages - 2) {
                retval.push({
                    isEllips: false,
                    number: (totalPages - 3).toString(),
                    isCurrent: ""
                });
            }
            if (page >= totalPages - 2) {
                retval.push({
                    isEllips: false,
                    number: (totalPages - 2).toString(),
                    isCurrent: page == totalPages - 2 ? "is-current" : ""
                });
                retval.push({
                    isEllips: false,
                    number: (totalPages - 1).toString(),
                    isCurrent: page == totalPages - 1 ? "is-current" : ""
                });
            }
            retval.push({
                isEllips: false,
                number: totalPages.toString(),
                isCurrent: page == totalPages ? "is-current" : ""
            });
        }
        return retval;
    }
}