interface strapiImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: unknown | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface strapiImage {
  id: number;
  documentId: number;
  name: number;
  alternativeText: unknown | null;
  caption: unknown | null;
  width: number;
  height: number;
  formats: {
    large: strapiImageFormat;
    small: strapiImageFormat;
    medium: strapiImageFormat;
    thumbnail: strapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  previewUrl: unknown | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
