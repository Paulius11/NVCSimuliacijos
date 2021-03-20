// Pagal Rolando http://empatijosbendruomene.lt/

export const PSEUDO_JAUSMAI = ["Apgautas", "Apleistas", "Atstumtas", "Baudžiamas", "Globojamas", "Grasinamas", "Ignoruojamas", "Įkalintas", "Įstumtas į kampą", "Išduotas", "Išgirstas", "Išnaudojamas", "Išstumtas", "Įžeistas", "Kaltinamas", "Kritikuojamas", "Mylimas", "Manipuliuojamas", "Negerbiamas", "Neišgirstas", "Nematomas", "Nepageidaujamas", "Nepripažintas", "Nereikalingas", "Nesuprastas", "Nesvarbus", "Nugalėtas", "Nuvertintas", "Nuviltas", "Pagerbtas", "Palaikomas", "Paliktas", "Spaudžiamas", "Sumenkintas", "Suprastas", "Teisiamas", "Užgniaužtas", "Užpultas" ,"Varginamas", "Verčiamas" ]

export const NEEDS_COMMON_ROL= [
  { title: '', elements: []  },
  { title: 'Ryšys', elements: ['Ryšys', 'Priėmimas','Pagarba', 'Dalijimasis', 'Įsitraukimas', 'Pritarimas', 'Švelnumas', 'Įvertinimas', 'Priklausymas', 'Bendrumas', 'Rūpinimasis', 'Atidumas', 'Globa', 'Artumas', 'Komunikacija', 'Bendravimas', 'Bendruomenė', 'Draugija', 'Draugystė', 'Atjauta', 'Užuojauta', 'Dėmesys', 'Empatija', 'Įkvėpimas', 'Vientisumas', 'Intymumas', 'Meilė', "Partnerystė",'Buvimas kartu',  'Savigarba', 'Savęs priėmimas', 'Rūpinimasis savimi', 'Ryšys su savimi', 'Savęs išreiškimas', 'Girdėti ir būti išgirstu', 'Bendra tikrovė', 'Dalinimasis tikrove', 'Stabilumas', 'Palaikymas', 'Pažinti', 'Būti pažintam', 'Pastebėti', 'Būti pastebėtam', 'Pasitikėjimas', 'Supratimas']  },
  { title: 'Prasmė', elements: ['Prasmė', 'Sąmoningumas', 'Šventimas', 'Iššūkis', 'Kūrybiškumas', 'Aiškumas', 'Skaidrumas', 'Sugebėjimas', 'Savimonė', 'Prisidėjimas', 'Atradimas', 'Naudingumas', 'Veiksmingumas', 'Produktyvumas', 'Pasisekimas', 'Augimas', 'Mokymasis', 'Gedėjimas', 'Veiksmas', 'Dalyvavimas', 'Požiūris', 'Perspektyva', 'Galimybė', 'Pažanga', 'Progresas', 'Tikslas', 'Stimulas', 'Tikėjimas' ]  },
  { title: 'Taika', elements: ['Taika', 'Ramybė', 'Pusiausvyra', 'Balansas', 'Pakankamumas', 'Grožis', 'Bendrystė', 'Lengvumas', 'Sklandumas', 'Darna', 'Viltis', 'Tvarka', 'Nuoseklumas' ]  },
  { title: 'Autentiškumas', elements: ['Autentiškumas','Sąžiningumas', 'Principingumas', 'Buvimas' ]  },
  { title: 'Fizinė Gerovė', elements: ['Fizinė Gerovė' ,'Oras', 'Vanduo', 'Komfortas', 'Maistas', 'Judėjimas', 'Poilsis', 'Saugumas', 'Seksualumo išraiška', 'Pastogė', 'Prisilietimas' ]  },
  { title: 'Autonomija', elements: ['Autonomija', 'Laisvė', 'Pasirinkimas', 'Orumas', 'Nepriklausomybė', 'Saviraiška', 'Erdvė', 'Spontaniškumas' ]  },
  { title: 'Žaidimas', elements: ['Žaidimas', 'Nuotykis', 'Susijaudinimas', 'Entuziazmas', 'Linksmumas', 'Smagumas', 'Humoras', 'Džiaugsmas', 'Atsipalaidavimas', 'Stimuliavimas' ]  },
];


export const NEEDS_MET_ROL = [
  { needs:"met", title: 'Mylintis', elements: ['Atjaučiantis', 'Gailestingas', 'Draugiškas', 'Meilus', 'Atviraširdis', 'Simpatizuojantis', 'Švelnus', 'Šiltas' ]  },
  { needs:"met", title: 'Palaima', elements: ['Ekstazė', 'Pakili nuotaika', 'Žvalus' ]  },
  { needs:"met", title: 'Džiaugsmas', elements: ['Linksmas', 'Malonumas', 'Džiugesys', 'Laimė' ]  },
  { needs:"met", title: 'Įsitraukęs', elements: ['Budrus', 'Smalsus', 'Pakerėtas', 'Transe', 'Sužavėtas', 'Susidomėjęs', 'Suintriguotas' ]  },
  { needs:"met", title: 'Atsigavęs', elements: ['Pagyvėjęs', 'Atjaunėjęs', 'Atsinaujinęs', 'Pailsėjęs', 'Atsigaivinęs' ]  },
  { needs:"met", title: 'Taikus', elements: ['Ramus', 'Aiškumas', 'Patogumas', 'Balansas', 'Patenkintas', 'Pasiruošęs', 'Atsipalaidavęs', 'Palengvėjimas', 'Giedras', 'Romus' ]  },
  { needs:"met", title: 'Įkvėptas', elements: ['Stebėtis', 'Nuostaba']  },
  { needs:"met", title: 'Viltingas', elements: ['Laukiantis', 'Padrąsintas', 'Optimistiškas']  },
  { needs:"met", title: 'Dėkingas', elements: ['Vertinantis', 'Pakylėtas', 'Palytėtas']  },
  { needs:"met", title: 'Sujaudintas', elements: ['Gyvas', 'Judrus', 'Užsidegęs', 'Sužadintas', 'Susižavėjęs', 'Nekantraujantis', 'Trokštantis', 'Energingas', 'Entuziastingas', 'Apsvaigęs', 'Gyvybingas', 'Aistringas', 'Kunkuliuojantis', 'Virpantis']  },
  { needs:"met", title: 'Pasitikintis', elements: ['Įgalintas', 'Judrus', 'Užsidegęs', 'Sužadintas', 'Susižavėjęs', 'Nekantraujantis', 'Trokštantis', 'Energingas', 'Entuziastingas', 'Apsvaigęs', 'Gyvybingas', 'Aistringas', 'Kunkuliuojantis', 'Virpantis']  },
];

export const NEEDS_UNMET_ROL = [
  { needs:"unmet", title: 'Sumišęs', elements: ['Priblokštas', 'Apsiblausęs', 'Dvejojantis', 'Ambivalentiškas', 'Neryžtingas', 'Pasimetęs', 'Suglumęs', 'Persiplėšęs'  ]  },
  { needs:"unmet", title: 'Įtampa', elements: ['Kaprizingas', 'Susikrimtęs', 'Pamišęs', 'Bruzdus', 'Nepasėdus', 'Nerimastingas', 'Nervingas', 'Sukrėstas', 'Nerimstantis', 'Nenustygstantis', 'Stresuojantis', 'Sugniuždytas']  },
  { needs:"unmet", title: 'Neramus', elements: ['Susijaudinęs','Sunerimęs','Sutrikęs','Susinervinęs', 'Šokiruotas', 'Pritrenktas', 'Nustebęs', 'Audringas', 'Nepatogumas', 'Susirūpinęs', 'Permainingas'  ]  },
  { needs:"unmet", title: 'Išsigandęs', elements: ['Nuogąstaujantis', 'Baimė', 'Nuojauta', 'Nepatiklus', 'Panika', 'Suakmenėjęs', 'Įtarus', 'Atsargus', 'Apdairus' ]  },
  { needs:"unmet", title: 'Pažeidžiamas', elements: ['Trapus', 'Bejėgis', 'Nesaugus', 'Santūrus', 'Uždaras', 'Užsisklendęs', 'Jautrus', 'Drebantis' ]  },
  { needs:"unmet", title: 'Susigėdęs', elements: ['Drovus', 'Gėda', 'Savigrauža', 'Kaltas', 'Susinepatoginęs' ]  },
  { needs:"unmet", title: 'Atsiskyręs', elements: ['Padrikas', 'Nerišlus', 'Svetimas', 'Nutolęs', 'Nuobodžiaujantis', 'Šaltas', 'Tolimas', 'Išsiblaškęs', 'Abejingas', 'Nutirpęs', 'Nusišalinęs', 'Nesuinteresuotas', 'Atsitraukęs', 'Užsisklendęs'  ]  },
  { needs:"unmet", title: 'Susierzinęs', elements: ['Apmaudas', 'Irzlus', 'Nepatenkintas', 'Suirzęs', 'Frustracija', 'Nekantrus', 'Sudirgęs']  },
  { needs:"unmet", title: 'Antipatija', elements: ['Priešiškas', 'Pasibaisėjęs', 'Panieka', 'Šleikštulys', 'Nemėgimas', 'Neapykanta', 'Siaubas']  },
  { needs:"unmet", title: 'Piktas', elements: ['Įsiutęs', 'Pasiutęs', 'Įniršęs', 'Pasipiktinęs', 'Įtūžęs', 'Įsižeidęs', 'Kerštingas', 'Pagieža']  },
  { needs:"unmet", title: 'Nuovargis', elements: ['Išsekęs', 'Išsieikvojęs', 'Mieguistas', 'Apatiškas', 'Išvargęs', 'Nusikamavęs']  },
  { needs:"unmet", title: 'Liūdnas', elements: ['Prislėgtas', 'Nusiminęs', 'Nusivylęs', 'Nedrąsus', 'Beviltiškas', 'Vienišas', 'Niūrus', 'Melancholija']  },
  { needs:"unmet", title: 'Ilgesys', elements: ['Pavydas', 'Pavyduliavimas', 'Troškimas', 'Nostalgija', 'Kamavimasis']  },
  { needs:"unmet", title: 'Skausmas', elements: ['Agonija', 'Sielvartas', 'Širdgėla', 'Gedėjimas', 'Susisielojęs','Sužeistas', 'Nelaimingas', 'Apgailestaujantis', 'Atgailaujantis' ]  },
];
// Pagal Ievos lapus

export const NEEDS_MET_IEVA = [
    { needs:"met", title: 'Ramybė', elements: ['Ramus', 'Romus', 'Atsipalaidavęs', 'Taikus', 'Tylus', 'Laisvas', 'Patenkintas', 'Susitelkęs', 'Komfortiškai besijaučiantis', 'Įsižeminęs', 'Stabilus', 'Pasitikintis', 'Išpildęs save', 'Švelnus', 'Jaučiantis palengvėjimą' ]  },
    { needs:"met", title: 'Laimė', elements: ['Džiaugsmingas', 'Pakylėtas', 'Judrus', 'Laimingas', 'Linksmas', 'Susižavėjęs', 'Džiugus', 'Palaimingas']  },
    { needs:"met", title: 'Smalsumas', elements: ['Susidomėjęs', 'Įsitraukęs', 'Laukiantis', 'Įkvėptas', 'Suintriguotas']  },
    { needs:"met", title: 'Pasitikėjimas', elements: ['Jaučiantis galią', 'Stiprus', 'Pasitikintis', 'Viltingas', 'Optimistiškas', 'Besididžiuojantis']  },
    { needs:"met", title: 'Atjauta', elements: ['Pakantus', 'Šiltas', 'Atviras', 'Mylintis', 'Sujaudintas', 'Prieraišus' , 'Draugiškas', 'Užjaučiantis']  },
    { needs:"met", title: 'Atgaiva', elements: ['Pailsėjęs', 'Pagyvėjęs', 'Atgijęs', 'Atsinaujinęs', 'Pasikrovęs', 'Žvalus' ]  },
    { needs:"met", title: 'Gyvybingumas', elements: ['Budrus', 'Entuziastingas', 'Švytintis', 'Susijaudinęs', 'Suvirpintas', 'Gyvas', 'Nekantraujantis', 'Aistringas', 'Energingas', 'Ekstazės pagautas', 'Spinduliuojantis', 'Abstulbintas' ]  },
    { needs:"met", title: 'Dėkingumas', elements: ['Įvertinantis', 'Atviraširdis', 'Padrąsintas', 'Nuolankus']  },
  ];
  
export const NEEDS_UNMET_IEVA = [
    { needs:"unmet", title: 'Nuovargis', elements: ['Priblokštas', 'Pavargęs', 'Sukrėstas', 'Perdegęs', 'Išsekęs', 'Mieguistas' ]  },
    { needs:"unmet", title: 'Sumišimas', elements: ['Susipainiojęs', 'Suglumęs', 'Sumišęs', 'Sutrikęs', 'Abejojantis', 'Pasimetęs', 'Dvejojantis', 'Svyruojantis' ]  },
    { needs:"unmet", title: 'Pažeidžiamumas', elements: ['Trapus', 'Nepasitikintis', 'Jautrus', 'Sutrikęs', 'Užsisklendęs' ]  },
    { needs:"unmet", title: 'Liūdesys', elements: ['Liūdnas', 'Nusiminęs', 'Vienišas', 'Nostalgiškas', 'Melancholiškas', 'Bejėgis', 'Nusivylęs', 'Depresyvus', 'Praradęs viltį', 'Susigraužęs', 'Prislėgtas', 'Ilgesingas', 'Niūrus', 'Jaučiantis apmaudą' ]  },
    { needs:"unmet", title: 'Baimė', elements: ['Išsigandęs', 'Nuogastaujantis', 'Paralyžuotas', 'Įtariantis', 'Jaučiantis paniką' ]  },
    { needs:"unmet", title: 'Skausmas', elements: ['Jaučiantis kaltę', 'Vienišas', 'Sielvartaujantis', 'Nepatiklus', 'Kenčiantis', 'Nelaimingas', 'Jaučiantis širdgėlą', 'Apgeilestaujantis' ]  },
    { needs:"unmet", title: 'Nerimas', elements: ['Susirūpinęs', 'Sudirgęs', 'Nervingas', 'Jaučiantis stresą', 'Bejėgis' ]  },
    { needs:"unmet", title: 'Susierzinimas', elements: ['Jaučiantis frustraciją', 'Išsekęs', 'Nekantrus' ]  },
    { needs:"unmet", title: 'Agitacija', elements: ['Susijaudinęs', 'Nerimastingas', 'Sutrikęs', 'Šokiruotas' ]  },
    { needs:"unmet", title: 'Pavydas', elements: ['Pavyduliaujantis', 'Įtarus' ]  },
    { needs:"unmet", title: 'Gėda', elements: ['Drovus', 'Susigėdęs' ]  },
    { needs:"unmet", title: 'Pyktis', elements: ['Sutrikęs', 'Įsiutęs', 'Kerštingas', 'Įniršęs', 'Pasipiktinęs', 'Pagiežingas' ]  },
    { needs:"unmet", title: 'Neapykanta', elements: ['Priešiškas', 'Pasibjaurėjęs', 'Jaučiantis antipatiją', 'Jaučiantis neapykantą', 'Jaučiantis panieką' ]  },
    { needs:"unmet", title: 'Nuobodulys', elements: ['Nuobodžiaujantis', 'Apatiškas', 'Sustingęs', 'Abejingas', 'Nutolęs', 'Užsivėręs', 'Atsiskyręs' ]  },
  ];


export const NEEDS_COMMON_IEVA = [
    { title: 'Fizinė gerovė', elements: ['Oras', 'Šviesa', 'Mityba', 'Vanduo', 'Šiluma', 'Poilsis', 'Miegas', 'Sveikata', 'Pastogė', 'Prieglobstis', 'Judėjimas', 'Fiziniai pratimai' ]  },
    { title: 'Prisilietimas', elements: ['Seksualinė išraiška', 'Saugumas', 'Komfortas', 'Emocinis saugumas', 'Apsauga nuo skausmo', 'Išsaugojimas', 'Tausojimas' ]  },
    { title: 'Harmonija', elements: ['Taika', 'Grožis', 'Ramybė', 'Rimtis', 'Pusiausvyra', 'Atsipalaidavimas', 'Tyla', 'Tvarka', 'Lengvumas', 'Tvarumas', 'Darna', 'Kongruencija', 'Lygybė', 'Balansas', 'Stabilumas' ,'Integracija', 'Suvokimas', 'Vientisumas', 'Užbaigtumas', 'Nuspėjamumas', 'Familiarumas', 'Teisingumas', 'Sąžiningumas'  ]  },
    { title: 'Ryšys', elements: ['Meilė', 'Meilė sau', 'Rūpestis', 'Rūpestis savimi', 'Priklausymas', 'Artumas', 'Intymumas', 'Prieraišumas', 'Empatija', 'Atjauta', 'Dėkingumas', 'Įvertinimas', 'Pripažinimas', 'Priėmimas', 'Nuraminimas', 'Dėmesys', 'Atvirumas', 'Pasitikėjimas', 'Komunikacija', 'Pagarba', 'Dalijimasis', 'Mainai', 'Davimas', 'Gavimas', 'Švelnumas', 'Meilumas' , 'Jautrumas' , 'Gerumas', 'Matyti ir būti matomu', 'Girdėti ir būti išgirstu', 'Suprasti ir būti suprastu', 'Mano poreikių pripažinimas', 'Atidumas', 'Puoselėjimas', 'Dalyvavimas', 'Įsitraukimas', 'Parama', 'Pagalba', 'Savitarpiškumas', 'Bendradarbiavimas', 'Partnerystė', 'Bendrystė', 'Bičiulystė', 'Draugystė', 'Abipusiškumas', 'Nuoseklumas', 'Tęstinumas'  ]  },
    { title: 'Prasmė', elements: ['Gyvenimo praturtinimas', 'Buvimas', 'Susitelkimas', 'Ryšys su savimi', 'Susikaupimas', 'Viltis', 'Vizija', 'Svajojimas', 'Tikėjimas', 'Aiškumas', 'Žinojimas (realybės matymas)', 'Mokymasis', 'Suvokimas', 'Sąmoningumas', 'Paprastumas', 'Įkvėpimas', 'Kūrybiškumas', 'Iššūkis', 'Stimuliacija', 'Augimas', 'Evoliucija', 'Progresas', 'Pažanga', 'Plėtra', 'Vystymas', 'Tyrinėjimas', 'Jėga', '(Vidinė) Stiprybė', 'Kompetencija', 'Gebėjimas', 'Įgalinimas', 'Savivertė', 'Orumas', 'Pasitikėjimas savimi', 'Savigarba', 'Efektyvumas', 'Veiksmingumas', 'Rūpėti', 'Dalyvauti', 'Tikslas', 'Turėti savo vietą pasaulyje', 'Dvasingumas', 'Išsilaisvinimas', 'Transformacija', 'Virsmas', 'Tarpusavio susiejimas', 'Šventimas', 'Gedėjimas'  ]  },
    { title: 'Atvirumas', elements: ['Autentiškumas', 'Saviraiška', 'Vientisumas', 'Skaidrumas', 'Tikrumas', 'Tiesa']  },
    { title: 'Žaidimas', elements: ['Gyvumas', 'Žvalumas', 'Gyvybingumas', 'Judrumas', 'Tekmė', 'Aistra', 'Linksmybės', 'Spontaniškumas', 'Lengvumas', 'Humoras', 'Juokas', 'Įvairovė', 'Atradimas', 'Nuotykis', 'Atsinaujinimas', 'Atgaiva']  },
  ];


// Manto pakeitimai

export const NEEDS_UNMET_MANTAS = [
    { title: '', elements: []  },
    { needs:"unmet", title: 'Baimę', elements: ['Gėdą','Susirūpinimą','Pasipriešinimą','Nerimą','Stresą','Baimę', 'Išgąstį', 'Siaubą', 'Paniką']  },
    { needs:"unmet", title: 'Pyktį', elements: ['Pavydą','Nekantrumą', 'Susierzinimą',  'Frustraciją', 'Priešiškumą', 'Kerštingumą', 'Įsiutį', 'Pagiežą' ]  },
    { needs:"unmet", title: 'Liūdesį', elements: ['Kaltę','Bėjėgiškumą', 'Vienišumą','Nusivylimą', 'Apmaudą', 'Ilgesį', 'Nusivilimą', 'Sielvartą', 'Širdgėlą' ]  },
    { needs:"unmet", title: 'Pasimetimą', elements: ['Abejonę', 'Pasimetimą', 'Desperaciją',  'Sukrėtimą', 'Šoką', 'Susijaudinimą', 'Nerimastingujmą' ]  },
    { needs:"unmet", title: 'Pasyvumą', elements: [ 'Nuobodulį', 'Apatiją', 'Nuovargį', 'Išsekimą' ]  },
    { needs:"unmet", title: 'Pasišlykštėjimą', elements: ['Nemėgimą', 'Antipatiją', 'Panieką','Pasibjaurėjimas','Šleikštulį' ]  },
];

export const NEEDS_COMMON_MANTAS = [
    { title: 'Fizinės gerovės', elements: ['Oro', 'Vandens', 'Komforto', 'Maisto', 'Judėjimo', 'Poilsio', 'Seksualumo išraiškos', 'Pastogės', 'Prisilietimo' ]  },
    { title: 'Saugumo', elements: ['Saugumo(emocinio)', 'Pasitikėjimo', 'Stabilumo', 'Garantijų','Tvarkos/Struktūros','Nuoseklumo' ]  },
    { title: 'Atvirumo', elements: ['Atvirumo', 'Autentiškumo', 'Skaidrumo', 'Tikrumo']  },
    { title: 'Laisvės', elements: ['Autonomijos', 'Pasirinkimo', 'Nepriklausomybės', 'Saviraiškos','Erdvės']  },
    { title: 'Atsipalaidavimo', elements: ['Žaismingumo', 'Nuotykių', 'Susijaudinimo', 'Entuziazmo', 'Linksmumo', 'Smagumo', 'Humoro', 'Džiaugsmo', 'Atsipalaidavimo', 'Stimuliavimo','Įvairovės','Sporntaniškumo' ]  },
    { title: 'Ryšio', elements: ['Ryšio', 'Priėmimo','Pagarbos', 'Dalijimosi', 'Įsitraukimo', 'Pritarimo', 'Švelnumo', 'Įvertinimo', 'Priklausymo', 'Bendrumo', 'Rūpinimosi', 'Atidumo', 'Globos', 'Artumo', 'Komunikacijos', 'Bendravimo', 'Bendruomeninkšumo', 'Draugijos', 'Draugystės', 'Atjautos', 'Užuojautos', 'Dėmesio', 'Empatijos', 'Įkvėpimo', 'Vientisumo', 'Intymumo', 'Meilės', "Partnerystės",'Buvimo kartu',  'Savigarbos', 'Savęs priėmimo', 'Ryšio su savimi', 'Savęs išreiškimo', 'Girdėti ir būti išgirstu',  'Stabilumo', 'Palaikymo', 'Pažinti', 'Būti pažintam', 'Pastebėjimo', 'Būti pastebėtam', 'Pasitikėjimo', 'Supratimo']  },
    { title: 'Prasmės', elements: ['Prasmės', 'Sąmoningumo', 'Šventimo', 'Iššūkio', 'Kūrybiškumo', 'Aiškumo', 'Skaidrumo', 'Sugebėjimo', 'Savimonės', 'Prisidėjimo', 'Atradimo', 'Naudingumo', 'Produktyvumo', 'Pasisekimo', 'Augimo', 'Mokymasi', 'Gedėjimo', 'Veiksmo', 'Dalyvavimo', 'Galimybių', 'Pažangos', 'Progreso', 'Tikslo', 'Stimulo', 'Tikėjimo' ]  },
    { title: 'Harmonijos', elements: ['Darnos', 'Ramybės', 'Balanso', 'Pakankamumo', 'Grožio', 'Lengvumo', 'Sklandumo', 'Tvarkos', 'Taikos', 'Nuoseklumo', 'Lygybės' ]  },
    ];

export const NEEDS_COMMON_MANTAS_2 = [
    { title: '', elements: []  },
    { title: 'Fizinės gerovės', elements: ['Oro / Vandens / Maisto ','Pastogės', 'Judėjimo', 'Poilsio / Miego'  ]  },
    { title: 'Saugumo', elements: ['Saugumo (emocinio)', 'Pasitikėjimo', 'Stabilumo', 'Garantijų','Tvarkos / Struktūros','Taikos' ]  },
    { title: 'Laisvės', elements: ['Nepriklausomybės','Laisvės', 'Pasirinkimo', 'Sporntaniškumo','Saviraiškos','Erdvės','Atsitraukimo' ]  },
    { title: 'Atsipalaidavimo', elements: ['Atsipalaidavimo','Entuziazmo', 'Žaismingumo', 'Smagumo','Humoro','Įvairovės','Malonumo','Lengvumo','Sklandumo','Komforto']  },
    { title: 'Prielankumo', elements: ['Įvertinimo/Pripažinimo','Palaikymo','Dėmesio','Seksualumo išraiškos', 'Meilės','Prisilietimo','Švelnumo']  },
    { title: 'Rūpėjimo', elements: ['Priėmimo','Rūpesčio','Atjautos / Empatijos','Jautrumo', 'Pagarbos','Būti pažintu','Supratimo','Pagalbos','Atidumo']  },    
    { title: 'Bendrumo', elements: ['Ryšio','Priklausymo','Bendradarbiavimo','Lygybės', 'Įsitraukimo','Bendrystės','Dalyvavimo','Dalinimosi','Lygiavertiškumo','Abipusiškumo','Svarbumo',]  },
    { title: 'Prasmės', elements: ['Iššūkio','Prisidėjimo','Kūrybingumo','Efektyvumo','Tikslo','Naudingumo','Stimulo','Augimo','Smalsumo','Konstruktyvumo'  ]  },
    { title: 'Identiteto', elements: ['Atvirumo', 'Tikrumo', 'Autentiškumo', 'Kompetencijos', 'Pasitikėjimo savimi', 'Kūrybingumo', 'Orumo', 'Sąžiningumo' ]  },
    { title: 'Suvokimo', elements: ['Sąmoningumo', 'Aiškumo', 'Atradimo', 'Mokymosi' ]  },
    { title: 'Harmonijos', elements: ['Darnos', 'Ramybės(vidinės)','Gedėjimo', 'Balanso',  'Grožio','Įkvėpimo']  },
    ];
