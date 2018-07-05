// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define({documentTypes:{arcgis:{caption:"ArcGIS Metadata",editorCaption:"Metadata",description:""}},emptyOption:"Tom",conditionals:{ISO19139A1_ROW4:"Hvis Metadata Hierarchy Level er Dataset, kræves der en Geografisk afgrænsningsboks eller en Geografisk beskrivelse.",ISO19139A1_ROW6:"Der kræves en Datasætidentifikator eller et Datasætnavn.",ISO19139A1_ROW7:"Hvis Andre begrænsninger er valgt, kræves der Andre begrænsninger.",ISO19139A1_ROW9:"Hvis Omfang ikke er Datasæt eller Serier, kræves der en Niveaubeskrivelse.",ISO19139A1_ROW10_11_12:"Hvis Omfang er Datasæt eller Serier; der kræves enten Erklæring, Behandlingstrin eller Datakilde.",ISO19139A1_ROW15:"Hvis Kontrollér punkttilgængelighed er valgt, kræves der Kontrollér punktbeskrivelse.",ISO19139A1_ROW18:"Hvis Distribution er dokumenteret, kræves der Format eller Distributør/Format.",INSPIRE_AccessLimitation:" Der kræves mindst én juridisk adgangbegrænsningskode eller sikkerhedsklassifikationskode. (INSPIRE)",INSPIRE_UseLimitation:" Der kræves mindst én brugsbegrænsning. (INSPIRE)",INSPIRE_ConformanceResult:"En Domain Consistency-rapport kræver et Overensstemmelsesresultat. (INSPIRE)",INSPIRE_DomainConsistency:"Der kræves en Domain Consistency-rapport. (INSPIRE)",INSPIRE_LineageStatement:"Hvis Omfang er er Datasæt eller Serier, kræves der en Erklæring om herkomst. (INSPIRE).",FGDC_DescIfTemporal:"Der kræves en Beskrivelse for en Tidsbestemt udstrækning. (FGDC)",FGDC_Keywords:"Der kræves et Emne, et Nøgleord eller et Temanøgleord. (FGDC)",FGDC_Reports:"Completeness Omission- og Conceptual Consistency-rapporterne er påkrævede. (FGDC)",FGDC_Temporal:"Der kræves mindst én Tidsbegrænset udstrækning. (FGDC)",NAP_Contact:"Der kræves en Adresse/Leveringspunkt, Telefon/Talenummer eller Onlineressource/URL. (NAP)",GEN_BoundingBox:"Der kræves mindst én Geografisk afgrænsningsboks.",GEN_ReportResult:"Der kræves enten Overenstemmelses- eller Kvantitative resultater.",minLessThanMax:"Minimumværdien skal være mindre end Maksimumværdien."},hints:{integerGreaterThanZero:"(angiv et heltal > 0)",integerGreaterThanOne:"(angiv et heltal > 1)",integer0To100:"(angiv et heltal 0..100)",maxScale:"(angiv et heltal > 0, e.g. 50000)",minScale:"(angiv et heltal > 0, e.g. 150000000)",number0To100:"(angiv et tal 0..100)",number0To360:"(angiv et tal 0..360)",number90To90:"(angiv et tal -90..90)",listOfDoubles:"(angiv en liste med tal, brug et mellemrum til at adskille)"},htmlEditor:{button:"Redigér..."},sections:{overview:"Oversigt",esri:"Esri",resource:"Ressource",reference:"Reference",content:"Indhold",distribution:"Distribution",quality:"Kvalitet",eainfo:"Felter",representation:"Repræsentation",metadata:"Metadata"},metadataStyle:{caption:"ArcGIS Metadatatypografi",changeButton:"Redigér...",dialogTitle:"Vælg en Metadatatypografi",updating:"Opdaterer dokument...","Item Description":"Elementbeskrivelse","FGDC CSDGM Metadata":"FGDC CSDGM Metadata","ISO 19139 Metadata Implementation Specification":"ISO 19139 Metadata Implementation Specification","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Metadata Implementation Specification GML3.2","INSPIRE Metadata Directive":"INSPIRE Metadata Directive","North American Profile of ISO19115 2003":"North American Profile of ISO19115 2003"},aggrInfo:{caption:"Samlede oplysninger",datasetHint:"Der kræves en Datasætidentifikator eller et Datasætnavn.",aggrDSIdent:"Datasætidentifikator",aggrDSName:"Datasættets navn"},appSchInfo:{caption:"Applikationsskema",asName:"Skemanavn",asSchLang:"Skemasprog",asCstLang:"Begræsningssprog",asAscii:"ASCII",asGraFile:"Grafikfil",asGraFile_src:"Grafikfilkilde",asSwDevFile:"Softwareudviklingsfil",asSwDevFile_src:"Kilde for softwareudviklingsfil",asSwDevFiFt:"Format for softwareudviklingsfil"},citation:{caption:"Henvisning",section:{titlesAndDates:"Titler og datoer",links:"URL'er",identifiers:"Identifikatorer",presentation:"Form",other:"Andet",edition:"Udgave",series:"Serier"},conditionalDate:{caption:"Henvisningsdato",msg:"Der kræves én af Oprettelsesdato, Udgivelsesdato eller Ændringsdato.",msg_nap:"Der kræves en henvisningsdato."},resTitle:"Titel",resAltTitle:"Alternativ titel",collTitle:"Kollektiv titel",date:{createDate:"Oprettelsesdato",pubDate:"Udgivelsesdato",reviseDate:"Ændringsdato",notavailDate:"Ikke-tilgængelig dato",inforceDate:"Ikrafttrædelsesdato",adoptDate:"Implementeringsdato",deprecDate:"Udfasningsdato",supersDate:"Udskiftningsdato"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifikation",identCode:"Kode",identAuth:"Myndighedshenvisning"},resEd:"Udgave",resEdDate:"Udgivelsesdato",datasetSeries:{seriesName:"Navn",issId:"Udstedt",artPage:"Side"},otherCitDet:"Andre oplysninger",contactCaption:"Henvisningskontakt"},cntAddress:{caption:"Adresse",delPoint:"Leverigspunkt",city:"By",adminArea:"Administrativt område",postCode:"Postnummer",country:"Land",eMailAdd:"E-mail",addressType:{caption:"Adressetype",postal:"Postnummer",physical:"Fysisk",both:"Både"}},cntOnlineRes:{caption:"Onlineressource",linkage:"URL",protocol:"Protokol",appProfile:"Applikationsprofil",orName:"Navn",orDesc:"Beskrivelse"},cntPhone:{caption:"Telefon",voiceNum:"Tale",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Identifikation",identCode:"Kode",idCodeSpace:"Code Space",idVersion:"Version",identAuth:"Myndighedshenvisning"},constraints:{caption:"Begrænsninger",useLimit:"Brugsbegrænsning",general:{caption:"Generelt"},legal:{caption:"Juridisk",accessConsts:"Adgangsbegrænsninger",useConsts:"Brug begrænsninger",othConsts:"Andre begrænsninger"},security:{caption:"Sikkerhed",classSys:"Klassifikationssystem",userNote:"Brugermedddelelse",handDesc:"Håndteringsbeskrivelse"}},contInfo:{caption:"Indholdsoplysninger",section:{CovDesc:"Dækningsbeskrivelse",ImgDesc:"Billedbeskrivelse",FetCatDesc:"Objektkatalog"},attDesc:"Attributbeskrivelse",covDim:{caption:"Område eller bånd",seqID:"Sekvensidentifikation",seqIDType:"Sekvensidentifikationstype",dimDescrp:"Beskriver"},RangeDim:{caption:"Områdedimension"},Band:{caption:"Bånd",minVal:"Minimumværdi",maxVal:"Maksimumværdi",valUnit:"Værdienheder",pkResp:"Peak Response",bitsPerVal:"Bits pr. værdi",toneGrad:"Tonegraduering",sclFac:"Skalafaktor",offset:"Forskydning"},CovDesc:{caption:"Dækningsbeskrivelse",section:{description:"Beskrivelse",rangesAndBands:"Områder og bånd"}},ImgDesc:{caption:"Billedbeskrivelse",section:{description:"Beskrivelse",rangesAndBands:"Områder og bånd"},illElevAng:"Elevationsvinkel for lys",illAziAng:"Azimuth-vinkel for lys",cloudCovPer:"Skydækkeprocent",cmpGenQuan:"Komprimeringskvalitet",trianInd:"Trianguleringsindikator?",radCalDatAv:"Tilgængelighed for radiometriske kalibreringsdata?",camCalInAv:"Tilgængelighed for kamerakalibreringsoplysninger?",filmDistInAv:"Tilgængelighed for filmforvrængningsoplysninger?",lensDistInAv:"Tilgængelighed for linseforvrængningsoplysninger?",imagQuCode:"Kvalitetskode",prcTypCde:"Behandlingsniveaukode"},FetCatDesc:{caption:"Objektkatalog",section:{description:"Beskrivelse",featureTypes:"Objekttyper",citation:"Henvisning"},compCode:"Overensstemmelse med ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Henvisning til objektkatalog",catFetTyps:{caption:"Objekttype",genericName:"Navn",codeSpace:"Code Space"}}},contact:{caption:"Kontakt",section:{name:"Kontaktnavn",info:"Kontaktoplysninger",hoursAndInstructions:"Tider og instruktioner"},conditionalName:{caption:"Kontaktnavn",msg:"Der kræves enten Personnavn, Organisationsnavn eller Positionsnavn.",msg_fgdc:"Der kræves enten Personnavn eller Organisationsnavn."},rpIndName:"Personnavn",rpOrgName:"Navn på organisation",rpPosName:"Positionsnavn",rpCntInfo:"Kontaktoplysninger",cntHours:"Åbningstider for tjeneste",cntInstr:"Kontaktvejledning"},distInfo:{caption:"Distributionsoplysninger",section:{format:"Formatér",distributor:"Distributør",transfer:"Overførselsindstillinger"},distFormat:{caption:"Distributionsformat",formatName:"Formatnavn",formatVer:"Formatversion",formatAmdNum:"Ændringsnummer",formatSpec:"Specifikation",fileDecmTech:"Dekompressionsteknik",formatInfo:"Informationsindhold"},distributor:{caption:"Distributør"},distTranOps:{caption:"Digitale overførselsindstillinger",section:{unitsAndSize:"Enheder"},unitsODist:"Distributionsenheder",transSize:"Overførselsstørrelse",offLineMed:{caption:"Offline-medie",medDensity:"Tæthed",medDenUnits:"Tæthedsenheder",medVol:"Mængder",medNote:"Mediemeddelelse"}},distorOrdPrc:{caption:"Bestillingsproces",resFees:"Honorarer",planAvDtTm:"Tilgængelighedsdato",planAvTmPd:{caption:"Datoperiode for tilgængelighed",tmBegin:"Startdato/-tidspunkt",tmEnd:"Slutdato/-tidspunkt"},ordInstr:"Bestillingsvejledning",ordTurn:"Ekspeditionstid"}},dqInfo:{caption:"Datakvalitet",section:{scope:"Omfang",report:"Rapport",lineage:"Herkomst"},dqScope:{section:{level:"Niveau",extent:"Område"},scpLvl:"Omfangsniveau",scpLvlDesc:"Niveaubeskrivelse",scpExt:"Omfangsudstrækning"},report:{section:{measure:"Mål",evaluation:"Evaluering",result:"Resultat",conformance:"Overensstemmelse"},measDesc:"Målbeskrivelse",measName:"Målnavn",measDateTm:"Måldato",measId:"Målidentifikation",evalMethDesc:"Evalueringsmetode",evalProc:"Procedurehenvisning",ConResult:{caption:"Overensstemmelsesresultat",conExpl:"Forklaring",conSpec:"Specifikation",conPass:{caption:"Grad",_1:"Overensstemmende",_0:"Ikke-overensstemmende"}},QuanResult:{caption:"Kvantitativt resultat",quanVal:"Værdi",quanValType:"Værditype",quanValUnit:"Værdienheder",errStat:"Fejlstatistik"}},dataLineage:{section:{statement:"Erklæring",dataSource:"Data Source",prcStep:"Behandlingstrin"},statement:"Erklæring om herkomst",dataSource:{caption:"Data Source",section:{description:"Beskrivelse",srcRefSys:"Referencesystem",srcExt:"Område",srcCitatn:"Henvisning"},srcDesc:"Kildebeskrivelse",srcScale:{rfDenom:"Skalabenævnelse"},srcRefSys:"Kildereferencesystem",srcExt:"Kildeudstrækning",srcCitatn:"Kildehenvisning"},prcStep:{caption:"Behandlingstrin",section:{description:"Beskrivelse",stepProc:"Behandler",stepSrc:"Data Source"},stepDesc:"Behandlingsbeskrivelse",stepRat:"Rationale",stepDateTm:"Behandlingstrindato",stepProc:"Behandler",stepSrc:"Data Source"}}},eainfo:{caption:"Enheds- og attributoplysninger",section:{detailed:"Oplysninger",overview:"Oversigt"},detailed:{caption:"Enheds- og attributoplysninger",section:{enttyp:"Enhed",attr:"Atributter"},enttyp:{caption:"Enhedstype",enttypl:"Mærke",enttypt:"Objekt",enttypc:"Tælling",enttypd:"Definition",enttypds:"Definitionskilde"},attr:{caption:"Attribut",section:{description:"Beskrivelse",value:"Værdi",domain:"Domæne"},attrlabl:"Label",attalias:"Alias",attrdef:"Definition",attrdefs:"Definitionskilde",attrtype:"Type",attwidth:"Bredde",atprecis:"Præcision",attscale:"Målestok",atindex:"Indekseret",attrvai:{attrva:"Værdiforklaring",attrvae:"Værdipræcision"},attrmfrq:"Værdimålingsfrekvens",begdatea:"Startdato for værdier",enddatea:"Slutdato for værdier",attrdomv:{caption:"Domæne",edom:{caption:"Optalt",edomv:"Værdi",edomvd:"Definition",edomvds:"Definitionskilde"},rdom:{caption:"Område",rdommin:"Minimumværdi",rdommax:"Maksimumværdi",rdommean:"Middel",rdomstdv:"Standardafvigelse",attrunit:"Enheder",attrmres:"Målingsopløsning"},codesetd:{caption:"Kodesæt",codesetn:"Navn",codesets:"Kilde"},udom:{caption:"Ikke-repræsentabel"}}}},overview:{caption:"Oversigt",eaover:"Summary",eadetcit:"Henvisning"}},extent:{caption:"Område",section:{description:"Beskrivelse",geographic:"Geografisk",temporal:"Tidsbestemt",vertical:"Lodret"},exDesc:"Udstrækningsbeskrivelse",geoEle:{caption:"Geografisk udstrækning",GeoBndBox:{caption:"Afgrænsningsboks",esriExtentType:"Udstrækning til søgning?",exTypeCode:"Udstrækning indeholder ressourcen?",westBL:"Vestlig afgrænsende længdegrad",eastBL:"Østlig afgrænsende længdegrad",southBL:"Sydlig afgrænsende breddegrad",northBL:"Nordlig afgrænsende breddegrad"},GeoDesc:{caption:"Geografisk beskrivelse",exTypeCode:"Beskrivelse indeholder ressourcen?",identCode:"Kode"}},tempEle:{caption:"Tidsbestemt udstrækning",TM_Period:"Tidsperiode",TM_Instant:"Tidsforekomst",tmPosition:"Dato",tmBegin:"Startdato",tmEnd:"Slutdato"},vertEle:{caption:"Vertikal udstrækning",vertMinVal:"Minimumværdi",vertMaxVal:"Maksimumværdi"}},graphOver:{caption:"Søg grafisk",bgFileName:"Søg efter grafisk URL",bgFileDesc:"Søg efter grafisk beskrivelse",bgFileType:"Søg efter grafisk filtype"},keywords:{caption:"Nøgleord",section:{topicCategory:"Emne",searchKeys:"Nøgleord",themeKeys:"Tema",placeKeys:"Sted",tempKeys:"Tidsbestemt",discKeys:"Disciplin",stratKeys:"Lag",productKeys:"Produkt",subTopicCatKeys:"Underemne",otherKeys:"Andet"},delimited:"Nøgleord",searchKeys:"Tags",themeKeys:"Temanøgleord",placeKeys:"Stednøgleord",tempKeys:"Tidsbestemte nøgleord",discKeys:"Disciplinnøgleord",stratKeys:"Lagnøgleord",productKeys:"Produktnøgleord",subTopicCatKeys:"Underemnenøgleord",otherKeys:"Andre nøgleord",thesaName:"Tesaurushenvisning",thesaLang:"Tesaurussprog"},locales:{caption:"Landestandarder",locale:"Landestandard",resTitle:"Titel",idAbs:"Oversigt"},maintenance:{caption:"Vedligeholdelse",section:{frequency:"Frekvens",scope:"Omfang",note:"Notater"},usrDefFreq:"Brugerdefineret frekvens",dateNext:"Næste opdatering",maintScp:"Opdateringsomfang",upScpDesc:{caption:"Omfangsbeskrivelse",attribSet:"Atributter",attribIntSet:"Attributforekomster",featSet:"Objekter",featIntSet:"Objektforekomster",datasetSet:"Datasæt",other:"Andre forekomster"},maintNote:"Vedligeholdelsesnote",maintCont:"Vedligeholdelseskontakt"},metadata:{section:{profile:"Profil",details:"Omfang"},mdFileID:"Filidentifikation",mdParentID:"Overordnet identifikator",datasetURI:"Datasæt-URI",dataSetFn:"Datasætfunktion",mdDateSt:"Metadatadato",mdLang:"Metadatasprog",mdChar:"Tegnsæt",mdHrLv:"Hierarkisk niveau",mdHrLvName:"Hierarkisk niveaunavn",mdContact:"Metadatakontakt",mdMaint:"Metadatavedligeholdelse",mdConst:"Begrænsninger for metadata"},porCatInfo:{caption:"Portræthenvisning"},refSysInfo:{caption:"Geografisk reference"},resource:{section:{citation:"Henvisning",details:"Oplysninger",description:"Beskrivelse",keywords:"Nøgleord",status:"Status",resolution:"Opløsning",representation:"Repræsentation",browse:"Søg grafisk",format:"Format",usage:"Brug",aggregateInfo:"Sammenlægning",additional:"Supplerende"},idAbs:"Beskrivelse (Referat)",idPurp:"Resumé (Formål)",suppInfo:"Supplerende oplysninger",idCredit:"Credits",envirDesc:"Behandlingsmiljø",dataLang:"Ressourcesprog",dataExt:"Ressourceudstrækning",idPoC:"Kontaktpunkt",resMaint:"Ressourcevedligeholdelse",resConst:"Ressourcebegrænsninger",dsFormat:"Ressourceformat",dataScale:{caption:"Dataskala",equScale:"Skalaopløsning",scaleDist:"Afstandsopløsning",scaleDist_value:"Afstand"},idSpecUse:{caption:"Ressourcebrug",specUsage:"Specifik brug",usageDate:"Brugsdato",usrDetLim:"Begrænsninger",usrCntInfo:"Brugskontakt"}},service:{caption:"Tjeneste",svType:"Tjenestetype",svType_Name:"Navn",svAccProps:"Adgangsegenskaber",svCouplRes:{caption:"Forbundet ressource",svOpName:"Handlingsnavn",svResCitId:"Ressourceidentifikation"},svCoupleType:"Koblingstype"},scaleRange:{caption:"Målestoksinterval",maxScale:"Maksimalt målestoksforhold",minScale:"Minimalt målestoksforhold"},spatRepInfo:{caption:"Geografisk visning",section:{dimension:"Dimension",parameters:"Parametre"},numDims:"Antal dimensioner",tranParaAv:"Tilgængelighed for transformationsparameter?",axisDimension:{caption:"Dimension",dimSize:"Størrelse",dimResol:{caption:"Opløsning",_value:"Opløsningsværdi",uom:"Opløsningsenheder"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometriske objekter",geoObjCnt:"Objekttælling"},GridSpatRep:{caption:"Gitter"},Georect:{caption:"Geo-rettet",section:{centerPoint:"Centerpunkt",cornerPts:"Hjørnepunkter"},chkPtAv:"Kontrollér punkttilgængelighed?",chkPtDesc:"Kontrollér punktbeskrivelse?",ptInPixel:"Punkt i pixel",transDimDesc:"Beskrivelse af transformationsdimension",transDimMap:"Tilknytning af transformationsdimension",cornerPts:{caption:"Hjørnepunkt",pos:"Position",gmlDesc:"Beskrivelse",gmlDescRef:"Reference",gmlIdent:"Identifikation",codeSpace:"Codespace-identifikation"}},Georef:{caption:"Geo-referencemulig",ctrlPtAv:"Kontrolpunkttilgængelig?",orieParaAv:"Tilgængelighed for retningsparameter?",orieParaDs:"Beskrivelse af retningsparameter",georefPars:"Geo-refererede parametre",paraCit:"Parameterhenvisning"},Indref:{caption:"Indirekte"}},booleanOptions:{_false:"Nej",_true:"Ja"},codelist:{CountryCode:"Land",LanguageCode:"Sprog",MonetaryUnits:"Monetære enheder",MonetaryUnits_empty:"Ingen universel møntenhed",PresentationForm:"FGDC Formular til præsentation af geospatiale data",CI_PresentationFormCode:"Præsentationsform",CI_RoleCode:"Rolle",CI_OnLineFunctionCode:"Funktion",IMS_ContentType:"Indholdstype",DQ_ElementDimension:"Dimension",DQ_ElementType:"Rapporttype",DQ_EvaluationMethodTypeCode:"Evalueringstype",DS_AssociationTypeCode:"Associeringstype",DS_InitiativeTypeCode:"Initiativtype",LI_SourceType:"Kildetype",MD_CellGeometryCode:"Cellegeometri",MD_CharacterSetCode:"Tegnsæt",MD_ClassificationCode:"Klassifikation",MD_CoverageContentTypeCode:"Indholdstype",MD_DimensionNameTypeCode:"Dimensionstype",MD_GeometricObjectTypeCode:"Geometrisk objekttype",MD_ImagingConditionCode:"Billedforhold",MD_MaintenanceFrequenceCode:"Opdateringsfrekvens",MD_MediumFormatCode:"Formatkode",MD_MediumNameCode:"Medienavn",MD_PixelOrientationCode:"Pixelretning",MD_ProgressCode:"Status",MD_RestrictionCode:"Begrænsningskode",MD_ScopeCode:"Omfang",MD_SpatialRepresentationTypeCode:"Geografisk visningstype",MD_TopicCategoryCode:"Emnekategori",MD_TopologyLevelCode:"Topologiniveau",RS_Dimension:"Dimension",SV_CouplingType:"Koblingstype",UCUM:"Enheder",UCUM_Length:"Afstandsenheder"}});