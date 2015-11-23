(function() {
  'use strict';

  angular
      .module('macroscopeKiosk')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'id': 'earth',
        'title': 'Earth',
        'subtitle': 'Weather on a worldwide scale',
        'url': 'http://earth.nullschool.net/?kiosk',
        'explore': 'What if you could talk about the weather anywhere around the world?  The Earth visualization maps real-time data onto the surface of a globe, so anyone can explore conditions anywhere on Earth. SPIN the globe to pick a location. TOUCH anywhere on the globe to see temperature, wind speed, ocean temperatures, ocean waves, and more.  SELECT “Earth” in the lower left to see wind speed, carbon monoxide levels, perceived air temperature, and more. FIND out where in the world storms are brewing.',
        'learn': 'Whether we like it or complain about it, bask in it or suffer from it, we all are affected by the weather. This essential truth becomes readily apparent when viewing Earth, the work of software engineer Cameron Beccario. Using data from the Global Forecast System, Earth visualizes worldwide weather patterns using animated wind streams, color coded according to velocity, that sweep across a three-dimensional globe. Truly interactive, the visualization allows the user to spin the globe and zoom in on a desired location. Tapping on that location will then bring up further information about exact coordinates, wind speed, and temperature, with all information updated every three hours. The world itself may be seen from different perspectives, as the visualization offers nine different projections, such as conic equidistant, stereographic, or Waterman Butterfly. When Earth was first introduced in December 2013, it only visualized wind patterns. Since then, however, Beccario has increased the number of overlays to include such factors as carbon monoxide concentration, dust and sulfate extinction, along with the measured temperature. Earth also shows the perceived temperature which Beccario calls the Misery Index, borrowing a term from economics. Explore the full functionality at http://earth.nullschool.net.',
        'connect': 'Cameron Beccario earned a BS in computer engineering from Iowa State University. In 2004, he moved to Tokyo, Japan, and began an intensive language study course. Since then, he has lived and worked in Tokyo, most recently as a software engineer with Indeed.com. Along with the Earth visualization, Beccario has created Air, an animated wind map of Tokyo, and Grains, a Java framework that generates threadsafe, versionable objects.',
        'logo': 'earth.jpg',
        'type': 'iframe'
      },
      {
        'id': 'academy-scope',
        'title': 'AcademyScope',
        'subtitle': 'Exploring the scientific landscape',
        'url': 'http://www.nap.edu/academy-scope/?kiosk=true',
        'explore': 'The National Academies of Sciences, Engineering, and Medicine are the nation’s premier source of policy advice on science, technology, and health policy issues. AcademyScope serves as a navigational guide through over 4,000 Academies studies appearing over the last 20 years. PICK a topic on the right to get an overview of related subtopics or select an individual publication. The size of individual subtopic globes corresponds to the amount of publishing activity within that subtopic. SELECT a globe to reveal a network of related reports. CHOOSE a single report to learn more about it.',
        'learn': 'AcademyScope represents a collaborative effort between the National Academy of Sciences and Indiana University’s Cyberinfrastructure for Network Science  Center. This interactive visualization encourages viewers to explore all reports published by the National Academies of Sciences, Engineering, and Medicine in the last twenty years. By using this discovery tool, viewers may browse reports by topic and subtopic, see the relatedness of reports via elaborate networks of book covers dynamically displayed on the screen, and access detailed information about individual reports. The version of AcademyScopepresented here consists of two main interfaces. The Topic View provides a proportional depiction of the number of titles within each sub-topic network. Sub-topic globes display relative publishing activity within individual sub-topics. The Sub-Topic View displays a network representation of the relationship between Academies reports based on full-text lexical analysis of each publication. This allows the user to highlight any given title and its related publications and also to view the number of titles published in that sub-topic by year. According to its creators, AcademyScope was designed and programmed to be fun, informative, and easy to use. Thus, it proves both inviting to experts in a given field and to the layperson who wishes to become better informed about a particular subject.',
        'connect': 'Jeff Colosino, a web developer and data engineer at the National Academies of Sciences, Engineering, and Medicine, wrote the data services that power AcademyScope. He maintains the website and databases of the National Academies Press (nap.edu), an open access repository containing thousands of Academies publications. He also specializes in data architecture, transformation, analysis, and visualization. Jeff has previously worked at the Johns Hopkins University Press, and he holds an MFA in poetry from Johns Hopkins University. Alphonse MacDonald is Director of Marketing and Technology for the National Academies of Sciences, Engineering, and Medicine. He has more than 20 years’ experience in the publishing, digital media, and online communication sectors and has developed electronic publishing and online outreach programs and strategies for a broad range of publishers and non-profit organizations, including the National Academies of Sciences, Engineering, and Medicine, Conservation International, and Island Press. Stephen Mautner is Executive Editor of the National Academies Press and the Office of Communications of the National Academies of Sciences, Engineering, and Medicine. He is responsible for the development of diverse communications products, including practitioner guides based on Academy studies, special summaries of reports, topical websites, videos, and interactive digital features. He has served the Academy for 25 years and is grateful for the opportunity to have been engaged in so many different kinds of projects. He received his BA from Brown University and an MA from Johns Hopkins University. Barbara Kline Pope is Executive Director for Communications at the National Academies of Sciences, Engineering, and Medicine and Executive Director of the National Academies Press. She is responsible for programs that bring science to public audiences including the Science & Entertainment Exchange and the Science and Engineering Ambassadors Program. She leads the Academies’ publishing operation of scholarly books that have been available on the Web free to read since 1995. She is past president of the Association of American University Presses and serves on the management board of The MIT Press. She holds an MS from the University of Maryland. JD Talasek is Director of Cultural Programs of the National Academy of Sciences (www.cpnas.org). He created and moderates a monthly salon at the Academy called DC Art Science Evening Rendezvous (DASER). JD is on the faculty at Johns Hopkins University in the Museum Studies Master’s Program and also serves on the Contemporary Art and Science Committee at the Smithsonian’s National Museum of Natural History. He is the art advisor for the magazine Issues in Science and Technology and in 2009-2010 created and organized two international on-line symposia: “Visual Culture + Bioscience” and “Visual Culture + Evolution.” Juan Thomassie is a data visualization developer in New Orleans, currently working for Lucid. He has extensive experience telling stories with data and interactivity. Juan\'s work as a front-end developer, designer, and data visualization engineer has evolved from designing and producing information graphics for print, to creating animated graphics for television, to developing software and designing apps for websites. Juan’s clients include Elastic, Gannett Digital, USA Today, Knight-Ridder Tribune, the Los Angeles Times, the Times-Picayune in New Orleans, and the Morning Advocate in Baton Rouge, Louisiana. Katy Börner holds an MS in electrical engineering from the University of Technology in Leipzig, and a PhD in computer science from the University of Kaiserslautern. In 1999, she joined Indiana University–Bloomington where she is Victor H. Yngve Professor of Information Science at the Department of Information and Library Science in the School of Informatics and Computing. In addition to Atlas of Science: Visualizing What We Know (2010) and Atlas of Knowledge: Anyone Can Map (2015), both published by The MIT Press, Börner has written more than 180 articles for academic journals and scholarly texts and has edited several scholarly publications. Chin Hua Kong graduated from Indiana University–Bloomington with an MS in computer science in 2010. At the time of this project, he served as Senior System Architect at the Cyberinfrastructure for Network Science Center at IU. Currently, he works as a software development engineer at Amazon in Seattle, Washington. Samuel T. Mills holds a BFA in studio art and a BA in philosophy from Augustana College. From 2012 to August 2015, he was Senior UX Designer with the Cyberinfrastructure for Network Science Center at Indiana University–Bloomington. Currently, he is a web developer on the IU School of Education’s marketing and communications team. Adam Simpson earned a BS in informatics with a telecommunications cognate and computer science minor from Indiana University–Bloomington in 2013. Since 2012, he has served as software developer for The Cyberinfrastructure for Network Science Center at IU.',
        'logo': 'academy-scope.png',
        'type': 'iframe'
      },
      {
        'id': 'mapping-global-society',
        'title': 'Mapping Global Society',
        'subtitle': 'Local news from a global perspective',
        'url': 'http://data.gdeltproject.org/blog/news-cooccurrence-globe/globe_cooccur.html',
        'explore': 'Most often, when we see the news, it is from a local or national perspective. But what if we could gather together news from sources around the world? How would that change the way we understand global issues and priorities? This visualization shows how geographic communities are created through connections made within the news media. To get started:  SPIN the globe and SELECT a country  OBSERVE how often those countries are mentioned together  SEARCH for unexpected connections between countries',
        'learn': 'This macroscope created by Kalev H. Leetaru, an expert on big data and global society, uses as its source material, quite literally, the news of the world. The visualization explores how the world’s news media groups countries into distinct clusters, creating an inherent geographic network structure over the planet akin to “communities” as seen through the eyes of the world’s presses. In essence, for every monitored news article published anywhere in the world, it compiles a list of all other countries also mentioned in those articles. It is important to note that this is not how often coverage from a country mentions other countries; it is how often coverage from any country in the world that is about that country mentions other countries. In other words, it is about context. Countries that are frequently mentioned together might reflect geographic proximity, but also economic and political ties, joint involvement in a major international event or narrative, or contextualization. Here, blue incoming lines indicate countries where at least 10% of the coverage mentioning the source country also mentioned the selected country. Red outgoing lines indicate countries where at least 10% of the coverage mentioning the selected country also mentioned the destination country. The size and number of energy pulses moving along the line indicate the percentage of co-occurring mentions. In a given week, nearly every country is mentioned alongside of every other country at least once, so the visualization uses the cutoff of 10% to highlight only the strongest co-occurrence relationships. More information on this project can be found at http://gdeltproject.org.',
        'connect': 'Kalev Leetaru founded and leads the GDELT Project, which monitors the world\'s broadcast, print, and web news in over 100 languages and identifies the people, locations, organizations, counts, themes, sources, emotions, narratives and events driving global society, creating a free, open, real-time platform for computing on the entire world. One of Foreign Policy magazine’s Top 100 Global Thinkers of 2013, he is a Senior Fellow at George Washington University and a Google Developer Expert. Previously he was the Yahoo Fellow and adjunct faculty at Georgetown University’s School of Foreign Service and a World Economic Forum Council Member. His work focuses on how innovative applications of the world\'s largest datasets, computing platforms, algorithms, and mindsets can reimagine the way we understand and interact with our global world.',
        'logo': 'mapping-global-society.png',
        'type': 'iframe'
      },
      {
        'id': 'cultural-history',
        'title': 'Charting Culture',
        'subtitle': '2,600 years of human history in 5 minutes',
        'url': 'assets/videos/ChartingCulture.webm',
        'explore': 'This short movie shows how macroscopes can bring complex data patterns into focus, tracing life and death locations for more than 120,000 notable figures over the past 2,600 years. Birthplaces are blue dots and places of death are red dots. Relatively small movements early on become large leaps as railroads, automobiles, and airplanes make long distance travel easier. Alliances and hostilities between countries help or hinder movement. NOTICE the pull of Rome upon individuals from Europe and North Africa during the first centuries of the millennium. OBSERVE the growth in importance of Paris and London from the 13th to the 18th centuries CE. LOOK for movements of Europeans to the United States beginning in the 17th century CE.',
        'learn': 'University of Texas art historian Maximilian Schich and Mauro Martino, head of IBM’s Watson Cognitive Visualization Lab, created Charting Culture, a visually engaging animation that debuted in August of 2014 and which went on to accumulate over 1 million views on YouTube. In just five minutes, the animation covers 2,600 years of human history, from 600 BCE to 2012 CE, by tracking 120,000 individuals important enough in their day that their birth and death locations were recorded. The figures whose migrations are traced are remarkably varied: from the Greek mathematician Pythagoras to the American Jazz Age entertainer Al Jolson, from the Roman emperor Marcus Aurelius to the Gothic painter Henry Fuseli, and from the composer Carl Maria von Weber to the father of sexuality studies, Havelock Ellis. Birthplaces, represented by blue dots, are connected by arcs to places of death, denoted by red dots. At first, these arcs are rather limited. However, with increases in transportation technology, the arcs span greater and greater geographical distances. In addition, the animation reveals how increased concentrations of death places indicate how different cultural centers rise and fall in importance: for instance, how Paris and London supplant the dominance of Rome, how New York pulls Europeans from their places of birth, and how America’s west coast lures Easterners to cross plains and mountains with promises of a new life. Further information on the data, making, and research behind this project can be found at http://cultsci.net.',
        'connect': 'Maximilian Schich is an art historian and multidisciplinary scientist who aims to understand the nature of culture by integrating qualitative inquiry and observation with methods of computation, natural science, and information design. Schich is an associate professor in arts & technology and a founding member of The Edith O\'Donnell Institute of Art History at The University of Texas at Dallas. He holds a PhD in art history from Humboldt-University in Berlin and a MA in Art History, classical archaeology, and psychology from Ludwig-Maximilians-University in Munich. His extensive consulting experience with cultural graph data set the base for a five year post-doc phase dealing with Complex Networks in Art Research, while in residence at Max-Planck in Rome, BarabásiLab at Northeastern University in Boston, and Dirk Helbing\'s group at ETH Zurich. Schich is the organizing chair of the NetSci symposia on Arts, Humanities, and Complex Networks, an editorial advisor at Leonardo journal, and an editorial board member at Palgrave Communications. He publishes in multiple disciplines and is a prolific speaker, translating his ideas to diverse audiences in academia and the industry. Mauro Martino is an Italian expert in data visualization based in Boston. He created and leads the Cognitive Visualization Lab at IBM Watson in Cambridge, Massachusetts. Mauro was formerly an assistant research professor at Northeastern University working with Albert-Laszlo Barabasi at the Center for Complex Network Research and with David Lazer at The Institute for Quantitative Social Science (IQSS) at Harvard University. Previously, he was a research affiliate with the SENSEable City Lab at Massachusetts Institute of Technology (MIT) in Cambridge. Martino\'s data visualizations were published in the scientific journals Nature, Science, and Proceedings of the National Academy of Sciencesof the United States of America. His projects have been shown at international festivals including Ars Electronica, TEDxCambridge –Thrive, and art galleries including The Serpentine Gallery (London), GAFTA (San Francisco), and Lincoln Center (New York).',
        'logo': 'charting-culture.jpg',
        'type': 'video'
      }
    ];

    this.getTec = getTec;
    this.findById = findById;

    function getTec() {
      return data;
    }
    
    // Util for finding an object by its 'id' property among an array
    function findById(id) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          return data[i];
        }
      }
      return null;
    }
  }

})();
