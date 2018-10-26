export class Image {
    title: string;
    path: string;
    constructor(imageData: any) {
        this.title = imageData['title'] || '';
        this.path = imageData['path'] || '';
    }

    getTitle() {
        return this.title;
    }

    getPath() {
        return this.path;
    }
}

export class ImageCollection {
    collection: Image[] = [];

    constructor(imagesData: any) {
        if(imagesData !== null){
        Object.keys(imagesData).forEach((key) => {
                let title = imagesData[key]['meta']['title'] || '';
                let path = imagesData[key]['path'] || '';
                this.collection.push(
                    new Image({ 'title': title,'path': path})
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
        this.name = testimonialData['handle'] || '';
        this.content = testimonialData['title'] || '';
        this.images = new ImageCollection(testimonialData['images'] || null);
    }
    getName() {
        return this.name;
    }
    getContent() {
        return this.content;
    }
    getImages() {
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