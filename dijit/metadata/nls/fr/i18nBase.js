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

define({general:{cancel:"Annuler",close:"Fermer",none:"Aucune",ok:"OK",other:"Autre",stamp:"Tampon",now:"Maintenant",choose:"Choisissez une option :"},editor:{noMetadata:"Aucune métadonnée pour cet élément.",xmlViewOnly:"Le type de métadonnées associé à cet élément n'est pas pris en charge par l'éditeur. Les métadonnées doivent être au format ArcGIS.",editorDialog:{caption:"Métadonnées",captionPattern:"Métadonnées de {title}"},primaryToolbar:{view:"Vue",viewXml:"Afficher XML",edit:"Modifie",initializing:"Chargement en cours...",startingEditor:"Démarrage de l'éditeur...",loadingDocument:"Chargement du document...",updatingDocument:"Mise à jour du document...",generatingView:"Génération de la vue...",errors:{errorGeneratingView:"Une erreur est survenue lors de la génération de la vue.",errorLoadingDocument:"Une erreur est survenue lors du chargement du document."}},changesNotSaved:{prompt:"Votre document comporte des modifications non enregistrées.",dialogTitle:"Fermer l'éditeur de métadonnées",closeButton:"Fermer"},download:{caption:"Téléchargement",dialogTitle:"Téléchargement",prompt:"Cliquez ici pour télécharger votre fichier."},load:{caption:"Ouvrir",dialogTitle:"Ouvrir",typeTab:"Nouveau document",fileTab:"Ouvrir un fichier",templateTab:"Un modèle",itemTab:"Votre élément",filePrompt:"Sélectionnez un fichier XML de métadonnées ArcGIS local. Les métadonnées doivent être au format ArcGIS.",templatePrompt:"Créer des métadonnées",pullItem:"Renseignez les métadonnées avec les détails des éléments.",importWarning:"Le fichier sélectionné n'est pas au format ArcGIS. Les métadonnées chargées doivent être au format ArcGIS.",loading:"Chargement en cours...",noMetadata:"Vous pouvez créer les métadonnées de cet élément en choisissant une des options suivantes.",unrecognizedMetadata:"Le type de métadonnées associé à cet élément n'est pas pris en charge par l'éditeur. Vous pouvez créer des métadonnées prises en charge en choisissant une des options suivantes.",errorLoading:"Une erreur est survenue lors du chargement.",warnings:{badFile:"Impossible de charger le fichier sélectionné.",notAnXml:"Le fichier sélectionné n'est pas au format XML.",notSupported:"Ce type de fichier n'est pas pris en charge."},portalCaption:"Remplacer"},save:{caption:"Enregistrer",dialogTitle:"Enregistrer les métadonnées",working:"Enregistrement des métadonnées...",errorSaving:"Une erreur est survenue, vos métadonnées n'ont pas été enregistrées.",saveDialog:{pushCaption:"Appliquer des modifications à votre élément"}},saveAndClose:{caption:"Enregistrer et fermer"},saveDraft:{caption:"Télécharger",dialogTitle:"Télécharger"},validate:{caption:"Valider",dialogTitle:"Validation",docIsValid:"Votre document est valide."},viewHtml:{caption:"Visualiser",dialogTitle:"Afficher les métadonnées",savePrompt:"Votre document comporte des modifications non enregistrées. Vous devez enregistrer vos changements pour pouvoir les visualiser en affichant les métadonnées.",saveButton:"Enregistrer et afficher",portalNone:"Les métadonnées normalisées n’ont pas été créées. Vous devez d’abord sauvegarder avant de pouvoir afficher les métadonnées."},del:{caption:"Supprimer",dialogTitle:"Supprimer des métadonnées",prompt:"Voulez-vous vraiment supprimer ces métadonnées ?",working:"Suppression des métadonnées...",errorDeleting:"Une erreur est survenue, vos métadonnées n'ont pas été supprimées.",portalNone:"Il n’y a pas de document de métadonnées à supprimer Les métadonnées normalisées n’ont pas été créées.",portalPrompt:"Cette action supprimera le document de métadonnées et réinitialisera les métadonnées de cet élément pour des informations sur l’élément telles que Titre, Description, etc.",portalPrompt2:"Cette opération a pour effet de supprimer les métadonnées normalisées. Voulez-vous vraiment supprimer ces métadonnées ?",portalButton:"Supprimer et fermer"},transform:{caption:"Transformer",dialogTitle:"Transformer en",prompt:"",working:"Transformation...",errorTransforming:"Une erreur est survenue lors de la transformation de votre document."},errorDialog:{dialogTitle:"Une erreur est survenue"}},arcgis:{portal:{metadataButton:{caption:"Métadonnées"}}},calendar:{button:"Calendrier...",title:"Calendrier"},geoExtent:{button:"Définir l'étendue géographique...",title:"Etendue géographique",navigate:"Exploration",draw:"Dessiner un rectangle",drawHint:"Appuyez pour commencer et relâchez pour terminer."},hints:{date:"(aaaa ou aaaa-mm ou aaaa-mm-jj)",dateTime:"(aaaa-mm-jjThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(aaaa ou aaaa-mm ou aaaa-mm-jj ou aaaa-mm-jjThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(séparer par une virgule ou une nouvelle ligne)",fgdcDate:"(aaaa ou aaaa-mm ou aaaa-mm-jj)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(saisir un entier)",latitude:"(degrés décimaux)",longitude:"(degrés décimaux)",number:"(saisir un nombre)",numberGreaterThanZero:"(saisir un nombre > 0)"},isoTopicCategoryCode:{caption:"Catégorie",boundaries:"Limites administratives et politiques",farming:"Agriculture",climatologyMeteorologyAtmosphere:"Climatologie/Météorologie",biota:"Biologie et Ecologie",economy:"Economie",planningCadastre:"Cadastral",society:"Culture, Société et Démographie",elevation:"Alitimétrie et produits dérivés",environment:"Environnement et Protection des ressources",structure:"Construction, Equipement et Monuments",geoscientificInformation:"Sciences de la Terre",health:"Santé",imageryBaseMapsEarthCover:"Imagerie et fonds de cartes",inlandWaters:"Ressources en eaux",location:"Localisation et Géodésie",intelligenceMilitary:"Militaire",oceans:"Océans et Estuaires",transportation:"Réseaux de transports",utilitiesCommunication:"Infrastructure et Réseaux de communication"},multiplicity:{moveElementDown:"Déplacer la section vers le bas",moveElementUp:"Déplacer la section vers le haut",removeElement:"Supprimer la section",repeatElement:"Répéter la section"},optionalNode:{switchTip:"Incluez ou excluez cette section."},serviceTypes:{featureService:"Service d’entités",mapService:"Service de carte",imageService:"Service d’imagerie",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Vous devez saisir une valeur.",date:"La valeur doit être une date.",integer:"La valeur doit être un entier.",number:"La valeur doit être un nombre.",other:"Valeur non valide."},validationPane:{clearMessages:"Effacer les messages",prompt:"(cliquez sur chaque message ci-dessous et fournissez les informations requises dans le champ spécifié)"}});