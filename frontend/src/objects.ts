/* Types */
import { ContactField, ResourceCard } from './types';
/* Images */
import gbLogo from './images/resourceLogos/gbf_logo.png';
import sowfLogo from './images/resourceLogos/sowf_logo.png';
import msofcLogo from './images/resourceLogos/msofc_logo.png';
import wwpLogo from './images/resourceLogos/wwp_logo.png';
import oneSourceLogo from './images/resourceLogos/one_source_logo.png';
import blueGlobeIcon from './images/resourceLogos/blue_globe_icon.png';

export enum ContactEnum {
  First = 1,
  Last,
  Email,
  Phone,
  Org,
  Msg,
};

export const ContactForm: ContactField[] = [
  {
    label: 'First Name',
    id: 'first-name-field',
    fieldNum: ContactEnum.First,
    multiline: false,
    rows: 1
  },
  {
    label: 'Last Name',
    id: 'last-name-field',
    fieldNum: ContactEnum.Last,
    multiline: false,
    rows: 1
  },
  {
    label: 'Email Address',
    id: 'email-field',
    fieldNum: ContactEnum.Email,
    multiline: false,
    rows: 1
  },
  {
    label: 'Phone Number',
    id: 'phone-field',
    fieldNum: ContactEnum.Phone,
    multiline: false,
    rows: 1
  },
  {
    label: 'Organization / Unit',
    id: 'org-field',
    fieldNum: ContactEnum.Org,
    multiline: false,
    rows: 1
  },
  {
    label: 'Message...',
    id: 'msg-field',
    fieldNum: ContactEnum.Msg,
    multiline: true,
    rows: 4
  }
];


export const generalResources: ResourceCard[] = [
  {
    name: 'Green Beret Foundation',
    image: gbLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://greenberetfoundation.org/',
    facebook: 'https://www.facebook.com/GreenBeretFoundation/',
    twitter: 'twitter link',
  },
  {
    name: 'Special Operations Warrior Foundation',
    image: sowfLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://specialops.org/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Wounded Warrior Project',
    image: wwpLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://www.woundedwarriorproject.org/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Military Special Operations Family Collaborative',
    image: msofcLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://msofc.org/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Military One Source',
    image: oneSourceLogo,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: 'https://www.militaryonesource.mil/',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Organization Alpha',
    image: blueGlobeIcon,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: '',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Organization Beta',
    image: blueGlobeIcon,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: '',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Organization Charlie',
    image: blueGlobeIcon,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: '',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Organization Delta',
    image: blueGlobeIcon,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: '',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
  {
    name: 'Organization Echo',
    image: blueGlobeIcon,
    phone: '910-396-0001',
    email: 'emailresourcename@gmail.com',
    website: '',
    facebook: 'facebook link',
    twitter: 'twitter link',
  },
];