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
                let prefix = key.split('_')[0];
                let type = key.split('_')[1];
                if (results[prefix] == undefined) { results[prefix] = [] };
                results[prefix][type] = pageData[key].toString();
            }
        });
        for (let i in results) {
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

export class Info {
    meta: any = { 'title': '', 'description': '' };
    contact: any = { 'name': '', 'street': '', 'no': 0, 'zipcode': 0, 'place': '', 'phonenumber': '', 'email': '', 'vatcode': '', 'directionsurl': '' }
    constructor(data: any) {
        this.meta = [{ 'title': data.metatitle || '', 'description': data.metadescription || '' }];
        this.contact = [{
            'name': data.name || '',
            'street': data.street || '',
            'no': data.no || '',
            'zipcode': data.zipcode || '',
            'place': data.place || '',
            'phonenumber': data.phoneno || '',
            'email': data.email || '',
            'vatcode': data.vatno || '',
            'directionsurl': data.directionsurl || ''
        }]
    }
    getMetaInfo(handle: any) {
        return this.meta[0][handle];
    }
    getContactInfo(handle: any) {
        return this.contact[0][handle];
    }
}