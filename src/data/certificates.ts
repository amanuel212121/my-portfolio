export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    title: "Electronics and Arduino Programming",
    issuer: "TME Education Africa",
    year: "2021",
    image: "/my-portfolio/certificate.jpg",
    description: "Certificate of Participation in the workshop on Electronics and Arduino Programming organized by TME Education at Shumabo Secondary School."
  },
];
