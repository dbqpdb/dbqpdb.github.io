// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications and conference proceedings in phonetics, speech technology, and computational linguistics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at the University of Arizona, University of Alberta, and elsewhere.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/github.com/dbqpdb/db_cv/raw/master/DanBrenner_CV.pdf";
          },
        },{id: "news-teaching-ling-538-computational-linguistics-ling-581-advanced-computational-linguistics-and-ling-696g-advanced-speech-technology-at-the-university-of-arizona-this-spring",
          title: 'Teaching LING 538: Computational Linguistics, LING 581: Advanced Computational Linguistics, and LING 696G:...',
          description: "",
          section: "News",},{id: "teaching-ling-101-language",
          title: 'LING 101: Language',
          description: "Introduction to the scientific study of language, covering phonetics, phonology, morphology, syntax, semantics, and language in society.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ling-101-language/";
            },},{id: "teaching-ling-538-computational-linguistics",
          title: 'LING 538: Computational Linguistics',
          description: "Introduction to symbolic and analytic methods for computational linguistics: regular expressions, finite state automata, and context-free grammars. Programming in Perl, Python, and Prolog.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ling-538-computational-linguistics/";
            },},{id: "teaching-ling-539-statistical-natural-language-processing",
          title: 'LING 539: Statistical Natural Language Processing',
          description: "Statistical and machine learning methods for natural language processing, including classification, sequence modeling, and neural approaches.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ling-539-statistical-nlp/";
            },},{id: "teaching-ling-581-advanced-computational-linguistics",
          title: 'LING 581: Advanced Computational Linguistics',
          description: "Continuation of LING 538, covering formal grammars, syntactic parsing, treebanks, and lexical networks (WordNet). Symbolic and analytic methods for natural language.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ling-581-advanced-computational-linguistics/";
            },},{id: "teaching-ling-696g-advanced-speech-technology",
          title: 'LING 696G: Advanced Speech Technology',
          description: "Neural techniques for speech synthesis (TTS) and automatic speech recognition (ASR/STT). Hands-on implementation of neural speech systems on HPC.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/ling-696g-advanced-speech-technology/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%73%62%72%65%6E%6E%65%72@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dbqpdb", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniel-brenner-046597140", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=K0IKTgcAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
