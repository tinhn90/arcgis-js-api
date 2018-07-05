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

define({documentTypes:{arcgis:{caption:"ArcGIS 中繼資料",editorCaption:"中繼資料",description:""}},emptyOption:"空",conditionals:{ISO19139A1_ROW4:"如果中繼資料階級層級為資料集，則需要地理週框方塊或地理描述。",ISO19139A1_ROW6:"需要資料集識別碼或資料集名稱。",ISO19139A1_ROW7:"如果選擇其他限制，則需要其他約束。",ISO19139A1_ROW9:"如果範圍不是資料集或數列，則需要等級描述。",ISO19139A1_ROW10_11_12:"如果範圍是資料集或數列；則需要陳述式、處理步驟或資料來源中的一項。",ISO19139A1_ROW15:"如果選擇檢測點可用性，則需要檢測點描述。",ISO19139A1_ROW18:"如果記錄分發，則需要格式或經銷商/格式。",INSPIRE_AccessLimitation:" 至少需要一個合法存取條件約束代碼或安全性分類代碼。(INSPIRE)",INSPIRE_UseLimitation:" 至少需要一個使用限制。(INSPIRE)",INSPIRE_ConformanceResult:"網域一致性報告需要一致性結果。(INSPIRE)",INSPIRE_DomainConsistency:"需要網域一致性報告。(INSPIRE)",INSPIRE_LineageStatement:"如果範圍是資料集或數列，則需要譜系說明。(INSPIRE)。",FGDC_DescIfTemporal:"時態範圍的描述為必填項。(FGDC)",FGDC_Keywords:"主題、標記或主題關鍵字為必填項。(FGDC)",FGDC_Reports:"需要完整性省略報告和概念一致性報告。(FGDC)",FGDC_Temporal:"至少需要一個時態範圍。(FGDC)",NAP_Contact:"需要地址/投遞點、電話/語音號碼或線上資源/URL。(NAP)",GEN_BoundingBox:"至少需要一個地理週框方塊。",GEN_ReportResult:"需要一致性結果或定量結果。",minLessThanMax:"最小值必須小於最大值。"},hints:{integerGreaterThanZero:"(請輸入一個整數 > 0)",integerGreaterThanOne:"(請輸入一個整數 > 1)",integer0To100:"(請輸入一個整數 0..100)",maxScale:"(請輸入一個整數 > 0，如 50000)",minScale:"(請輸入一個整數 > 0，如 150000000)",number0To100:"(請輸入一個數位 0.0.100)",number0To360:"(請輸入一個數位 0.0.360)",number90To90:"(請輸入一個數位 -90..90)",listOfDoubles:"(輸入數位列表，使用空格分隔)"},htmlEditor:{button:"編輯..."},sections:{overview:"概述",esri:"Esri",resource:"資源",reference:"參考",content:"內容",distribution:"分佈",quality:"品質",eainfo:"欄位",representation:"製圖表達",metadata:"中繼資料"},metadataStyle:{caption:"ArcGIS 中繼資料樣式",changeButton:"變更...",dialogTitle:"選擇中繼資料樣式",updating:"正在更新文件...","Item Description":"項目描述","FGDC CSDGM Metadata":"FGDC CSDGM 中繼資料","ISO 19139 Metadata Implementation Specification":"ISO 19139 中繼資料實施規格","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 中繼資料實施規格 GML3.2","INSPIRE Metadata Directive":"INSPIRE 中繼資料指令","North American Profile of ISO19115 2003":"ISO19115 2003 年的北美設定檔"},aggrInfo:{caption:"匯聚資訊",datasetHint:"需要資料集識別碼或資料集名稱。",aggrDSIdent:"資料集識別碼",aggrDSName:"資料集名稱"},appSchInfo:{caption:"應用程式方案",asName:"方案名稱",asSchLang:"方案語言",asCstLang:"限制語言",asAscii:"ASCII",asGraFile:"圖形檔案",asGraFile_src:"圖形檔案來源",asSwDevFile:"軟體開發檔案",asSwDevFile_src:"軟體開發檔案來源",asSwDevFiFt:"軟體開發檔案格式"},citation:{caption:"引用資訊",section:{titlesAndDates:"標題和日期",links:"URL",identifiers:"識別碼",presentation:"識別碼",other:"其他",edition:"版本",series:"數列"},conditionalDate:{caption:"引用日期",msg:"需要建立日期、發佈日期或修訂日期之中的一項。",msg_nap:"需要引用日期。"},resTitle:"標題",resAltTitle:"其他標題",collTitle:"共同標題",date:{createDate:"建立日期",pubDate:"發佈日期",reviseDate:"修訂日期",notavailDate:"無法使用的日期",inforceDate:"有效日期",adoptDate:"採用日期",deprecDate:"棄用日期",supersDate:"廢棄日期"},isbn:"國際標準書號 (ISBN)",issn:"國際標準期刊號 (ISSN)",citId:{caption:"識別碼",identCode:"代碼",identAuth:"主管機關引用資訊"},resEd:"版本",resEdDate:"版本日期",datasetSeries:{seriesName:"名稱",issId:"期數",artPage:"頁"},otherCitDet:"其他詳細資訊",contactCaption:"引用資訊連絡人"},cntAddress:{caption:"地址",delPoint:"投遞點",city:"城市",adminArea:"行政區",postCode:"郵遞區號",country:"國家/地區",eMailAdd:"電子郵件",addressType:{caption:"位址類型",postal:"郵遞區號",physical:"實際",both:"兩者"}},cntOnlineRes:{caption:"線上資源",linkage:"URL",protocol:"通訊協定",appProfile:"應用程式設定檔",orName:"名稱",orDesc:"描述"},cntPhone:{caption:"電話",voiceNum:"語音",faxNum:"傳真",tddtty:"TDD/TTY?"},codeRef:{caption:"識別碼",identCode:"代碼",idCodeSpace:"代碼空間",idVersion:"版本",identAuth:"主管機關引用資訊"},constraints:{caption:"約束",useLimit:"使用限制",general:{caption:"一般"},legal:{caption:"合法",accessConsts:"存取限制",useConsts:"使用限制",othConsts:"其他限制"},security:{caption:"安全性",classSys:"分類系統",userNote:"使用者注意事項",handDesc:"處理描述"}},contInfo:{caption:"內容資訊",section:{CovDesc:"覆蓋區域描述",ImgDesc:"圖像描述",FetCatDesc:"圖徵目錄"},attDesc:"屬性描述",covDim:{caption:"範圍或頻段",seqID:"序列識別碼",seqIDType:"序列識別碼類型",dimDescrp:"描述符"},RangeDim:{caption:"範圍維度"},Band:{caption:"頻段",minVal:"最小值",maxVal:"最大值",valUnit:"值單位",pkResp:"峰值響應",bitsPerVal:"每個值的位元數",toneGrad:"色階",sclFac:"比例因子",offset:"偏移"},CovDesc:{caption:"Coverage 描述",section:{description:"描述",rangesAndBands:"範圍和頻段"}},ImgDesc:{caption:"圖像描述",section:{description:"描述",rangesAndBands:"範圍和頻段"},illElevAng:"入射高度角",illAziAng:"入射方位角",cloudCovPer:"雲覆蓋比例",cmpGenQuan:"壓縮品質",trianInd:"三角形測量指標?",radCalDatAv:"輻射校正資料可用性?",camCalInAv:"相機檢校資訊可用性?",filmDistInAv:"膠片畸變資訊可用性?",lensDistInAv:"鏡頭畸變資訊可用性?",imagQuCode:"品質代碼",prcTypCde:"處理級別編碼"},FetCatDesc:{caption:"圖徵目錄",section:{description:"描述",featureTypes:"圖徵類型",citation:"引用資訊"},compCode:"符合 ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"圖徵目錄引用",catFetTyps:{caption:"圖徵類型",genericName:"名稱",codeSpace:"代碼空間"}}},contact:{caption:"連絡人",section:{name:"連絡人姓名",info:"聯絡資訊",hoursAndInstructions:"時數和說明"},conditionalName:{caption:"連絡人姓名",msg:"需要個人姓名、組織名稱或職位名稱之中的一項。",msg_fgdc:"需要個人姓名或組織名稱之中的一項。"},rpIndName:"個人姓名",rpOrgName:"組織名稱",rpPosName:"職位名稱",rpCntInfo:"聯絡資訊",cntHours:"服務時間",cntInstr:"聯絡說明"},distInfo:{caption:"分發資訊",section:{format:"格式",distributor:"經銷商",transfer:"傳輸選項"},distFormat:{caption:"分發格式",formatName:"格式名稱",formatVer:"格式版本",formatAmdNum:"修訂號",formatSpec:"規格",fileDecmTech:"解壓縮方法",formatInfo:"資訊內容"},distributor:{caption:"經銷商"},distTranOps:{caption:"數位傳送選項",section:{unitsAndSize:"單位"},unitsODist:"分發單位",transSize:"傳送量",offLineMed:{caption:"離線媒體",medDensity:"密度分析",medDenUnits:"密度單位",medVol:"卷",medNote:"媒體注釋"}},distorOrdPrc:{caption:"訂購程序",resFees:"費用",planAvDtTm:"可用日期",planAvTmPd:{caption:"可用日期時段",tmBegin:"開始日期/時間",tmEnd:"結束日期/時間"},ordInstr:"訂購說明",ordTurn:"返回"}},dqInfo:{caption:"資料品質",section:{scope:"範圍",report:"報告",lineage:"譜系"},dqScope:{section:{level:"級別",extent:"範圍"},scpLvl:"範圍級別",scpLvlDesc:"級別描述",scpExt:"範圍"},report:{section:{measure:"測量",evaluation:"評估",result:"結果",conformance:"一致性"},measDesc:"測量描述",measName:"測量名稱",measDateTm:"測量日期",measId:"測量識別碼",evalMethDesc:"評估方法",evalProc:"程序引用",ConResult:{caption:"一致性結果",conExpl:"說明",conSpec:"規格",conPass:{caption:"度",_1:"一致",_0:"不一致"}},QuanResult:{caption:"定量結果",quanVal:"數值",quanValType:"值類型",quanValUnit:"值單位",errStat:"錯誤統計"}},dataLineage:{section:{statement:"報告",dataSource:"資料來源",prcStep:"處理步驟"},statement:"譜系說明",dataSource:{caption:"資料來源",section:{description:"描述",srcRefSys:"參考系統",srcExt:"範圍",srcCitatn:"引用資訊"},srcDesc:"資料來源描述",srcScale:{rfDenom:"比例分母"},srcRefSys:"來源參考系統",srcExt:"資料來源範圍",srcCitatn:"來來源引用"},prcStep:{caption:"處理步驟",section:{description:"描述",stepProc:"處理器",stepSrc:"資料來源"},stepDesc:"過程描述",stepRat:"基本原理",stepDateTm:"處理步驟日期",stepProc:"處理器",stepSrc:"資料來源"}}},eainfo:{caption:"實體和屬性資訊",section:{detailed:"詳細資訊",overview:"概述"},detailed:{caption:"實體和屬性詳細資訊",section:{enttyp:"實體",attr:"屬性"},enttyp:{caption:"實體類型",enttypl:"標籤",enttypt:"物件",enttypc:"計數",enttypd:"定義",enttypds:"定義來源"},attr:{caption:"屬性",section:{description:"描述",value:"價值",domain:"網域"},attrlabl:"標籤",attalias:"別名",attrdef:"定義",attrdefs:"定義來源",attrtype:"類型",attwidth:"寬度",atprecis:"精確度",attscale:"比例",atindex:"建立索引的",attrvai:{attrva:"值說明",attrvae:"值精確度"},attrmfrq:"值測量頻率",begdatea:"值的開始日期",enddatea:"值的結束日期",attrdomv:{caption:"網域",edom:{caption:"列舉",edomv:"數值",edomvd:"定義",edomvds:"定義來源"},rdom:{caption:"範圍",rdommin:"最小值",rdommax:"最大值",rdommean:"平均值",rdomstdv:"標準差",attrunit:"單位",attrmres:"測量解析度"},codesetd:{caption:"編碼集",codesetn:"名稱",codesets:"來源"},udom:{caption:"無法表達"}}}},overview:{caption:"概述",eaover:"摘要",eadetcit:"引用資訊"}},extent:{caption:"範圍",section:{description:"描述",geographic:"地理",temporal:"時態",vertical:"垂直"},exDesc:"範圍描述",geoEle:{caption:"地理範圍",GeoBndBox:{caption:"週框方塊",esriExtentType:"用於搜尋的範圍?",exTypeCode:"範圍包含資源?",westBL:"西部邊界經度",eastBL:"東部邊界經度",southBL:"南部邊界緯度",northBL:"北部邊界緯度"},GeoDesc:{caption:"地理描述",exTypeCode:"描述中包含資源?",identCode:"代碼"}},tempEle:{caption:"時態範圍",TM_Period:"時間段",TM_Instant:"時刻",tmPosition:"日期",tmBegin:"開始日期",tmEnd:"結束日期"},vertEle:{caption:"垂直範圍",vertMinVal:"最小值",vertMaxVal:"最大值"}},graphOver:{caption:"瀏覽圖",bgFileName:"瀏覽圖形 URL",bgFileDesc:"瀏覽圖形描述",bgFileType:"瀏覽圖形檔案類型"},keywords:{caption:"關鍵字",section:{topicCategory:"題目",searchKeys:"標記",themeKeys:"主題",placeKeys:"地點",tempKeys:"時態",discKeys:"專業領域",stratKeys:"地層",productKeys:"產品",subTopicCatKeys:"小標題",otherKeys:"其他"},delimited:"關鍵字",searchKeys:"標記",themeKeys:"主題關鍵字",placeKeys:"地點關鍵字",tempKeys:"時態關鍵字",discKeys:"領域關鍵字",stratKeys:"地層關鍵字",productKeys:"產品關鍵字",subTopicCatKeys:"小標題關鍵字",otherKeys:"其他關鍵字",thesaName:"同義字引用",thesaLang:"同義字語言"},locales:{caption:"地區設定",locale:"地區設定",resTitle:"標題",idAbs:"摘要"},maintenance:{caption:"維護",section:{frequency:"頻率",scope:"範圍",note:"備註"},usrDefFreq:"自訂頻率",dateNext:"下一次更新",maintScp:"更新範圍",upScpDesc:{caption:"範圍描述",attribSet:"屬性",attribIntSet:"屬性執行個體",featSet:"圖徵",featIntSet:"圖徵執行個體",datasetSet:"資料集",other:"其他執行個體"},maintNote:"維護注釋",maintCont:"維護連絡人"},metadata:{section:{profile:"設定檔",details:"範圍"},mdFileID:"檔案識別碼",mdParentID:"上層識別碼",datasetURI:"資料集 URI",dataSetFn:"資料集函數",mdDateSt:"中繼資料日期",mdLang:"中繼資料語言",mdChar:"字元集",mdHrLv:"等級分級",mdHrLvName:"等級分級名稱",mdContact:"中繼資料連絡人",mdMaint:"中繼資料維護",mdConst:"中繼資料限制資訊"},porCatInfo:{caption:"描繪引用"},refSysInfo:{caption:"空間參考"},resource:{section:{citation:"引用資訊",details:"詳細資訊",description:"描述",keywords:"關鍵字",status:"狀態",resolution:"解析度",representation:"製圖表達",browse:"瀏覽圖",format:"格式",usage:"使用情況",aggregateInfo:"匯聚",additional:"附加"},idAbs:"描述(摘要)",idPurp:"摘要(用途)",suppInfo:"附加資訊",idCredit:"製作者名單",envirDesc:"處理環境",dataLang:"資源語言",dataExt:"資源範圍",idPoC:"聯絡點",resMaint:"資源維護",resConst:"資源限制資訊",dsFormat:"資源格式",dataScale:{caption:"資料比例",equScale:"比例解析度",scaleDist:"距離解析度",scaleDist_value:"距離"},idSpecUse:{caption:"資來源使用情況",specUsage:"特定用法",usageDate:"使用日期",usrDetLim:"限制",usrCntInfo:"使用連絡人"}},service:{caption:"服務",svType:"服務類型",svType_Name:"名稱",svAccProps:"存取屬性",svCouplRes:{caption:"耦合的資源",svOpName:"操作名稱",svResCitId:"資源識別碼"},svCoupleType:"耦合類型"},scaleRange:{caption:"比例範圍",maxScale:"最大比例",minScale:"最小比例"},spatRepInfo:{caption:"空間表達",section:{dimension:"維度",parameters:"參數"},numDims:"維數",tranParaAv:"變換參數可用性?",axisDimension:{caption:"維度",dimSize:"大小",dimResol:{caption:"解析度",_value:"解析度值",uom:"解析度單位"}},VectSpatRep:{caption:"矢量",geometObjs:"幾何物件",geoObjCnt:"物件計數"},GridSpatRep:{caption:"網格"},Georect:{caption:"地理校正",section:{centerPoint:"中心點",cornerPts:"角點"},chkPtAv:"檢測點可用性?",chkPtDesc:"檢測點描述",ptInPixel:"像素點",transDimDesc:"轉換維度說明",transDimMap:"轉換維度映射",cornerPts:{caption:"角點",pos:"位置",gmlDesc:"描述",gmlDescRef:"參考",gmlIdent:"識別碼",codeSpace:"識別碼代碼空間"}},Georef:{caption:"地理可配准性",ctrlPtAv:"控制點可用性?",orieParaAv:"方向參數可用性?",orieParaDs:"方向參數描述",georefPars:"地理參考參數",paraCit:"參數引用"},Indref:{caption:"間接"}},booleanOptions:{_false:"否",_true:"是"},codelist:{CountryCode:"國家/地區",LanguageCode:"語言",MonetaryUnits:"貨幣單位",MonetaryUnits_empty:"無通用貨幣",PresentationForm:"FGDC 地理空間資料表達形式",CI_PresentationFormCode:"表達形式",CI_RoleCode:"角色",CI_OnLineFunctionCode:"函數",IMS_ContentType:"內容類型",DQ_ElementDimension:"維度",DQ_ElementType:"報告類型",DQ_EvaluationMethodTypeCode:"評估類型",DS_AssociationTypeCode:"關聯類型",DS_InitiativeTypeCode:"初始類型",LI_SourceType:"來源類型",MD_CellGeometryCode:"儲存格幾何",MD_CharacterSetCode:"字元集",MD_ClassificationCode:"分類",MD_CoverageContentTypeCode:"內容類型",MD_DimensionNameTypeCode:"維度類型",MD_GeometricObjectTypeCode:"幾何物件類型",MD_ImagingConditionCode:"成像條件",MD_MaintenanceFrequenceCode:"更新頻率",MD_MediumFormatCode:"格式代碼",MD_MediumNameCode:"媒體名稱",MD_PixelOrientationCode:"像素定向",MD_ProgressCode:"狀態",MD_RestrictionCode:"條件約束代碼",MD_ScopeCode:"範圍",MD_SpatialRepresentationTypeCode:"空間表達類型",MD_TopicCategoryCode:"主題類別",MD_TopologyLevelCode:"拓撲等級",RS_Dimension:"維度",SV_CouplingType:"耦合類型",UCUM:"單位",UCUM_Length:"距離單位"}});