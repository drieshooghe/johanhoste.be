class Content {
    rawData: any;
    constructor(apiResponse: object) {
        this.rawData = apiResponse;
    }
}

export class Page extends Content {
    pages: any;
    constructor(apiResponse: object) {
        super(apiResponse);
        this.pages = this.rawData.entries;
    }
    getPage(handle: string) {
        this.pages.find((p: any) => {
            console.log(p);
            if (p.handle == handle) {
                return p;
            }
        });
    }
}

export class General extends Content {
    constructor(apiResponse: object) {
        super(apiResponse);
    }
}