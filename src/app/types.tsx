export type Variant = {
  isbn: string;
  format: 'a5' | 'a4' | 'a3' | 'a2' | 'a2p' | 'fam';
  price: number;
  amazon: string;
  thalia: string;
};

export type Archive = {
  year: number;
  id: string;
  variants: Variant[];
};

export type Product = {
  id: string;
  archive?: Archive[];
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  orientation: 'portrait' | 'landscape';
  adultContent: boolean;
  placeholder?: string;
  published: string;
  year: number;
  note?: string;
  sales: number;
  variants: Variant[];
};

export type LinkType = {
  title: string;
  href: string;
  label?: string;
};

export type Footer = {
  copyright: LinkType;
  developer: LinkType;
  links: LinkType[];
};

export type SharingButton = {
  title: string;
  href: string;
  description: string;
  icon: any;
};

export type CookieConsent = {
  heading: string;
  text: string[];
  privacyPolicyText: string;
  privacyPolicy: string;
  privacyPolicyUrl: string;
  accept: string;
  decline: string;
};

export type InfoBoxProps = {
  ariaLabel: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    placeholder: string;
  };
  heading: string;
  text: string;
  contact: {
    heading: string;
    links: LinkType[];
  };
};

export type TextPage = {
  heading: string;
  text: string[];
};
