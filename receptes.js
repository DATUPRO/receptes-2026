const receptes = {
  1: {
    name: 'Paella de l’Adela',
    origen: 'Carrer Sant Miquel, Rubí :P',
    ingredients: [],
    elavoracio: [],
    imatge: 'imatges/1.jpeg',
    id: 1
  },
  2: {
    name: 'Trinxat de la Cerdanya',
    origen: 'Cerdanya (Girona/Lleida)',
    ingredients: [
      '½ col. Preferiblement col d’hivern',
      '2 patates de mida mitjana',
      '2 o 3 rodanxes de botifarra negra per persona',
      '4 talls de cansalada',
      '2 o 3 grans d’all',
      '1 bitxo, si t’agrada el picant',
      '1 got de vi ranci',
      'Sal i pebre'
    ],
    elavoracio: [
      'Bullir 500 g de patates pelades i trossejades en aigua amb sal fins que estiguin gairebé cuites.',
      'Afegir 600 g de col de fulla tallada i continuar la cocció fins que tot estigui ben tendre.',
      'Escórrer bé les verdures i xafar-les amb un tenedor o aixafador fins aconseguir un puré gruixut.',
      'Enrossir 200 g de cansalada (o botifarra negra) en una paella fins que estigui ben cruixent.',
      'Afegir la cansalada al puré de verdures i mesclar bé.',
      'Formar una mena de truita a la paella, donant-li forma rodona i deixant-la coure fins que estigui daurada per ambdues bandes.',
      'Servir ben calent, acompanyat d’un bon vi negre de la zona.'
    ],
    imatge: 'imatges/2.png',
    link: 'https://www.casanoguera.com/ca/trinxat-cerdanya-col-patata/',
    id: 2
  },
  3: {
    name: 'Olla aranesa',
    origen: 'Vall d’Aran',
    ingredients: [
      '120 g fideus grossos',
      '250 g vedella picada',
      '100 g botifarra del perol o salsitxa de porc',
      '1 cuixa de pollastre',
      '1 orella de porc',
      '1 botifarra negra',
      '1 os o punta de pernil',
      '2 porros',
      '3 pastanagues',
      '2 pastanagues blanques o xirivies',
      '¼ col o bròquil',
      '2 dents d’all',
      'Pebre negre mòlt',
      'Sal',
      'Molla de pa',
      '1 ou',
      '80 g mongetes blanques de Bossòst'
    ],
    elavoracio: [
      'Remullar les mongetes de Bossòst durant 12 hores i escórrer-les.',
      'Col·locar-les en una olla gran amb la cuixa de gallina, l’orella de porc, l’os de pernil i totes les verdures tallades (porro, pastanaga, xirivies, col i alls). Cobrir-ho amb 3 litres d’aigua i portar-ho a ebullició.',
      'Desescumar per eliminar impureses i coure a foc mitjà sense tapa durant 2 hores i 30 minuts.',
      'Formar pilotes amb la carn picada de vedella, la botifarra de perol, l’ou, el pa esmicolat i el pebre. Incorporar-les a l’olla i coure 15 minuts.',
      'Afegir la botifarra negra i coure uns minuts més.',
      'Finalment, incorporar fideus gruixuts i/o arròs i coure el temps necessari fins que estigui al punt.'
    ],
    imatge: 'imatges/3.jpg',
    link: 'https://www.directoalpaladar.com/recetas-de-carnes-y-aves/olla-aranesa-receta-tradicional-cocina-catalana-propia-valle-aran',
    id: 3
  },
  4: {
    name: "Patates d'Olot",
    origen: "Garrotxa (Olot)",
    ingredients: [
      "1 quilo de patates mida gran tipus Quebec o patata de muntanya",
      [
        "Per al farcit:",
        "150 g de botifarra de perol (artesanal i boníssima)",
        "100 g de carn picada de vedella o mixta de porc",
        "100 ml de nata líquida per muntar",
        "1 cap d’alls",
        "2 tomàquets de pera o madurs per ratllar",
        "1 culleradeta de concentrat de tomàquet",
        "1 ceba de Figueres o vermella",
        "1 got de vi ranci o Xerès sec",
        "Nou moscada",
        "1 branqueta de romaní fresca",
        "1 fulla de llorer",
        "Sal i pebre"
      ],
      [
        "Per al muntatge:",
        "2 ous (només les clares)",
        "Oli"
      ]
    ],
    elavoracio: [
      [
        "Preparar el farcit:",
        "Trossejar 150 g de botifarra de perol i 100 g de cansalada.",
        "Enrossir-les en una paella amb una mica d'oli fins que estiguin ben daurades.",
        "Afegir-hi 1 ceba picada i 1 tomàquet ratllat; cuinar fins que la ceba estigui transparent.",
        "Incorporar 1 raig de vi negre i 1 raig de conyac; deixar reduir.",
        "Afegir 500 ml de caldo (preferiblement casolà) i cuinar a foc lent fins que la mescla tingui una textura espessa.",
        "Deixar refredar i reposar a la nevera durant 24 hores."
      ],
      [
        "Preparar les patates:",
        "Pelar 4-5 patates de la varietat Kennebec.",
        "Tallar-les amb una mandolina en làmines fines.",
        "Fregir les làmines en oli calent fins que estiguin daurades, però no cruixents.",
        "Retirar-les i deixar-les escórrer sobre paper absorbent."
      ],
      [
        "Muntar les patates d'Olot:",
        "Col·locar una làmina de patata sobre una superfície plana.",
        "Posar una cullerada del farcit refredat al centre.",
        "Cobrir amb una altra làmina de patata.",
        "Premsar les vores amb els dits per segellar-les.",
        "Batre un ou i submergir les patates farcides en l'ou batut.",
        "Fregir-les en oli calent fins que estiguin ben daurades i cruixents.",
        "Nota: aquest plat es pot acompanyar amb una salsa de tomàquet casolana o una amanida verda per equilibrar els sabors."
      ]
    ],
    imatge: "imatges/4.jpg",
    link:"https://www.casanoguera.com/ca/patates-olot/",
    id: 4
  },
  5: {
    name: "Suquet de Peix del Baix Empordà",
    origen: "Baix Empordà (Roses, Palafrugell, Palamós)",
    ingredients: [
      "800 g de peix variat (lluç, rap, llobarro, gambes, musclos, etc.)",
      "2 tomàquets madurs",
      "1 ceba",
      "2 grans d’all",
      "1 fulla de llorer",
      "½ copa de vi blanc",
      "½ litre de brou de peix",
      "Oli d’oliva verge extra",
      "Sal i pebre",
      "Pebre vermell dolç (opcional)",
      "Allioli (opcional, per servir)"
    ],
    elavoracio: [
      "Netejar el peix i tallar-lo en trossos grans. Pelar els musclos i gambes si cal.",
      "Tallar la ceba i els tomàquets a trossos petits i picar els alls.",
      "En una cassola gran o paella profunda, escalfar oli d’oliva a foc mitjà-alt i sofregir la ceba fins que estigui transparent.",
      "Afegir els tomàquets, els alls i la fulla de llorer. Cuinar fins que els tomàquets es desfacin i es formi un sofregit.",
      "Incorporar el peix i remenar amb cura.",
      "Abocar la meitat del vi blanc i deixar reduir una mica.",
      "Afegir el brou de peix calent i, si es vol, una mica de pebre vermell dolç.",
      "Portar a ebullició i baixar el foc a mitjà; deixar coure 10–15 minuts fins que el peix estigui cuit.",
      "Ajustar de sal i pebre i servir calent, opcionalment amb una culleradeta d’allioli i acompanyat de pa torrat."
    ],
    imatge: "imatges/5.jpg",
    link:"https://www.fira-apat.cat/suquet-de-peix/",
    id: 5
  },
  6: {
    name: "Clotxa",
    origen: "Ribera d’Ebre",
    ingredients: [
      "½ pa de pagès",
      "2 arengades",
      "2 tomàquets",
      "1 ceba",
      "1 cabeça d’alls",
      "Oli d’oliva verge extra",
      "Olives (per acompanyar)"
    ],
    elavoracio: [
      "Preparar una barbacoa o llar de foc perquè hi hagi una bona brasa; si no, es pot fer al forn de casa.",
      "Rentar i assecar la ceba, els tomàquets i la cabeça d’alls. Escalivar-los a la graella de la barbacoa o en una safata al forn.",
      "Coure les arengades a la brasa; si es fan al forn, embolicar-les amb paper d’alumini perquè no facin tanta olor.",
      "Buidar el pa traient-ne la molla i reservar-la. Ruixar el pa amb oli d’oliva verge extra. Pelar els tomàquets i posar-los dins del pa buit. Amb una cullera, aixafar-los perquè quedi com un pa amb tomàquet.",
      "Omplir el pa amb dos o tres alls escalivats, la ceba a trossos i les arengades pelades i sense espina.",
      "Torrar la molla del pa reservada, ruixar-la amb una mica d’oli i tapar la clotxa."
    ],
    imatge: "imatges/6.jpeg",
    link:"https://www.magradacatalunya.cat/2019/11/03/recepta-de-cuina-com-es-fa-clotxa/",
    id: 6
  },
  7: {
    name: 'Faves a la catalana',
    origen: 'Bages, Osona, Baix Llobregat',
    ingredients: [
      '800g de faves fresques i tendres',
      '1 botifarra negra (uns 200g)',
      '70g de cansalada',
      '2 cebes tendres o cebetes',
      '4 alls tendres',
      '1 ram d’herbes (llorer, romaní i menta)',
      '1 got d’anís, vi ranci, moscatell, vi blanc o sidra',
      'Brou de verdures',
      'Oli d’oliva',
      'Sal',
      'Pebre',
      '(Opcional) 1 os de pernil'
    ],
    elavoracio: [
      'Pela les faves i reserva-les.',
      'En una cassola amb oli, daura la cansalada tallada a daus i els alls tendres. Retira i reserva.',
      'Sofregeix la ceba a la mateixa cassola fins que quedi daurada.',
      'Afegeix la botifarra negra tallada a trossos grans i deixa-la coure uns minuts.',
      'Incorpora les faves, la cansalada i les herbes aromàtiques. Salpebra al gust.',
      'Afegeix el got d’anís i una mica de brou. Deixa que faci xup-xup a foc suau 30-45 minuts, fins que les faves quedin tendres.',
      'Serveix al gust, amb més o menys brou segons prefereixis.'
    ],
    imatge: 'imatges/7.jpg',
    link: 'https://www.casanoguera.com/ca/faves-a-la-catalana/',
    id: 7
  },

  8: {
    name: 'Crema catalana',
    origen: 'Tot Catalunya, especialment Barcelonès',
    ingredients: [
      '1 litre de llet',
      '200g de sucre',
      '8 gemmes d’ou',
      '25g de farina de blat de moro (maizena)',
      'Pell d’1 llimona',
      '1 branca de canyella',
      'Sucre per cremar'
    ],
    elavoracio: [
      'Barreja un got de llet amb la maizena en un bol fins que es dissolgui.',
      'Afegeix-hi els rovells i el sucre i bat bé fins que quedi una mescla homogènia.',
      'Escalfa la resta de la llet en un cassó amb la canyella i la pell de llimona. Quan arrenqui el bull, retira-ho del foc i treu-ne les aromes.',
      'Incorpora la barreja d’ous i sucre a la llet, remenant perquè s’integri.',
      'Torna a posar el cassó al foc baix i remena sense parar fins que espesseixi i torni a arrencar el bull.',
      'Retira del foc i reparteix la crema en recipients individuals o en una safata. Deixa refredar.',
      'Abans de servir, cobreix amb sucre i crema’l amb un cremador o una pala fins que quedi caramel·litzat.'
    ],
    imatge: 'imatges/8.webp',
    link: 'https://elfornerdealella.com/ca/crema-catalana/',
    id: 8
  },
  9: {
    name: 'Pollastre rostit amb prunes i pinyons',
    origen: 'Vallès Oriental',
    ingredients: [
      '1 pollastre de pagès tallat en 8 trossos + ales',
      '2 cebes grans en juliana',
      '1 cabeça d’alls sencera',
      '(Opcional) 1 tomàquet de pera tallat per la meitat',
      '1 got de brandi o vi blanc',
      '1 fulla de llorer',
      '1 branca de canyella',
      '(Opcional) farigola o orenga',
      '1 got de brou de pollastre o aigua mineral',
      '30g de pinyons',
      '12-18 prunes amb pinyol (3 per persona)',
      'Sal i pebre negre',
      '2 cullerades soperes de llard',
      'Oli d’oliva verge extra'
    ],
    elavoracio: [
      'Posa les prunes en remull.',
      'Salpebra el pollastre i enrosseix-lo en una cassola amb oli i llard, juntament amb la branca de canyella, fins que quedi ben daurat.',
      'Afegeix la ceba en juliana, la cabeça d’alls sencera i el llorer. Si vols, incorpora el tomàquet partit per la meitat. Tapa i deixa coure a foc lent uns 40 minuts.',
      'Dona la volta al pollastre, afegeix el brandi o vi blanc i deixa reduir uns minuts. Si vols afegir farigola o orenga, fes-ho ara.',
      'Torna a tapar i cou 40 minuts més, afegint cada 10 minuts una mica de brou o aigua i ruixant el pollastre amb el suc.',
      'Incorpora les prunes i els pinyons i deixa rostir 15 minuts més.',
      'El plat queda molt millor si el deixes reposar d’un dia per l’altre.'
    ],
    imatge: 'imatges/9.webp',
    link: 'https://www.factorgastronomic.com/ingredient-principal/receptes-de-carn/recepta-pollastre-rostit-amb-prunes-i-pinyons/',
    id: 9
  },
  10: {
    name: 'Coca de recapte',
    origen: 'Tarragona, Lleida. I tot Catalunya.',
    ingredients: [
      [
        'Massa:',
        '500g de farina de força',
        '30g de llevat premsat',
        '250g d’aigua tèbia',
        '100g d’oli d’oliva o mantega',
        'Sal'
      ],
      [
        'Guarnició:',
        'Escalivada (pebrot, albergínia i ceba)',
        'Botifarra (opcional)',
        '4 arengades o anxoves'
      ]
    ],
    elavoracio: [
      'Diluïu el llevat en l’aigua. Formeu un volcà amb la farina i afegiu-hi la resta d’ingredients (excepte l’oli). Treballeu la massa fins que sigui suau i es desenganxi fàcilment del marbre.',
      'Tapeu la massa amb un drap i deixeu-la reposar en un lloc temperat 3 hores com a mínim.',
      'Torneu a treballar la massa, aquesta vegada amb l’oli fins que l’absorbeixi i quedi suau. Deixeu reposar 30 minuts més, tapada.',
      'Mentrestant, escaliveu els pebrots, les albergínies i les cebes. Peleu i talleu a tires.',
      'Empolsineu farina en una safata de forn o poseu-hi paper i esteneu-hi la massa amb les mans mullades d’oli.',
      'Col·loqueu damunt les verdures, el tomàquet, i les arengades o la botifarra. Remeneu amb oli i salpebreu.',
      'Preescalfeu el forn a 160 °C i coeu la coca uns 30 minuts.'
    ],
    imatge: 'imatges/10.jpg',
    link: 'https://gastronomicament.cat/ca/recepta/recepta-de-coca-de-recapte',
    id: 10
  },

  11: {
    name: 'Fesols amb botifarra de perol',
    origen: 'Comarques gironines i del Maresme',
    ingredients: [
      '4 botifarres de perol',
      '600 g de fesols secs',
      'Sal',
      'Oli d’oliva'
    ],
    elavoracio: [
      'Remulla els fesols en aigua abundant durant un mínim de 8 hores.',
      'Posar a bullir una olla amb aigua. Quan arrenqui el bull, afegeix els fesols escorreguts i un pols de sal. Deixa coure 15-20 minuts.',
      'Mentrestant, en una paella amb un raig d’oli o una culleradeta de llard de porc, passa les botifarres fins que quedin rosses per cada banda.',
      'Fes un tall longitudinal a les botifarres perquè s’esparrecin.',
      'Munta el plat amb un llit de fesols i posa damunt la botifarra esparracada. Amaneix amb un raig d’oli i serveix.'
    ],
    imatge: 'imatges/11.jpg',
    link: 'http://www.cuinaperllaminers.com/2010/04/fesols-amb-botifarra-de-perol.html',
    id: 11
  },

  12: {
    name: 'Calçots amb salsa romesco',
    origen: 'Alt Camp',
    ingredients: [
      '1 nyora o 1 pebrot xoricer',
      '4 tomàquets madurs',
      '1 cap d’all',
      '1 got d’oli d’oliva',
      '150 g d’ametlles torrades o avellanes torrades',
      '1 llesca de pa dur o pa fregit',
      'Julivert (opcional)'
    ],
    elavoracio: [
      'Hidratació de la nyora: Deixa la nyora o pebrot xoricer en aigua tota la nit perquè s’estovi.',
      'Escalibat de tomàquets i all: Fes un tall en creu a la base dels tomàquets i rosteix-los amb els alls al forn 30-40 minuts.',
      'Picada al morter: Posa sal, pa fregit o dur, i les ametlles o avellanes al morter. Pica fins obtenir una barreja homogènia, deixant alguns trossos visibles.',
      'Incorporació dels ingredients rostits: Pela els tomàquets i treu la polpa de la nyora i dels alls. Afegeix-ho tot al morter amb mig got d’oli i, opcionalment, julivert. Tritura fins aconseguir la textura desitjada.',
      'Ajust de textura i sabor: Afegiu més oli si cal i rectifica amb sal, all o un toc de bitxo per un lleuger picant.'
    ],
    imatge: 'imatges/12.png',
    link: 'https://www.forpasgastronomia.com/ca/recepta-tradicional-de-la-salsa-de-calcots-romesco',
    id: 12
  },
  13: {
    name: 'Xató del Vendrell',
    origen: 'Baix Penedès',
    ingredients: [
      [
        'Per a la salsa:',
        '100 g dametlles',
        '80 g d’avellanes',
        '½ ceba',
        '½ cabeça d’alls',
        '2 tomacons',
        '1 nyora',
        '1 llesca de pa',
        '½ bitxo (opcional)',
        '1 polsim de pebre negre',
        'Pebre vermell dolç al gust',
        'Sal',
        'Oli d’oliva verge',
        'Vinagre al gust'
      ],
      [
        'Per al plat:',
        '2 escaroles',
        '4 filets d’anxova',
        '120 g de bacallà esqueixat',
        '120 g de tonyina',
        '80 g d’olives arbequines'
      ]
    ],
    elavoracio: [
      'Escaliva els tomàquets, la ceba i els alls. Escalda la nyora i pela-la. Fregiu la llesca de pa i reserva-la.',
      'Trinxa les ametlles i avellanes al morter i sal al gust. Forma una pasta fina.',
      'Afegeix la ceba, la nyora, el pa fregit, els pebrots vermell i negre i, si vols, mig bitxo. Barreja bé.',
      'Incorpora els alls i els tomàquets escalivats. Tritura fins obtenir una salsa homogènia i afegeix oli i vinagre al gust.',
      'Barreja la salsa amb les escaroles a la nevera.',
      'Serveix amb bacallà, tonyina, anxoves i olives arbequines.'
    ],
    imatge: 'imatges/13.png',
    link: 'https://www.cuina.cat/receptes/xato-vendrell_10180986_117.html',
    id: 13
  },
  14: {
    name: 'Sopa de farigola',
    origen: 'Moianès',
    ingredients: [
      'Farigola fresca',
      '4 llesques de pa',
      'Oli d’oliva verge extra',
      '1 l de brou de pollastre',
      '4 rovells d’ou',
      'Aigua mineral',
      '125 g de salsa de soja',
      '4 grans d’all',
      '1 cullerada de llard de porc',
      'Vi ranci',
      'Sal'
    ],
    elavoracio: [
      'Posar oli i llard en una paella. Talla els alls i fes-los “ballar” a la paella.',
      'Afegeix el vi ranci i deixa que s’evapori l’alcohol.',
      'Incorpora el brou de pollastre desgreixat i colat.',
      'Afegeix la farigola i deixa bullir tot junt 10 minuts. Cola el brou i rectifica de sal.',
      'En un recipient petit, barreja 125 g de soja amb 125 g d’aigua mineral i afegeix els 4 rovells d’ou crus. Deixa marinar 6 hores a la nevera.',
      'Serveix el brou amb crostonets de pa, col·loca-hi el rovell marinat sobre el pa, afegeix branquetes de farigola fresca i un raig d’oli verge extra.'
    ],
    imatge: 'imatges/14.jpg',
    link: 'https://www.3cat.cat/tv3/cuines/recepta/sopa-de-farigola/9150/',
    id: 14
  },

  15: {
    name: 'Escudella i carn d’olla',
    origen: 'Barcelonès, Moianès i Solsonès',
    ingredients: [
      [
        'Per al brou:',
        '7 litres d’aigua',
        '500 g costella de vedella',
        '500 g corder (codel de xai)',
        '1 peu de porc fresc',
        '2 cuixes de pollastre',
        '400 g carcassa de pollastre',
        '500 g gallina',
        '300 g orella de porc',
        '2 ossos salats de porc',
        'Espinada de vedella o os de genoll',
        '1 botifarra negra',
        '1 botifarra de perol',
        '1 nap gran o 2 mitjans',
        '1 xirivia gran o 2 mitjanes',
        '4-5 pastanagues grans',
        '2 branques d’api',
        '3 porros',
        '3 patates grans',
        '¼ de col',
        '1 ceba',
        '500 g cigrons crus (50 g per persona)',
        'Sal al gust'
      ],
      [
        'Per a la pilota i galets farcits:',
        '500 g carn picada de vedella',
        '500 g botifarra crua',
        '80 galets grans',
        '1 gra d’all',
        'Julivert picat',
        '1 ou',
        '2 llesques de pa de motlle sense escorça',
        '30 ml de llet',
        'Pa ratllat',
        '½ culleradeta nou moscada',
        '½ culleradeta canyella en pols',
        'Brandy',
        'Pinyons',
        'Farina',
        'Sal i pebre'
      ]
    ],
    elavoracio: [
      'El dia abans: Poseu tota la carn en remull amb aigua i sal. Renteu els ossos per eliminar impureses i guardeu-ho a la nevera.',
      'Remulleu els cigrons en aigua amb bicarbonat durant la nit.',
      'Remulleu el pa en llet. Piqueu la botifarra, la carn de vedella, l’all i el julivert. Afegiu l’ou, les espècies, el brandy i el pa remullat.',
      'Barregeu bé i afegiu pa ratllat fins obtenir una massa homogènia. Reserveu a la nevera.',
      'El mateix dia: Escalfeu el forn a 250 °C i rostiu els ossos i carcasses durant 35 minuts, donant-los la volta a mitja cocció.',
      'Col·loqueu els ossos rostits en una olla gran amb 5 litres d’aigua i porteu a ebullició, retirant l’escuma.',
      'Afegiu la resta de carns i totes les hortalisses excepte patata, pastanaga i col. Bulliu, retirant escuma.',
      'Passada una hora i mitja, retireu peus, orella, costella i cuixes de pollastre. Afegiu 2 litres d’aigua més i bulliu una altra hora i mitja.',
      'Quan falti una hora per acabar, afegiu els cigrons escorreguts, la patata, la pastanaga i la col. Ajusteu de sal.',
      'Formeu pilotes grans amb la massa de pilota i afegiu els pinyons. Enfarineu i poseu-les a l’olla.',
      'Punxeu la botifarra negra i la de perol i afegiu-les senceres a l’olla. Coeu 10 minuts més.',
      'Deixeu reposar el brou i retireu el greix solidificat per obtenir un brou més lleuger. Coleu-lo finament.',
      'Precoeu els galets 15 minuts, escorreu-los i refresqueu-los amb aigua freda.',
      'Ompliu els galets amb la massa de pilota restant.',
      'Just abans de servir, bulliu els galets farcits 5 minuts al brou.'
    ],
    imatge: 'imatges/15.jpg',
    link: 'https://www.casanoguera.com/ca/escudella-nadal/',
    id: 15
  },
  16: {
    name: 'Bacallà amb samfaina',
    origen: 'Bages i Osona - comarques interiors',
    ingredients: [
      [
        'Bacallà:',
        '4 talls de morro de bacallà (dessalat)',
        'Farina',
        'Oli d\'oliva verge extra'
      ],
      [
        'Per a la samfaina:',
        'Pebrot vermell',
        'Albergínia',
        'Carbassó',
        'Ceba',
        'Tomàquet',
        'Oli d’oliva verge extra',
        'Sal',
        'Sucre (una mica)',
        '1 fulla de llorer'
      ]
    ],
    elavoracio: [
      'Samfaina: Sofregiu la ceba tallada petita. Afegiu-hi el pebrot, l’albergínia i el carbassó a daus i deixeu que coguin uns minuts. Incorporeu el tomàquet, el llorer i una mica de sucre. Feu-ho coure a foc lent fins que quedi una salsa ben confitada. (Opcional: fregir a part l’albergínia i el carbassó enfarinats per donar més textura cruixent.)',
      'Bacallà: Assequeu els talls de bacallà, enfarineu-los i fregiu-los amb oli d’oliva fins que quedin daurats.',
      'Final: Poseu la samfaina en una cassola amb una mica de l’oli de fregir el bacallà, afegiu-hi el bacallà i deixeu fer “xup-xup” 3-4 minuts.'
    ],
    imatge: 'imatges/16.jpg',
    link: 'https://www.receptes.cat/recepta3749/bacalla_amb_samfaina',
    id: 16
  },
  17: {
    name: 'Cargols a la llauna',
    origen: 'Terres de Lleida (Segrià, Noguera, Pla d’Urgell)',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 17
  },
  18: {
    name: 'Mel i mató',
    origen: 'Tot Catalunya, popular a l’Anoia',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 18
  },
  19: {
    name: 'Tupí de formatge',
    origen: 'Solsonès',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 19
  },
  20: {
    name: 'Mongetes del ganxet amb botifarra',
    origen: 'Vallès Occidental',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 20
  },
  21: {
    name: 'Arròs negre amb sípia i cloïsses',
    origen: 'Tarragonès',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 21
  },
  22: {
    name: 'Coca de llardons',
    origen: 'Pirineus (Alt Urgell, Pallars, Cerdanya…)',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 22
  },
  23: {
    name: 'Peus de porc ofegats a la catalana',
    origen: 'Osona',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 23
  },
  24: {
    name: 'Pèsols ofegats amb botifarra negra',
    origen: 'Maresme',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 24
  },
  25: {
    name: 'Xuixos de Girona',
    origen: 'Gironès',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 25
  },
  26: {
    name: 'Carquinyolis',
    origen: 'Gironès i Maresme',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 26
  },
  27: {
    name: 'Arròs de muntanya amb bolets i costella',
    origen: 'Berguedà',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 27
  },
  28: {
    name: 'Truita de riu fregida',
    origen: 'Ripollès, Berguedà, Cerdanya, Alt Urgell (Pirineus i prepirineus catalans)',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 28
  },
  29: {
    name: 'Menjablanc de Reus',
    origen: 'Baix Camp',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 29
  },
  30: {
    name: 'Pollastre amb escamarlans',
    origen: 'La Selva',
    ingredients: [],
    elavoracio: [],
    imatge: '',
    id: 30
  }
};
