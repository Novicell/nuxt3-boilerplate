export interface Block {
  alias: string;
  content?: any;
}

export interface ContentResponseContent {
  blocks: Block[];
}

export interface Metadata {
  statusCode: number;
  redirectUrl: null;
  path: string;
}

export interface ContentResponse {
  alias: string;
  content: ContentResponseContent;
  metadata: Metadata;
}
