export const profile = {
  name: "CLINT M DMELLO",
  role: "Software Engineer",
  headline:
    "Software Engineer building AI workflows, cloud-native backend systems, and reliable production platforms.",
  location: "San Jose, CA (Open to Relocate)",
  email: "clintdmello12@gmail.com",
  phone: "+1 5627133206",
  github: "https://github.com/clintdmello12",
  linkedin: "https://www.linkedin.com/in/clint-michael-d/",
  resume: "documents/Clint-Dmello-SRE-Final.pdf",
  summary:
    "I work at the intersection of software engineering, SRE, and customer-facing delivery: building scalable systems, keeping them reliable in production, and translating technical work into business outcomes.",
};

const getAssetPath = (path) => `assets/${path}`;

export const experience = [
  {
    company: "ServiceNow",
    duration: "July 2024 - Present",
    role: "Software Engineer",
    logo: getAssetPath("logos/servicenow.png"),
    logoText: "SN",
  },
  {
    company: "Beach Building Services, CSULB",
    duration: "March 2023 - December 2024",
    role: "Student Assistant",
    logo: getAssetPath("logos/csulb.png"),
    logoText: "CSULB",
  },
  {
    company: "Infinite Infolab",
    duration: "January 2020 - December 2022",
    role: "Software Engineer",
    logo: getAssetPath("logos/infinite-infolab.png"),
    logoText: "II",
  },
];

export const skills = [
  {
    group: "Engineering",
    items: [
      { name: "Java", logo: getAssetPath("logos/java.svg"), logoText: "Jv" },
      { name: "Spring Boot", logo: getAssetPath("logos/spring.svg"), logoText: "Sp" },
      { name: "Python", logo: getAssetPath("logos/python.svg"), logoText: "Py" },
      { name: "Node.js", logo: getAssetPath("logos/nodejs.svg"), logoText: "Nd" },
      { name: "React", logo: getAssetPath("logos/react.svg"), logoText: "Re" },
      { name: "REST APIs", logo: getAssetPath("logos/fastapi.svg"), logoText: "API" },
    ],
  },
  {
    group: "Cloud & Platform",
    items: [
      { name: "AWS", logo: getAssetPath("logos/aws.svg"), logoText: "AWS" },
      { name: "Docker", logo: getAssetPath("logos/docker.svg"), logoText: "Dk" },
      { name: "Kubernetes", logo: getAssetPath("logos/kubernetes.svg"), logoText: "K8s" },
      { name: "Terraform", logo: getAssetPath("logos/terraform.svg"), logoText: "Tf" },
      { name: "Helm", logo: getAssetPath("logos/helm.svg"), logoText: "Hm" },
      { name: "Linux", logo: getAssetPath("logos/linux.svg"), logoText: "Ln" },
    ],
  },
  {
    group: "Reliability",
    items: [
      { name: "SRE", logo: getAssetPath("logos/googlecloud.svg"), logoText: "SRE" },
      { name: "CI/CD", logo: getAssetPath("logos/githubactions.svg"), logoText: "CI" },
      { name: "Jenkins", logo: getAssetPath("logos/jenkins.svg"), logoText: "Jk" },
      { name: "GitHub Actions", logo: getAssetPath("logos/githubactions.svg"), logoText: "GH" },
      { name: "Prometheus", logo: getAssetPath("logos/prometheus.svg"), logoText: "Pr" },
      { name: "ELK", logo: getAssetPath("logos/elastic.svg"), logoText: "ELK" },
    ],
  },
  {
    group: "AI & Data",
    items: [
      { name: "RAG", logo: getAssetPath("logos/anthropic.svg"), logoText: "RAG" },
      { name: "Claude API", logo: getAssetPath("logos/anthropic.svg"), logoText: "AI" },
      { name: "Vector Search", logo: getAssetPath("logos/neo4j.svg"), logoText: "VS" },
      { name: "PostgreSQL", logo: getAssetPath("logos/postgresql.svg"), logoText: "PG" },
      { name: "MongoDB", logo: getAssetPath("logos/mongodb.svg"), logoText: "MDB" },
      { name: "Redis", logo: getAssetPath("logos/redis.svg"), logoText: "Rd" },
    ],
  },
];

export const projects = [
  {
    name: "GTM Data Pipeline",
    description:
      "End-to-end GTM pipeline for a Legal AI startup with API integration, ICP scoring, lead routing, experiments, and webhook delivery.",
    tags: ["Python", "APIs", "Automation"],
    href: "https://github.com/clintdmello12/gtm-data-pipeline",
  },
  {
    name: "FSA Monitoring",
    description:
      "Monitoring-focused JavaScript project aligned with reliability, alerting, and production visibility workflows.",
    tags: ["JavaScript", "Monitoring", "SRE"],
    href: "https://github.com/clintdmello12/FSA-Monitoring",
  },
  {
    name: "Cloud IaC Kubernetes",
    description:
      "Cloud infrastructure and Kubernetes work exploring repeatable deployment patterns and platform operations.",
    tags: ["Java", "Kubernetes", "Cloud"],
    href: "https://github.com/clintdmello12/CECS_574_Cloud_IaC_K8s",
  },
  {
    name: "MedGPT",
    description:
      "Multimodal medical AI exploration combining language and vision model workflows for medical image insights.",
    tags: ["Python", "AI", "LLM"],
    href: "https://github.com/clintdmello12/MedGPT",
  },
];

export const education = [
  {
    school: "California State University, Long Beach",
    degree: "MS, Computer Science",
    duration: "January 2023 - December 2024",
    logo: getAssetPath("logos/csulb.png"),
    logoText: "CSULB",
  },
  {
    school: "Fr. Conceicao Rodrigues College of Engineering",
    degree: "BE, Information Technology",
    duration: "2018 - 2021",
    logo: getAssetPath("logos/frcrce.png"),
    logoText: "FCRCE",
  },
  {
    school: "Bhausaheb Vartak Polytechnic, Vasai",
    degree: "Diploma, Computer Technology",
    duration: "2015 - 2018",
    logo: getAssetPath("logos/bvp.png"),
    logoText: "BVP",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    logo: getAssetPath("logos/aws.svg"),
    logoText: "AWS",
  },
  {
    name: "Introduction to DevOps and Site Reliability Engineering",
    logo: getAssetPath("logos/linux.svg"),
    logoText: "SRE",
  },
  { name: "Certified BigID Associate Admin", logo: getAssetPath("logos/bigid.png"), logoText: "BigID" },
  { name: "Certified BigID Associate Operator", logo: getAssetPath("logos/bigid.png"), logoText: "BigID" },
  { name: "Certified Data Monetizer", logo: getAssetPath("logos/ydc.png"), logoText: "YDC" },
];

