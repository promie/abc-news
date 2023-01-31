export interface IName {
  first: string;
  full: string | undefined;
  last: string;
}

export interface IContributor {
  canonicalURL?: string;
  id?: string;
  names?: IName;
  role?: string;
}

export interface ISource {
  source: string;
  sourceURL: string;
}

export interface IDates {
  displayPublished?: string;
  displayUpdated?: string;
  published: string;
  updated?: string;
}

export interface IParameters {
  [key: string]: string;
}

export interface IText {
  type: string;
  tagname?: string;
  parameters?: IParameters;
  children?: any;
  content?: string;
}
