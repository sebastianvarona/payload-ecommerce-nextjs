/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    products: Product;
    categories: Category;
    orders: Order;
    pages: Page;
    articles: Article;
    media: Media;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'customer')[];
  purchases?: string[] | Product[];
  stripeCustomerID?: string;
  cart?: {
    items?: {
      product?: string | Product;
      variant?: string;
      quantity?: number;
      id?: string;
    }[];
  };
  skipSync?: boolean;
  updatedAt: string;
  createdAt: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Product {
  id: string;
  title: string;
  detail?: string;
  variants?: {
    name: string;
    id?: string;
  }[];
  attributes?: {
    name: string;
    value: string;
    id?: string;
  }[];
  publishedDate?: string;
  layout: (
    | {
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        backgroundColor?: 'white' | 'black';
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        title: string;
        limit?: number;
        categories?: string[] | Category[];
        populatedProducts?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        populatedProductsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'relatedProducts';
      }
  )[];
  stripeProductID?: string;
  priceJSON?: string;
  paywall?: (
    | {
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        backgroundColor?: 'white' | 'black';
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products' | 'articles';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'products';
                }
              | {
                  value: string;
                  relationTo: 'articles';
                }
            )[]
          | (
              | {
                  value: Product;
                  relationTo: 'products';
                }
              | {
                  value: Article;
                  relationTo: 'articles';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'products';
                }
              | {
                  value: string;
                  relationTo: 'articles';
                }
            )[]
          | (
              | {
                  value: Product;
                  relationTo: 'products';
                }
              | {
                  value: Article;
                  relationTo: 'articles';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  categories?: string[] | Category[];
  slug?: string;
  skipSync?: boolean;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Page {
  id: string;
  title: string;
  publishedDate?: string;
  hero: {
    type: 'highImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media?: string | Media;
  };
  layout: (
    | {
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        backgroundColor?: 'white' | 'black';
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        hasLinks?: boolean;
        title: {
          [k: string]: unknown;
        }[];
        side?: 'left' | 'right';
        richText: {
          [k: string]: unknown;
        }[];
        link: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        image: string | Media;
        imageHasDescription?: boolean;
        imageContent?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'ctaWithImage';
      }
    | {
        richText: {
          [k: string]: unknown;
        }[];
        images?: {
          image: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'imageContentCollage';
      }
    | {
        images?: {
          image: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'imageGrid';
      }
    | {
        infoGrid?: {
          title: string;
          description: string;
          image?: string | Media;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'infoGrid';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        questions?: {
          richText: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'faq';
      }
    | {
        introContent?: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products' | 'articles';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'products';
                }
              | {
                  value: string;
                  relationTo: 'articles';
                }
            )[]
          | (
              | {
                  value: Product;
                  relationTo: 'products';
                }
              | {
                  value: Article;
                  relationTo: 'articles';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'products';
                }
              | {
                  value: string;
                  relationTo: 'articles';
                }
            )[]
          | (
              | {
                  value: Product;
                  relationTo: 'products';
                }
              | {
                  value: Article;
                  relationTo: 'articles';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
    | {
        title: {
          [k: string]: unknown;
        }[];
        selectedProducts?:
          | {
              value: string;
              relationTo: 'products';
            }[]
          | {
              value: Product;
              relationTo: 'products';
            }[];
        id?: string;
        blockName?: string;
        blockType: 'featuredProducts';
      }
    | FormBlock
  )[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Category {
  id: string;
  title?: string;
  parent?: string | Category;
  breadcrumbs?: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Article {
  id: string;
  title: string;
  location?: string;
  date?: string;
  extract?: string;
  content: {
    [k: string]: unknown;
  }[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface FormBlock {
  form: string | Form;
  enableIntro?: boolean;
  introContent: {
    [k: string]: unknown;
  }[];
  image?: string | Media;
  id?: string;
  blockName?: string;
  blockType: 'formBlock';
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Order {
  id: string;
  orderedBy?: {
    user?: string | User;
    name?: string;
    email?: string;
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  items?: {
    product?: string | Product;
    price?: number;
    quantity?: number;
    variant?: string;
    id?: string;
  }[];
  stripeInvoiceID?: string;
  stripePaymentIntentID?: string;
  status: 'unpaid' | 'paid' | 'shipped' | 'refunded';
  total?: number;
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Settings {
  id: string;
  shopPage?: string | Page;
  updatedAt?: string;
  createdAt?: string;
}
export interface Header {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  copyright: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
