export default [
  {
    id: "logpp",
    title: "Log++",
    date: "2014",
    public: true,
    tags: [
      "icon:language-javascript JavaScript",
      "icon:school Academic",
      "icon:function-variant Prolog",
      "icon:form-textbox Language Parser",
      "icon:cog Language Engine",
    ],
    link: "https://github.com/lucas-portela/logpp",
    description: `LOG++ is a parser that interprets prolog and also a virtual machine/engine, written in vanilla JavaScript, that runs prolog in your browser without any other dependencies. I was the author of this project under the guidance of PhD Mamede Lima-Marques at CPAI - UnB (Information Architecture Research Center of University of Brasília), University of Brasília. I also had the opportunity to present LOG++ in the V Coloquy of Information Architecture to brilliant minds like PhD Walter Carnielli, a Brazilian mathematician, logician, and philosopher.`,
    images: [
      "portfolio/logpp-0.png",
      "portfolio/logpp-2.jpg",
      "portfolio/logpp-1.png",
    ],
  },
  {
    id: "alp",
    title: "ALP",
    date: "2014",
    public: true,
    tags: [
      "icon:language-javascript JavaScript",
      "icon:school Academic",
      "icon:function-variant Propositional Logic",
      "icon:form-textbox Language Parser",
      "icon:cog Language Engine",
    ],
    link: "https://github.com/lucas-portela/alp",
    description: `In my first two years as a trainee at CPAI - UnB (Information Architecture Research Center of University of Brasília) I got used to studying formal logics and I did a lot of experiments in syntax parsing with state machines, and formal language semantics design. In 2014 I developed a simple logic theorem paser and prover and called it ALP (Analisador de Lógica Proposicional in portuguese).`,
    images: ["portfolio/alp-0.png", "portfolio/alp-1.png"],
  },
  {
    id: "sarc",
    title: "SARC",
    date: "2015",
    public: true,
    tags: [
      "icon:language-javascript JavaScript",
      "icon:school Academic",
      "icon:robot-industrial Robotics",
      "icon:function-variant Declarative Paradigm",
    ],
    link: "http://www.mnr.org.br/wp-content/uploads/2021/08/MNR-Anais2015.pdf",
    description: `The project LOG++ was adapted by me and evolved to a new project whose name was SARC
    (Accessible System of Cognitive Robotics). Then I presented SARC in the V MNR (5th National Robotics Show)
    in Uberlândia, Minas Gerais - Brazil, representing UnB and the article was published in the annals of the
    event. #nl#nlAbstract: Cognitive robotics aims to develop robots that can
    perform functions with a high level of abstraction, through
    programs written in a logic programming language, so
    cognitive robotics is a robotics area focused on artificial
    intelligence. A common barrier to work with cognitive robotics
    is the high cost of robots. As a solution to this problem, SARC
    was developed: a cognitive robotics system based on Prolog,
    which aims in making the research and development of robots
    with artificial intelligence more accessible.#nl
    Key words: Artificial Intelligence, cognitive robotics, Prolog,
    Smartphone.`,
    images: [
      "portfolio/sarc-0.png",
      "portfolio/sarc-1.png",
      "portfolio/sarc-2.png",
    ],
  },
  {
    id: "internaipe",
    title: "Internaipe",
    date: "2016",
    public: false,
    tags: [
      "icon:language-java Java EE",
      "icon:controller-classic-outline Game",
      "icon:lan-connect Multiplayer Networking",
      "icon:language-javascript JavaScript",
      "icon:cash Freelance",
    ],
    link: "https://youtu.be/QCf_uSD_XP4",
    description: `After the end of my trainee contract at CPAI - UnB, I made my proposals to challenging projects, considering I was a Junior in 2016. One of these challenging projects was Internaipe: an online, realtime multiplayer card game that runs in the browser, supporting at least 10.000 concurrent players, and it had to be efficient enough to deal with hardware limitations in the back-end side. This job was done using Java EE with Tomcat, Web Sockets for real time transport and the elegant Vanilla JavaScript in the client-side (except the fact I did use jQuery).`,
    images: [
      "portfolio/internaipe-2.png",
      "portfolio/internaipe-0.png",
      "portfolio/internaipe-1.png",
    ],
  },
  {
    id: "axsat",
    title: "AXSAT",
    date: "2018",
    public: false,
    tags: [
      "icon:language-java Java EE",
      "icon:car-connected Car Tracking",
      "icon:crosshairs-gps IOT/Tracker Protocol Low Level Implementation",
      "icon:vuejs VueJS",
      "icon:cordova Cordova ",
    ],
    link: "https://axsat.com.br/",
    description: `AXSAT is a car tracking service company, and now a car tracking software. AXSAT hired me just before launching their service. I was responsible for developing their tracking system starting from an open source software named Traccar. With this starting point, I developed a hybrid mobile app for Android and IOS with Vue + Cordova, a web app for any modern browsers and implemented new tracker protocols based only on manufacturer datasheets and my own tests. I also added a lot of new features targeting fleet management.`,
    images: [
      "portfolio/axsat-1.jpg",
      "portfolio/axsat-0.jpg",
      "portfolio/axsat-2.jpg",
      "portfolio/axsat-3.jpg",
      "portfolio/axsat-4.jpg",
    ],
  },
  {
    id: "gestor-de-urnas",
    title: "Gestor de Urnas",
    date: "2019",
    public: false,
    tags: [
      "icon:language-javascript JavaScript",
      "icon:nfc-variant IOT/RFID",
      "icon:map-marker-path Shed Storage Management",
      "icon:vuejs VueJS",
    ],
    description: `LinkData is an IT company focused on solutions for public management (ie: government patrimony management). Working on LinkData, I developed a product that tracks patrimony items inside a shed via RFID technology. The solution was purchased by some TREs (Regional Electoral Courts) in Brazil to manage the storage of government electronic voting machines. I was responsible for all the front-end and for the NodeJS back-end.`,
    images: [
      "portfolio/gestor-urnas-0.jpg",
      "portfolio/gestor-urnas-1.jpg",
      "portfolio/gestor-urnas-2.jpg",
    ],
  },
  {
    id: "icheck",
    title: "iCheck",
    date: "2020",
    public: false,
    link: "https://www.asicompany.com.br/?page_id=114",
    tags: [
      "icon:language-javascript JavaScript",
      "icon:thermometer-alert Employee Temperature Check",
      "icon:nfc-variant IOT/RFID",
      "icon:vuejs VueJS",
    ],
    description: `On 11 March 2020 the World Health Organization declared the covid-19 outbreak pandemic and we all suffered from the tragic spread of the deadly virus across the globe. After the flexibilization of the lockdown in Brazil, there was a need to monitor people's temperature inside closed spaces to prevent contamination and slow down the virus spread rate. At ASI Company we developed a totem that identifies an employee by his RFID card, measures and sends his temperature to a database for analysis and realtime contamination alerts. I was responsible for the first lines of code and for the last ones too. My main role was to design and develop the front-end and the back-end, everything full of NodeJS love. The team had also people responsible for the hardware and for getting the potential customers requisites.`,
    images: [
      "portfolio/icheck-0.png",
      "portfolio/icheck-1.png",
      "portfolio/icheck-2.png",
    ],
  },
  {
    id: "asi-processos",
    title: "ASI Processos",
    date: "2021",
    public: false,
    tags: [
      "icon:language-javascript JavaScript",
      "icon:cog BPMN",
      "icon:format-list-checks Process Automation",
      "icon:angular Angular",
      "Camunda",
    ],
    description: `ASI Processos is a process automation software driven by BPMN diagrams. At ASI Company I was responsible for developing a functional prototype within a month, for presenting it to a client during the negotiation. Task which I achieved with success and some overtime work at dawn. There are some legal limits regarding the tech details, but the presentation was a success and I'm currently working with the ASI team to evolve the project to the next level.`,
    images: ["portfolio/asi-processos.jpg"],
  },
  {
    id: "subcontrol-tikuna-s34",
    title: "SubControl Tikuna S-34",
    date: "2012",
    public: true,
    tags: [
      "icon:language-cpp C++",
      "icon:controller-classic-outline Game",
      "icon:submarine Archimedes' Principle Simulator",
      "icon:chair-school Educational",
    ],
    link: "https://github.com/lucas-portela/subcontrol-tikuna-s34",
    description: `This is a bonus project in the list. I wrote this game when I was a kid. It is a C++ hungry monster but it works fine and it is exciting to
    read and run code I wrote on my own when I was 14. It is a game and it simulates (at least tries to) the Archimedes' Principle in a ludic context where you
    control a brazilian submarine named Tikuna S-34,
    and you are looking for a lost and important mechanical part. I took this project to a competition, the II Science Circuit in
    in Brasilia in 2012 and I was the context winner, with this game, in the regional stage. Some teachers at my school also requested the school computer room
    for letting their students play the game I made. It was an amazing feeling to create something like this.`,
    images: [
      "portfolio/subcontrol-tikuna-s34-5.jpg",
      "portfolio/subcontrol-tikuna-s34-0.jpg",
      "portfolio/subcontrol-tikuna-s34-1.jpg",
      "portfolio/subcontrol-tikuna-s34-2.jpg",
      "portfolio/subcontrol-tikuna-s34-3.jpg",
      "portfolio/subcontrol-tikuna-s34-4.jpg",
    ],
  },
];
