import { generateComponents } from "@uploadthing/react";
// import { FileRouter } from '../../node_modules/uploadthing/internal/types.d.js';

import type { OurFileRouter } from "@/app/api/uploadthing/core";

type useUploadThing = (mediaType: string) => {
  startUpload: (files: File[]) => Promise<any>;
};
export const { UploadButton, UploadDropzone } =  generateComponents<OurFileRouter>();

export type { useUploadThing };