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
    description: `LOG++ is a parser that interprets prolog and also a virtual machine/engine,
    written in vanilla JavaScript, that runs prolog in your browser without any other dependencies.
    I was the author of this project under the guidance of PhD. Mamede Lima-Marques at CPAI - UnB
    (Information Architecture Research Center of University of Brasília), University of Brasília. I had also
    the opportunity to present LOG++ in the V Coloquy of Information Architecture to brilliant
    minds like PhD. Walter Carnielli, a Brazilian mathematician, logician, and philosopher.`,
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
    link: "https://github.com/lucas-portela/logpp",
    description: `In my first two years as a trainee at CPAI - UnB (Information Architecture Research Center of University of Brasília)
    I get used to studying formal logics and I did a lot of experiments in sintax parsing with state machines, and formal language
    semantics design. In 2014 I developed a simple logic theorem paser and prover and called it ALP
    (Analisador de Lógica Proposicional in protuguese).`,
    images: ["portfolio/alp-0.png", "portfolio/alp-1.png"],
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
    description: `After the end of my trainee contract at CPAI - UnB, I was younger than 18 and just jumped into the freelance market.
    I made my proposals to challenging projects, considering I was a Junior (2016). One of these challenging projects was Internaipe:
    an online, realtime multiplayer card game that runs in the browser, supporting at least 10.000 concurrent players,
    and it had to be good enough to deal with hardware limitations in the back-end side. This job was done using Java EE with Tomcat, Web Sockets to realtime transport
    and the elegant Vanilla JavaScript in the client-side (except the fact I used jQuery). The above link is pointing to a promo video
    (that I also made to my client as a gift lol). The game is now offline, sinco 2019, but they hired my services again to develop Internaipe 2.0.
    It will get new technologies, new features and more sweet lines to add to my curriculum.`,
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
    description: `AXSAT is a car tracking service company. They hired me just before launching their service.
    I was resposible to develop their tracking system starting from an open source software named Traccar. With this starting point,
    I developed an hybrid mobile app for Android and IOS with Vue + Cordova, a web app for all modern browsers and implemented new
    tracker protocols based only manufacturer datasheets and my own tests. I also added a lot of new features targeting fleet management.`,
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
    link: "https://axsat.com.br/",
    description: `LinkData is an IT company focused in solutions for public management (ie: government patrimony management).
    Working on LinkData, I developed a product that tracks patrimony items inside a shed via RFID technology. The solution was purchased
    by some TREs (Regional Electoral Courts) in Brazil to manage the storage of governement electronic voting machines. I was responsible for all the front-end and for the NodeJS back-end.
    Other colleagues in the team were responsible for the hardware.`,
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
    description: `In 11 March 2020 the World Health Organization declared the covid-19 outbreak pandemic and we all suffered from the
    tragic spread of the mortal virus across the globe. After the flexibilization of the lockdown in Brazil, there was a need
    to monitorate people temperature inside shared closed spaces to prevent contamination and slow down the virus spread rate.
    At ASI Company we developed a totem that identifies an employee by his RFID card, measures and sends his temperature to
    a database for analisys and realtime contamination alerts. I was responsible for the firsts lines of code (and the last ones too).
    My main role was the designing and development of the front-end and back-end, everything full of NodeJS love. The team had also
    people responsible for the hardware and for getting the potential customers requisits.`,
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
    description: `ASI Processos is a process automation software driven by BPMN diagrams. At ASI Company I was responsible for developing a functional prototype within
    a month, for presenting it to a client during the negotiation, wich I achieved with success and some overtime work at dawn. There are some legal limits regarding the tech details, but the presentation
    was a success and I'm currently working with the ASI team to evolve the project to a mature level.`,
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
    read and run code I wrote by my own when I was 14. It is a game and it simulates (at least tries to) the Archimedes' Principle in a ludic context where you
    control a brasilian submarine named Tikuna S-34,
    and you are looking for a lost and important mechanical part. I took this project to a competition, the II Science Circuit in
    in Brasilia at 2012 and I won it in 1th in the regional stage. Some teachers at my school also requested the school computer room
    for letting their students play the game I made. It was an amazing feeling to create something like this. since that game i have never stopped programming. `,
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
