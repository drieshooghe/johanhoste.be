export class Page {
    handle: string;
    title: string;
    content: string;
    constructor(data: any) {
        this.handle = data['handle'] || '';
        this.title = data['title'] || '';
        this.content = data['content'] || '';
    }
    getHandle() {
        return this.handle || '';
    }
    getTitle() {
        return this.title || '';
    }
    getContent() {
        return this.content || '';
    }
}
export class PageCollection {
    collection: Page[] = [];

    constructor(pageData: any) {
        let results: any = [];
        Object.keys(pageData).forEach((key) => {
            if (key.indexOf('_') > 1) {
                console.log(key)
                let prefix = key.split('_')[0];
                let type = key.split('_')[1];
                if (results[prefix] == undefined) { results[prefix] = [] };
                results[prefix][type] = pageData[key].toString();
            }
        });
        console.log(results);
        for (let i in results) {
            console.log(results[i]);
            this.collection.push(new Page(results[i]));
        }
    }

    addPage(page: Page) {
        this.collection.push(page);
    }
    getPage(handle: string) {
        for (let p of this.collection) {
            if (p.getHandle() == handle) {
                return p;
            }
        }
    }
}