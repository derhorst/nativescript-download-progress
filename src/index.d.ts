import * as fs from "tns-core-modules/file-system";

export declare class DownloadProgress {
    constructor();
    addProgressCallback(callback: any);
    downloadFile(url: string, destinationFilePath?: string, headers?: {[key:string]: string}): Promise<fs.File>;
}
