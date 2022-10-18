export interface Qualification {
  name: string;
  place: string;
  board: string;
  grade: string;
  gradeUnit: string;
  timeline: string;
}

export interface About {
  title: string;
  description: string;
  lottieData: Lottie;
}
export interface Lottie {
  src: string;
  speed: string;
  background: string;
  loop: boolean;
  autoplay: boolean;
}
export interface Banner {
  pageIntro: string;
  me: string;
  typing: string[];
  imageOverlayText: string;
}

export interface Work {
  name: string;
  timeLine: string;
  title: string;
  works: string;
}

export interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  imageURL: string;
}
export interface Contact {
  location: string;
  country: string;
  email: string;
  mobile: string;
  lottieSrc: string;
}

export interface Social {
  linkedIn: string;
  github: string;
  hackerrank: string;
  npm: string;
}
export interface Projects {
  name?: string;
  techStack?: Tech[];
  about?: string;
  tags: string[];
  url: string;
  github?: string;
  img?: string;
  id: string;
}
export interface Tech {
  tag: string;
  classname: string;
}
export interface Skill {
  image: string;
  name: string;
  bgColor: string;
}
export interface Combined {
  qualificationData: Qualification[];
  aboutData: About;
  bannerData: Banner;
  workExperienceData: Work[];
  testimonialData: Testimonial[];
  contactDetails: Contact;
  socialLinks: Social;
  projects: Projects[];
  skills: Skill[];
}
