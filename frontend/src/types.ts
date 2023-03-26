export interface ResourceCard {
  name: string;
  image: any;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  twitter: string;
};

export type ChangeEvent = React.ChangeEvent<HTMLInputElement> 

export interface ContactField {
  label: string;
  id: string;
  fieldNum: number;
  multiline: boolean;
  rows: number;
}
