export interface PageContent {
  about: string;
  artificial: string;
  trading: string;
  hr: string;
  images: { [key: string]: string };
}


export const defaultContent: PageContent = {
  about: "We are a company offering top-notch services.",
  artificial: "Artificial Jewellery.",
  trading: "We offer advanced trading insights.",
  hr: "We help companies with HR consultancy.",
  images: {}
};

export function loadContent(): PageContent {
  const data = localStorage.getItem('siteContent');
  return data ? JSON.parse(data) : defaultContent;
}

export function saveContent(content: PageContent) {
  localStorage.setItem('siteContent', JSON.stringify(content));
}
