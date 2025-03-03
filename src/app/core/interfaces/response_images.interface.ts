export interface IResponseImages {
    total: number,
    totalHits: number,
    hits: IResponseHits[]
}

export interface IResponseHits {

    pageURL: string,
    previewURL: string,
    previewWidth: number,
    previewHeight: number,
    webformatURL: string,
    webformatWidth: number,
    webformatHeight: number,
    largeImageURL: string,
    imageWidth: number,
    imageHeight: number,
}