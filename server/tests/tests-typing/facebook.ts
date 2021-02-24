import { IJsonLd } from '../../interfaces/jsonld/IJsonLd';

export const _FACEBOOK_SAMPLE_JSONLD: IJsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    startDate: '2021-02-11T15:00:00+0100',
    endDate: '2021-02-11T17:00:00+0100',
    name: 'Hybridní výuka',
    url: 'https://www.facebook.com/events/d41d8cd9/hybridn%C3%AD-v%C3%BDuka/3507283792730526/',
    description:
        'Hybridní výuka, asynchronní výuka, online výuka. Co který pojem znamená a jak se na konkrétní typ výuky připravit? O tom budeme diskutovat na našem semináři „Hybridní výuka“. Cílem semináře je sdílet zkušenosti napříč všemi vzdělávacími stupni. Diskutovat o možnostech výuky, zapojení žáků do výuky a využívání všech dostupných programů a aplikací efektivně. A třeba se i naučit, jak využít nabité zkušenosti v době po Covidu a jak u žáků a studentů prohlubovat IT schopnosti. \n' +
        '_______________________________________\n' +
        'Obsah:\n' +
        '-\tHybridní výuka\n' +
        '-\tAsynchronní výuka\n' +
        '-\tInteraktivní tabule / tablety /mobilní telefony\n' +
        '-\tDruhy používaného software\n' +
        '-\tRozdíly žáků v přístupu k technice\n' +
        '-\tKompenzace psychologicko-sociálních problémů způsobených dopady sociální distance\n' +
        '-\tSdílení zkušeností (co fungovalo / nefungovalo)\n' +
        '-\tVyužití technologií v době po Covidu \n' +
        '_______________________________________\n' +
        'Registrace: https://www.sitport.cz/akce/hybridni-vyuka-online-moderovana-diskuse/\n' +
        '\n' +
        '~ ZDARMA ~\n' +
        '\n',
    image:
        'https://scontent-prg1-1.xx.fbcdn.net/v/t1.0-0/c43.0.206.206a/p206x206/145467520_1291306784577689_6644237370038120316_o.jpg?_nc_cat=102&ccb=3&_nc_sid=b386c4&_nc_ohc=pmf1QoGwXxMAX9d96E5&_nc_ht=scontent-prg1-1.xx&tp=27&oh=d44e251ece5ce27877ded9e8efa586dc&oe=605BDE39',
    performers: [],
};

export const _FACEBOOK_SAMPLE_EVENT: Partial<Event> = {
    // TODO: !!! fill
    serializeId: 'https://www.eventbrite.com/e/online-ios-talk-hands-on-mac-catalyst-tickets-140831903013',
    name: 'Zn&#xE1;m&#xE9; vlastnosti Azure Storage',
    topic: null,
    type: EventType.CONFERENCE,
    web: 'https://it.katalogakci.cz/e-1583/ne-zname-vlastnosti-azure-storage-jiri-cincura-mvp',
    city: undefined,
    year: NaN,
    month: NaN,
    days: 'NaN-NaN',
    time: 'NaN:NaN',
    price: null,
    priceCurrency: null,
    online: 0,
    canceled: 0,
};
