export type CV = {
  menu: string[];
  profil: {
    fullname: string;
    headline: string;
    about: string;
    location?: string;
    contact: {
      phone?: string;
      email?: string;
      linkedin?: string;
      github?: string;
    };
  };
competence: {
  tech: string;

  topicProgramming: string;
  topicData: string;
  topicDB: string;
  topicModeling: string;
  topicIA: string;
  topicDevOps: string;
  topicTool: string;

  programming: string[];
  data: string[];
  databases: string[];
  modeling: string[];
  ia: string[];
  devOps: string[];
  tools: string[];
};


  expertise: {
    title: string;
    items: {
      title: string;
      description: string;
      stack: string[];
    }[];
  };
  experience: {
    title: string;
    experience: Array<{
      title: string;
      date: string;
      company: string;
      location: string;
      link?: string;
      detail: string[];
      stack?: string[];
    }>;
  };
  projects?: {
    title: string;
    items: Array<{
      name: string;
      date?: string;
      description: string;
      stack?: string[];
      link?: string;
    }>;
  };
  school: {
    title: string;
    bachelor: {
      degreeName: string;
      schoolName: string;
      place: string;
      date: string;
      subject: string[];
    };
    master: {
      degreeName: string;
      schoolName: string;
      place: string;
      date: string;
      subject: string[];
    };
  };
  assets: { title: string; items: string[] };
  language: { title: string; items: Array<{ name: string; level: string }> };
  interest?: { title: string; items: string[] };
  footer?: { copyright?: string; cta?: string };
};
