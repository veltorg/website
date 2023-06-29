import { Container, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { Layout } from '../components/layout';

const Terms: FC = () => {
  return (
    <Layout>
      <Container
        sx={{ display: 'flex', gap: 's', flexDirection: 'column', mb: 8 }}
      >
        <Heading fontSize={['2xl', '3xl']} fontWeight={400} mb={3}>
          Generelle avtalevilkår for Velt AS
        </Heading>

        <Text fontSize="xl">1. Betingelser</Text>
        <Text fontSize="l">
          Disse generelle avtalevilkår gjelder ved leveranse av tjenester og
          produkter (Leveransen) fra Velt AS (Leverandøren), såfremt ikke annet
          er skriftlig avtalt mellom Leverandøren og kunden (Kunden) og/eller
          regulert i særskilte betingelser knyttet til den enkelte del av
          Leveransen.
        </Text>

        <Text fontSize="xl">2. Definisjon</Text>
        <Text fontSize="l">
          Med «Leverandøren» menes Velt AS med organisasjonsnummer 919 429 739,
          registrert i Brønnøysundregistrene. Med «Kunden» menes den person
          eller instans som bestiller en tjeneste eller et produkt fra
          Leverandøren.
        </Text>

        <Text fontSize="xl">3. Informasjon om Leveransen</Text>
        <Text fontSize="l">
          Kunden skal gis tilgang til dokumentasjon som Leverandøren vanligvis
          lar følge med ved Leveransen.
          <br />
          <br /> Leverandøren tar forbehold om (i) at det kan forekomme
          trykkfeil på nettsiden, i kataloger eller i annet
          markedsføringsmateriale, (ii) at tjenester/produkter ikke er
          tilgjengelige og (iii) at bilder ikke overensstemmer med
          tjenestenes/produktenes virkelige utseende.
        </Text>
        <Text fontSize="xl">4. Bindende avtale</Text>
        <Text fontSize="l">
          Bindende avtale finner sted når Kunde inngår «Avtale om leveranse av
          tjenester/produkter» (Avtalen) som inkluderer disse avtalevilkår ved
          elektronisk eller ordinær signatur.
        </Text>
        <Text fontSize="xl">5. Onboarding</Text>
        <Text fontSize="l">
          Leverandøren skal bistå med nødvendig onboarding av Kundens personell
          i den grad det er avtalt.
        </Text>
        <Text fontSize="xl">6. Elektronisk post</Text>
        <Text fontSize="l">
          Kunden godtar at opplysninger og dokumenter, herunder alle fakturaer,
          purringer og inkassovarsel, i sakens anledning sendes og lagres
          elektronisk – herunder som e-post.
        </Text>
        <Text fontSize="xl">7. Underleverandører</Text>
        <Text fontSize="l">
          Leverandøren har rett til å benytte underleverandører/tredjeparter i
          forbindelse med Leveransen.
        </Text>
        <Text fontSize="xl">8. Leveringstid</Text>
        <Text fontSize="l">
          Hvis det ikke er har avtalt tidspunkt for levering av Leveransen, skal
          Leverandøren levere Leveransen innen rimelig tid fra Avtale er
          inngått. Fra Avtale er inngått vil Leveransen normalt leveres innen 10
          til 14 arbeidsdager, men dette gjelder uansett ikke ved større
          Leveranser. Hvis Leverandørens levering av Leveransen hindres,
          vanskeliggjøres og/eller fordyres på grunn av omstendigheter som nevnt
          nedenfor i punkt 28 eller på grunn av forhold på Kundens side, blir
          tidspunktet for levering forlenget tilsvarende, noe som også kan gi
          rett til tilleggsvederlag.
          <br />
          <br /> Denne bestemmelse kan bli gjort gjeldende uansett om denne
          spesielle omstendigheten inntreffer før eller etter utgangen av det
          avtalte leveringstidspunktet. Leverandøren fraskriver seg ethvert
          ansvar for eventuell av oversittelse estimerte leveringstider og
          økonomisk tap Kunden måtte få som følger av forsinket eller uteblitt
          leveranse.
        </Text>
        <Text fontSize="xl">9. Korrekt informasjon</Text>
        <Text fontSize="l">
          Kunden forplikter seg til å gi Leverandøren all relevant informasjon i
          sakens anledning, samt og å holde slik informasjon oppdatert. Dette
          gjelder også Kundens egen kontaktinformasjon. Likeledes skal Kunden gi
          Leverandøren varsel om alle aktuelle henvendelser fra tredjemann
          direkte til Kunden.
          <br />
          <br /> Dersom Leverandøren, som følge av Kundes brudd på pliktene i
          dette punkt, påføres ansvar overfor tredjemann eller andre former for
          kostnader, bærer Kunden ansvaret for disse.
        </Text>
        <Text fontSize="xl">10. Priser/MVA</Text>
        <Text fontSize="l">
          Leverandørens veiledende priser fremgår på nettsiden, prisliste eller
          ved spesifisert tilbud/Avtale. Nettsiden oppdateres regelmessig.
          Prisen som angis her er ikke å anse som bindene for Leverandøren, all
          tid disse når som helst kan justeres.
          <br />
          <br /> Pris oppgitt i Avtale vil gjelde for den Leveranse som er
          omfattet av Avtalen. Dersom pris ikke er oppgitt i Avtalen, vil pris
          oppgitt i Leverandørens tilbud gjelde. Dersom det ikke er utstedt
          tilbud, gjelder prisen angitt på faktura gjeldende de tjenester og
          produkter som er omfattet av fakturaen.
          <br />
          <br /> Alle priser er oppgitt eks. avgifter med mindre annet er
          særskilt angitt. Ulike faktorer avgjør hvilken MVA-sats som belastes,
          blant annet hvor Kunden er lokalisert. Beregning av MVA vil
          spesifiseres på faktura, og satser fremgår av egen oversikt.
          <br />
          <br /> Avtalte priser kan endres ved hvert årsskifte tilsvarende
          økningen i Statistisk sentralbyrås konsumprisindeks (hovedindeksen),
          første gang med utgangspunkt i indeksen for den måned Avtale ble
          inngått. Avtalte priser kan også endres i den utstrekning regler eller
          vedtak for offentlige avgifter endres med virkning for Leverandørens
          vederlag eller kostnader.
          <br />
          <br /> Endringer i priser for tredjepartsleveranser som inngår i
          Leveransen gir krav på prisendringer for Leveransen med mindre annet
          er særskilt avtalt.
        </Text>
        <Text fontSize="xl">11. Fakturering og betalingsbetingelser</Text>
        <Text fontSize="l">
          Vederlag forfaller etter faktura per 14 (fjorten) kalenderdager.
          <br />
          <br />
          Dersom vederlaget ikke betales eller holdes tilbake av
          betalingsformidler eller av andre grunner ikke innbetales korrekt til
          Leverandøren, er bestillingen likefullt bindende for Kunde. Korrekt
          betaling skal i disse tilfeller skje umiddelbart.
          <br />
          <br /> Leverandøren og Leverandørens samarbeidspartnere kan fakturere
          ekstra for eventuelle møter med Kunden, og for ekstraordinært arbeid
          som Kunden ønsker utført og som ikke er inkludert i Avtalen. Likeledes
          kan det faktureres ekstra for ekstraordinære omkostninger. Eventuell
          ekstra fakturering skal opplyses Kunden på forhånd.
          <br />
          <br /> Ved forsinket betaling beregnes forsinkelsesrente i henhold til
          lov 17. desember 1976 nr. 100 om renter ved forsinket betaling m.m.
          (forsinkelsesrenteloven). Det kan også pålegges et purregebyr i
          henhold til de enhver tid gjeldende reguleringer
        </Text>
        <Text fontSize="xl">12. Betalingsmislighold</Text>
        <Text fontSize="l">
          Dersom forfalt uomtvistet vederlag med tillegg av forsinkelsesrenter
          ikke er betalt innen 30 (tretti) kalenderdager fra forfall, kan
          Leverandøren sende skriftlig varsel til Kunden om at Avtalen vil bli
          hevet dersom oppgjør ikke er skjedd innen 60 (seksti) kalenderdager
          etter at varselet er mottatt.
        </Text>
        <Text fontSize="xl">13. Kredittsjekk</Text>
        <Text fontSize="l">
          Alle kunder kan bli kredittsjekket. Leverandøren forbeholder seg
          retten til å gi avslag på søknad om kreditt uten nærmere begrunnelse.
          Ved kredittsalg gis det 10 dagers kreditt, om ikke annet er regulert i
          egen avtale. I tilfeller hvor kontraktens verdi overstiger kr 50 000
          og Avtalen innebærer innkjøp på Leverandørens side, må hele vederlaget
          forhåndsbetales.
        </Text>
        <Text fontSize="xl">14. Avbestilling</Text>
        <Text fontSize="l">
          Kunden kan avbestille Leveransen, helt eller delvis, i den grad det er
          avtalt. Kunden skal i så tilfelle betale for den del av Leveransen som
          er levert, samt Leverandørens kostnader og tap knyttet til
          avbestillingen.
        </Text>
        <Text fontSize="xl">15. Tredjemann</Text>
        <Text fontSize="l">
          Verken Leverandøren, Leverandørens ansatte eller Leverandørens
          samarbeidspartnere kan gi bindende forsikringer om at Kunden sine
          kontoer, profiler, nettsider og lignende vil og/eller kan a) bli
          opprettet eller opplastet til tredjemanns systemer (for eksempel
          Facebook); b) bli godkjent eller publisert av tredjemann (for eksempel
          Facebook); c) ikke bli fjernet og/eller slettet av tredjemann (for
          eksempel Facebook) etter opprettelse og publisering.
          <br />
          <br /> En Leveranse kan ikke kanselleres eller refunderes, selv om et
          eller flere av produktene eller tjenestene levert av Leverandøren ikke
          blir godkjent opprettet, opplastet, publisert, fjernet/slettet eller
          lignende av tredjemann (for eksempel Facebook) og dette ikke skyldes
          forhold på Leverandørens side. Under enhver omstendighet kan ikke
          Leverandøren, Leverandørens ansatte eller Leverandørens
          samarbeidspartnere holdes ansvarlig dersom innhold, informasjon og
          lignende fra Kunden strider mot tredjemanns rettigheter.
        </Text>
        <Text fontSize="xl">16. Tredjepartsleveranser - Freshworks</Text>
        <Text fontSize="l">
          I den grad tredjepartsleveranser er inkludert i Leveransen, er vilkår
          knyttet til slike bindende for Kunden. Leverandøren er ansvarlig
          overfor Kunden for feil i tredjepartsleveranser kun i den grad det er
          avtalt. Dette gjelder også nedetid, tap eller ødeleggelse av data. For
          vilkår vedrørende bruken av Freshworks sine applikasjoner, se:
          <Link href="https://www.freshworks.com/terms/">
            <Text textDecoration="underline">
              {' '}
              https://www.freshworks.com/terms/
            </Text>
          </Link>
        </Text>
        <Text fontSize="xl">17. Reklamasjon</Text>
        <Text fontSize="l">
          Reklamasjoner må fremmes innen forfall på mottatt faktura gjeldende
          den aktuelle tjeneste og produkt det reklameres på. Reklamasjoner
          etter dette tidspunkt skal anses som for sent fremsatt og bortfaller.
        </Text>
        <Text fontSize="xl">18. Fullmakt</Text>
        <Text fontSize="l">
          Kunden gir Leverandøren ubegrenset fullmakt til, til enhver tid, å
          aksessere alle profiler, kontoer, sider og lignende som er nødvendig
          for det arbeid Leverandøren skal utføre, utfører, eller har utført.
          Herunder kan Leverandøren , til enhver tid, ha registrert sin egen,
          eller samarbeidspartnere, sine administrasjonsaksesser på Kunden sine
          profiler, kontoer, sider og lignende. Kunden gir Leverandøren
          ubegrenset fullmakt til å opprette, oppdatere, endre og slette alle
          profiler, kontoer, sider og lignende som er bestilt av kunden.
        </Text>
        <Text fontSize="xl">19. Salgspant/Forbehold om eiendomsrett</Text>
        <Text fontSize="l">
          Leverandøren beholder eiendomsretten til Leveransen, inntil vederlaget
          i sin helhet er betalt, med tillegg av evt. renter og omkostninger,
          iht. lov om pant.
        </Text>
        <Text fontSize="xl">20. Overlevering av innhold og brukerdata</Text>
        <Text fontSize="l">
          Innloggingsdata, herunder brukernavn og passord, samt alt innhold
          produsert av Leverandøren overleveres Kunden tidligst når vederlaget i
          sin helhet er betalt, med tillegg av evt. renter og omkostninger.
        </Text>
        <Text fontSize="xl">21. Tolkning av de generelle avtalevilkårene</Text>
        <Text fontSize="l">
          Hvis en del av disse generelle avtalevilkårene blir kjent ugyldig
          eller ugjennomførlig i henhold til gjeldende lovgivning, skal den
          ugyldige eller ugjennomførlige bestemmelsen anses for å være erstattet
          av en gyldig, gjennomførlig bestemmelse som i størst mulig grad
          tilsvarer hensikten med den opprinnelige bestemmelsen, og resten av
          avtalevilkårene vil fortsette å gjelde. Punktoverskriftene i disse
          generelle avtalevilkårene brukes utelukkende av bekvemmelighetshensyn
          og har ingen rettslig eller kontraktsmessig betydning.
        </Text>
        <Text fontSize="xl">22. Bruk i referansesammenheng</Text>
        <Text fontSize="l">
          Leverandøren har rett til å bruke alt som innbefattes i Leveransen i
          referansesammenheng. Dette innbefatter blant annet, men ikke begrenset
          til, å opplyse om at Leverandøren har et kundeforhold med Kunden, bruk
          av Kunden sin logo, presentasjon av arbeidet som er lagt ned og
          lignende.
        </Text>
        <Text fontSize="xl">23. Overdragelse av rettigheter og plikter</Text>
        <Text fontSize="l">
          Leverandøren kan overdra Avtalen/Leveransen, helt eller delvis, når
          som helst, med eller uten varsel til Kunden. Kunden har ikke rett til
          å overdra Avtalen/Leveransen uten etter skriftlig samtykke fra
          Leverandøren.
        </Text>
        <Text fontSize="xl">24. Tap av data</Text>
        <Text fontSize="l">
          Leverandøren er ikke i noe tilfelle ansvarlig for tap av data/lagret
          informasjon.
        </Text>
        <Text fontSize="xl">25. Ansvar og erstatningsplikt</Text>
        <Text fontSize="l">
          Kunden plikter å holde Leverandøren , Leverandørens ansatte og
          Leverandørens samarbeidspartnere skadesløse, også overfor tredjemann,
          for enhver skade og et hvert tap i forbindelse med at Leveransen ikke
          kan leveres som avtalt. Leverandøren har intet ansvar for økonomisk
          tap som påføres Kunden, så som, men ikke begrenset til, uteblitt
          gevinst, forventet besparelse, tap av inntekt/fortjeneste, tap av
          omdømme, krav fra tredjeparter, herunder krav fra
          tredjepartsleverandør som følge av Kundens brudd på tredjepartsvilkår
          eller tap som følge av endringer i lov eller som følge av avgjørelser
          truffet av tredjeparter, forvaltningsorganer eller domstol,
          tvangsmulkt, skade på annen eiendom forårsaket av tjenestens /
          produktet og/eller tjenestens/produktets egenskaper eller andre
          indirekte skader, selv om Leverandøren blir gjort oppmerksom på
          muligheter av at sådan skade kan oppstå. Kundens eventuelle krav på
          vederlagsjustering og Leverandøren sitt ansvar for skade er i alle
          tilfelle begrenset til sammenlagt 50 % av vederlaget som Kunden er
          fakturert de siste 12 månedene før reklamasjonsdato, så fremt
          Leverandøren ikke har gjort seg skyldig i grov uaktsomhet eller
          forsett.
        </Text>
        <Text fontSize="xl">26. Næringskjøp</Text>
        <Text fontSize="l">
          Kunden er kjent med at alle tjenester levert av Leverandøren er å anse
          som næringskjøp og at særlige bestemmelser for forbrukerkjøp således
          ikke kommer til anvendelse.
        </Text>
        <Text fontSize="xl">27. Taushetsplikt</Text>
        <Text fontSize="l">
          Taushetsbelagt informasjon som partene blir kjent med i forbindelse
          med Leveransen og gjennomføringen av Leveransen, skal behandles
          konfidensielt og ikke gjøres tilgjengelig for utenforstående uten
          samtykke fra den annen part. Taushetsplikt etter denne bestemmelsen er
          ikke til hinder for utlevering av informasjon som kreves fremlagt i
          henhold til lov eller forskrift. Om mulig skal den annen part varsles
          før slik informasjon gis. Taushetsplikten er ikke til hinder for at
          opplysningene brukes når ingen berettiget interesse tilsier at de
          holdes hemmelig, for eksempel når de er allment kjent eller er
          alminnelig tilgjengelig andre steder. Partene skal ta nødvendige
          forholdsregler for å sikre at uvedkommende ikke får innsyn i eller kan
          bli kjent med taushetsbelagt informasjon. Taushetsplikten gjelder
          partenes ansatte, underleverandører og tredjeparter som handler på
          partenes vegne i forbindelse med gjennomføring av Avtalen.
          Taushetsplikten er ikke til hinder for at partene kan utnytte erfaring
          og kompetanse som opparbeides i forbindelse med gjennomføringen av
          Avtalen. Taushetsplikten gjelder også etter at Avtalen er opphørt.
          Ansatte eller andre som fratrer sin tjeneste hos en av partene, skal
          pålegges taushetsplikt også etter fratredelsen om forhold som nevnt
          ovenfor. Taushetsplikten opphører 5 (fem) år etter Avtalens opphør,
          med mindre annet følger av lov eller forskrift.
        </Text>
        <Text fontSize="xl">29. Force Majeure</Text>
        <Text fontSize="l">
          Skulle det inntreffe en ekstraordinær situasjon, som gjør det umulig å
          oppfylle plikter etter Avtalen, og som etter norsk rett må regnes som
          force majeure, så som, men ikke begrenset til streik, lockout, krig
          eller andre omstendigheter utenfor enn parts kontroll, skal motparten
          varsles om dette så raskt som mulig. Den rammede parts forpliktelser
          suspenderes så lenge den ekstraordinære situasjonen varer. Den annen
          parts motytelse suspenderes i samme tidsrom. Motparten kan i force
          majeure-situasjoner bare avslutte Avtalen med den rammede parts
          samtykke, eller hvis situasjonen varer eller antas å ville vare lenger
          enn 60 (seksti) kalenderdager, regnet fra det tidspunkt situasjonen
          inntrer, og da bare med 14 (fjorten) kalenderdagers varsel. Hver av
          partene dekker egne kostnader knyttet til avslutning av
          avtaleforholdet. Kunden betaler avtalt pris for den del av Leveransen
          som var kontraktsmessig levert før Avtalen ble avsluttet. Partene kan
          ikke rette andre krav mot hverandre som følge av avslutning av Avtalen
          etter denne bestemmelsen. I forbindelse med force majeure-situasjoner
          har partene gjensidig informasjonsplikt overfor hverandre om alle
          forhold som må antas å være av betydning for den annen part. Slik
          informasjon skal gis så raskt som mulig.
        </Text>
        <Text fontSize="xl">30. Trykkfeil</Text>
        <Text fontSize="l">
          Leverandøren reserverer seg for eventuelle trykkfeil på nettsider,
          brosjyrer og i annet materiell.
        </Text>
        <Text fontSize="xl">31. Lovvalg og jurisdiksjon</Text>
        <Text fontSize="l">
          Enhver konflikt mellom Kunden og Leverandøren i forbindelse med
          Leveransen og som er omfattet av nærværende avtalevilkår reguleres av
          norsk rett. Partene vedtar Oslo tingrett, Norge, som verneting. Dette
          valg av verneting skal imidlertid ikke hindre Leverandøren fra å
          forfølge sine eier- og immaterielle rettigheter (herunder men ikke
          begrenset til å søke midlertidig forføyning) i andre jurisdiksjoner og
          i henhold til de prosedyrer og regler som gjelder på slikt sted. Sist
          endret, 10.11.2020.
        </Text>
      </Container>
    </Layout>
  );
};

export default Terms;
