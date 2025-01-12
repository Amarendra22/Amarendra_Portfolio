import {
  cpp,
  css,
  django,
  git,
  html,
  javascript,
  matlab,
  ml,
  mongodb,
  nodejs,
  python,
  reactjs,
  solidworks,
  tailwind,
  threejs,
  iimv,
  iitkgp,
  InvestorBase,
  isb,
  amex,
  backend,
  creator,
  mobile,
  movie,
  open,
  poll,
  stock,
  ts,
  web,
  wtrack,
  git2,
  cgs,
  sac,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Internships and Extracurricular",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications, Achievements and Competitions",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "FinTech",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Solidworks",
    icon: solidworks,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "matlab",
    icon: matlab,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Multiple ML libraries",
    icon: ml,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "LLM Research Intern",
    company_name: "IIT Kharagpur",
    icon: iitkgp,
    iconBg: "white",
    date: "November 2024 - Present",
    points: [
      "Working as a Research Intern under Dr. Prabhat Kumar Mishra on LLM in the Department of Artificial Intelligence at IIT Kharagpur.",
      "Currently working on LLM Classification finetuning using LightGBM model.",
    ],
  },
  {
    title: "Senior Developer",
    company_name: "Computer Graphics Society, IIT Kharagpur",
    icon: cgs,
    iconBg: "white",
    date: "March 2023 - Present",
    points: [
      "Organized and led game and web development workshops, with footfall of 150+ students,ensuring impactful learning outcomes.",
      "Guided and mentored 6 juniors in Unity and backend development, fostering skill development, and integrating their contributions into live projects.",
      "Spearheaded the development of a 2D shooter game in Unity2D, leading end-to-end implementation using C# with assets created using Adobe Photoshop and Illustrator.",
      "Held the position of Junior Developer previously and worked on Unity2D, Web Development, and Blender.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Indian Institute of Management, Visakhapatnam",
    icon: iimv,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Conducted a comprehensive analysis of how communication style impacts trust and success in equity- and donation-based crowdfunding across platforms such as Crunchbase, Milaap, GoGetFunding, Ketto, and Kickstarter, leveraging data from over 800 campaigns to identify key patterns and insights.",
      "Reviewed 85+ published research papers to explore the effects of communication style on campaign success, synthesizing critical insights to inform the project.",
      "Applied machine learning models to analyse the relationship between communication style and campaign outcomes, achieving 74% accuracy with Logistic Regression in predicting successful campaigns.",
      "Segmented 3,000+ donors into 5 distinct profiles using K-Means Clustering based on contribution patterns and trust indicators. Enhanced classification accuracy by employing Support Vector Machines to identify key communication factors driving campaign success.",
    ],
  },
  {
    title: "Research Analyst",
    company_name: "Indian School of Business, ISB",
    icon: isb,
    iconBg: "#E6DEDD",
    date: "November 2023 - December 2023",
    points: [
      "Developed a web scraping tool using Selenium WebDriver to automate the daily collection of retail prices for essential commodities from the Department of Consumer Affairs. The tool processed and stored over 725 entries daily in CSV format over a period of 6 months, achieving an 80% reduction in manual processing time.",
      "Leveraged Glob and Xlwings for data handling and automation. Visualized periodic price trends using Matplotlib and Seaborn due to multiple factors, enabling strategic insights into commodity pricing patterns.",
    ],
  },
  {
    title: "Associate",
    company_name: "Students' Alumni Cell, IIT Kharagpur",
    icon: sac,
    iconBg: "#383E56",
    date: "November 2022 - October 2023",
    points: [
      "Efficiently managed events and logistics for the 19th Annual Alumni Meet (AAM), with a footfall of 300+ alumni from the batches of 1973, 1983, and 1998and overseeing event logistics, transportation, and scheduling.",
      "Coordinated, managed and worked on creative initiatives such as designing YearBook, Class Song, and Cosplay for Batch of 2024.",
      "Secured 21 sponsorships, demonstrating strategic outreach and negotiation skills to boost event resources and expand reach.",
    ],
  },
  {
    title: "Product Development Intern",
    company_name: "InvestorBase",
    icon: InvestorBase,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Conducted in-depth analyses of business models for six early-stage startups in the material science domain, identifying opportunities for innovation and refining product offerings",
      "Collaborated with founders to transform operational challenges into actionable product development strategies, emphasizing scalability and market readiness.",
      "Provided data-driven recommendations to enhance product features aligned with market demands, directly contributing to the startups' ability to scale efficiently.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "BCG Strategy Consulting Virtual Experience Programme from Forage.",
  },
  {
    testimonial:
      "IBM Data Science Professional Certificate course from Coursera.",
  },
  {
    testimonial:
      "DeepLearning.AI Supervised Machine Learning: Regression and Classification course from Coursera.",
  },
  {
    testimonial:
      "Codeforces Rating of 833, solved 250+ problems on LeetCode and other platforms.",
  },
  {
    testimonial:
      "Secured AIR 8364 in JEE Advanced 2022(1,55,538 candidates) and AIR 5700 in JEE Mains 2022(10,26,799 candidates).",
  },
  {
    testimonial:
      "Reached final round in American Express Decision Science 2024 and campus round in Bajaj Torq after successfully clearing round 1 and 2.",
  },
  {
    testimonial:
      "Progressed to Round 2, representing IITKGP among the selected teams PAN India, on a project titled 'Similar Document Template Matching Algorithm by BAJAJ FinServ' in Smart India Hackathon, 2023.",
  },
  {
    testimonial:
      "Participated in the Data Analytics competition from RP Hall in GC 2024, IIT Kharagpur. Ranked 5th among the Halls. ",
  },
];

const projects = [
  {
    name: "Human-facial emotion analysis and recognition with CNN",
    description:
      "This opencv project made using python detects 7 types of facial emotion, angry, disgust, fear, happy, neutral, sad, surprise.",
    tags: [
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "pillow",
        color: "orange-text-gradient",
      },
      {
        name: "HaarCascade",
        color: "blue-text-gradient",
      },
    ],
    image: open,
    source_code_link: "https://github.com/Amarendra22/Human-facial-emotion-analysis-and-recognition",
  },
  {
    name: "Text-Summarizer-end-to-end project",
    description:
      "This is a end to end project made using NLP hugging face transformer in python. The model has been trained using ML in jupyter notebook. I have utilized Hugging Face transformers, NLTK, SentencePiece, and Torch for NLP to train the ML model. FastAPI and Jinja2 have been used for the backend, and HTML and CSS for the frontend. I have also employed performance metrics using SacreBLEU and ROUGE to ensure high accuracy in text summarization, with an average summary accuracy of 82%.",
    tags: [
      {
        name: "Jupyter Notebook",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Hugging Face Transformer",
        color: "blue-text-gradient",
      },
      {
        name: "Jinja2",
        color: "green-text-gradient",
      },
      {
        name: "Fast API",
        color: "pink-text-gradient",
      },
      {
        name: "NLTK",
        color: "orange-text-gradient",
      },
    ],
    image: ts,
    source_code_link: "https://github.com/Amarendra22/Text-Summarizer-end-to-end",
  },
  {
    name: "Cricket Match win prediction",
    description:
      "This project was a competition by American Express Decision Science track conducted on Unstop during May 2024 where I was able to reach the final round. I used feature engineering to identify top 10 most important features from 5 datasets, for model's predictive capabilities. Implemented XGBoost, Scikit-Learn, and SciPy for model training and predictiona and achieved an average F1-score of 73% and correct winner prediction accuracy of 70% on unseen data and 86% on known data.",
    tags: [
      {
        name: "Jupyter Notebook",
        color: "blue-text-gradient",
      },
      {
        name: "XGBoost",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "pink-text-gradient",
      },
      {
        name: "Sci-Py",
        color: "orange-text-gradient",
      },
    ],
    image: amex,
    source_code_link: "https://github.com/Amarendra22/Cricket-Match-win-prediction",
  },
  {
    name: "Human-facial emotion analysis and recognition with CNN",
    description:
      "This is a project on a generative AI which converts the human voice input to text which is furthur converted to voice using GPT-3.5. It has a voice-controlled conversational interface that utilizes the Google Speech Recognition API for speech-to-text conversion and the OpenAI GPT-3.5 Turbo model for generating responses.",
    tags: [
      {
        name: "openai 3.5 turbo",
        color: "blue-text-gradient",
      },
      {
        name: "pyttsx3",
        color: "green-text-gradient",
      },
      {
        name: "speech_recognition libraries",
        color: "pink-text-gradient",
      },
    ],
    image: git2,
    source_code_link: "https://github.com/Amarendra22/Generative-AI",
  },
  {
    name: "WeatherTrackr App",
    description:
      "WeatherTrackr is a user-friendly weather application made using ReactJS that provides real-time weather updates for locations worldwide. Powered by the OpenWeather API, this app offers comprehensive weather data, including temperature, humidity, visibility, and wind speed.",
    tags: [
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
    ],
    image: wtrack,
    source_code_link: "https://github.com/Amarendra22/WeatherTrackr",
  },
  {
    name: "PollPulse",
    description:
      "Build a voting platform using Django backend and HTML, CSS for frontend.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: poll,
    source_code_link: "https://github.com/Amarendra22/PollPulse",
  },
  {
    name: "Stock_Prediction-LSTM",
    description:
      "The dataset used for stock price prediction has been done using Yahoo Finance using yfinace library from years 2010 to 2024 January. LSTM model has been used and various labraries such as Keras, Numpy, Pandas, Scikit-Learn and matplotlib have been used. Further the Frontend has been done using streamlit library. The user has to just enter the Stock code( like for apple it is 'AAPL') to view the previous 14 year trends in stock prices and future predictions.",
    tags: [
      {
        name: "Keras",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Amarendra22/Stock_Prediction-LSTM",
  },
  {
    name: "Movie-recommendation",
    description:
      "This project is a movie recomendation website made using ML libraries such as Keras, Scikit-Learn, etc. which shows a list of 5 movies which are related to the movie searched from the dropdown menu.",
    tags: [
      {
        name: "Keras",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Amarendra22/Movie-recommendation_ML",
  },
  {
    name: "Amazon-E-Commerce-Sales-Prediction",
    description:
      "Analyzed a comprehensive dataset of 1.3 lakh sales records to derive actionable insights, optimize strategies, and drive business growth. Employed advanced analytical techniques to dissect various aspects of sales performance, including monthly distribution, cancelled orders, B2B versus customer sales, SKU performance, customer retention, and category-specific sales trends. Key achievements includes Monthly Sales Distribution Analysis, Cancelled Orders Identification, B2B vs. Customer Sales Segmentation, Top 10 SKU Performance Analysis, Customer Retention Analysis, Category-specific Sales Trends and PowerBI used for responsive dashboard.",
    tags: [
      {
        name: "PowerBI",
        color: "blue-text-gradient",
      },
      {
        name: "Seaborn",
        color: "green-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: git2,
    source_code_link: "https://github.com/Amarendra22/Amazon-E-Commerce-Sales-Prediction",
  },
  {
    name: "Web Scrapping",
    description:
      "This project was part of the internship at the Indian School of Business in november-december 2023. Developed an automated data collection and processing pipeline to scrape daily retail prices of essential commodities from the Department of Consumer Affairs (Price Monitoring Division) for August and September 2023. The project efficiently transforms the collected data into Excel and CSV formats for further analysis.",
    tags: [
      {
        name: "Selenium WebDriver",
        color: "blue-text-gradient",
      },
      {
        name: "Glob",
        color: "green-text-gradient",
      },
      {
        name: "XLWings",
        color: "pink-text-gradient",
      },
    ],
    image: git2,
    source_code_link: "https://github.com/Amarendra22/Web-Scrapping",
  },
];

export { services, technologies, experiences, testimonials, projects };
