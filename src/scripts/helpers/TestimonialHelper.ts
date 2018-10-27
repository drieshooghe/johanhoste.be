export class Image {
    title: string;
    path: string;
    id: string;
    lowResPath: string;
    constructor(imageData: any) {
        this.title = imageData['title'] || '';
        this.path = imageData['path'] || '';
        this.id = imageData['id'] || '';
        this.lowResPath = '';
    }

    getTitle() {
        return this.title;
    }
    getPath() {
        return this.path;
    }
    getId() {
        return this.id;
    }
    setLowResPath(path: string) {
        this.lowResPath = path;
    }
    getLowResPath() {
        return this.lowResPath;
    }
}

export class ImageCollection {
    collection: Image[] = [];

    constructor(imagesData: any) {
        if (imagesData !== null) {
            Object.keys(imagesData).forEach((key) => {
                let title = '';
                let id = '';
                if (imagesData[key]['meta'] !== undefined) {
                    title = imagesData[key]['meta']['title'];
                    id = imagesData[key]['meta']['asset'];
                }
                let path = imagesData[key]['path'] || '';
                this.collection.push(
                    new Image({ 'title': title, 'path': path, 'id': id })
                );
            });
        }
    }

    getImages() {
        return this.collection;
    }
}

export class Testimonial {
    name: string;
    content: string;
    images: ImageCollection;
    constructor(testimonialData: any) {
        this.name = testimonialData['name'] || '';
        this.content = testimonialData['testimonial'] || '';
        this.images = new ImageCollection(testimonialData['images'] || null);
    }
    getName() {
        return this.name;
    }
    getContent() {
        return this.content;
    }
    getImageCollection() {
        return this.images;
    }
}


export class TestimonialCollection {
    collection: Testimonial[] = [];
    constructor(testimonialCollectionData: any) {
        Object.keys(testimonialCollectionData).forEach((key) => {
            this.collection.push(
                new Testimonial(testimonialCollectionData[key])
            );
        });
    }

    getTestimonials() {
        return this.collection;
    }
}