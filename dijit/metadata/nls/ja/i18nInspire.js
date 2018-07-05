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

define({documentTypes:{data:{caption:"INSPIRE (データ)",description:""},service:{caption:"INSPIRE (サービス)",description:""}},dataThemeKeywords:{caption:"INSPIRE データのテーマ"},inspireServiceType:{discovery:"検出サービス",view:"サービスの表示",download:"サービスのダウンロード",transformation:"座標変換サービス",invoke:"サービスの呼び出し",other:"その他のサービス"},keywordSections:{dataTheme:"INSPIRE データのテーマ",serviceCategory:"ISO 19119 サービス カテゴリ",gemetConcept:"GEMET のコンセプト",otherKeywords:"その他のキーワード"},LanguageCode:{bul:"ブルガリア語",cze:"チェコ語",dan:"デンマーク語",dut:"オランダ語",eng:"英語",est:"エストニア語",fin:"フィンランド語",fre:"フランス語",ger:"ドイツ語",gre:"ギリシャ語",hun:"ハンガリー語",gle:"ゲール語 (アイルランド語)",ita:"イタリア語",lav:"ラトビア語",lit:"リトアニア語",mlt:"マルタ語",pol:"ポーランド語",por:"ポルトガル語",rum:"ルーマニア語",slo:"スロバキア語",slv:"スロベニア語",spa:"スペイン語",swe:"スウェーデン語",chi:"中国語",kor:"韓国語",nor:"ノルウェー語",rus:"ロシア語",tur:"トルコ語"},otherConstraints:{noLimitations:"制限なし",confidentialityOfProceedings:"公共企業の議事録の機密性...",internationalRelations:"国際関係、治安、または国防",courseOfJustice:"正義の道、つまり、すべての人が公正な裁判を受けることができること...",confidentialityOfCommercial:"商業情報または産業情報の機密性...",intellectualProperty:"知的所有権",confidentialityOfPersonalData:"個人データ/ファイルの機密性...",interestsOrProtection:"情報を提供したすべての人の利益または保護...",protectionOfEnvironment:"この種の情報に関連する環境の保護...",freeText:"フリー テキスト"},serviceType:{humanInteractionService:"100 地理ヒューマン インタラクション サービス",humanCatalogueViewer:"101 カタログ ビューアー",humanGeographicViewer:"102 地理ビューアー",humanGeographicSpreadsheetViewer:"103 地理スプレッドシート ビューアー",humanServiceEditor:"104 サービス エディター",humanChainDefinitionEditor:"105 チェーン定義エディター",humanWorkflowEnactmentManager:"106 ワークフロー実行マネージャー",humanGeographicFeatureEditor:"107 地理フィーチャ エディター",humanGeographicSymbolEditor:"108 地理シンボル エディター ",humanFeatureGeneralizationEditor:"109 フィーチャ ジェネラライズ エディター",humanGeographicDataStructureViewer:"110 地理データ構造ビューアー",infoManagementService:"200 地理モード/情報管理サービス",infoFeatureAccessService:"201 フィーチャ アクセス サービス",infoMapAccessService:"202 マップ アクセス サービス",infoCoverageAccessService:"203 カバレッジ アクセス サービス",infoSensorDescriptionService:"204 センサー説明サービス",infoProductAccessService:"205 製品アクセス サービス",infoFeatureTypeService:"206 フィーチャ タイプ サービス",infoCatalogueService:"207 カタログ サービス",infoRegistryService:"208 レジストリ サービス",infoGazetteerService:"209 Gazetteer サービス",infoOrderHandlingService:"210 発注処理サービス",infoStandingOrderService:"211 継続発注サービス",taskManagementService:"300 地理ワークフロー/タスク管理サービス",chainDefinitionService:"301 チェーン定義サービス",workflowEnactmentService:"302 ワークフロー実行サービス",subscriptionService:"303 サブスクリプション サービス",spatialProcessingService:"400 地理処理サービス - 空間",spatialCoordinateConversionService:"401 座標変換サービス",spatialCoordinateTransformationService:"402 座標変換サービス",spatialCoverageVectorConversionService:"403 カバレッジ/ベクター変換サービス",spatialImageCoordinateConversionService:"404 画像座標変換サービス",spatialRectificationService:"405 幾何補正サービス",spatialOrthorectificationService:"406 オルソ幾何補正サービス",spatialSensorGeometryModelAdjustmentService:"407 センサー ジオメトリ モデル調整サービス",spatialImageGeometryModelConversionService:"408 画像ジオメトリ モデル変換サービス",spatialSubsettingService:"409 サブセット化サービス",spatialSamplingService:"410 サンプリング サービス",spatialTilingChangeService:"411 タイル変更サービス",spatialDimensionMeasurementService:"412 ディメンション計測サービス",spatialFeatureManipulationService:"413 フィーチャ操作サービス",spatialFeatureMatchingService:"414 フィーチャ マッチング サービス",spatialFeatureGeneralizationService:"415 フィーチャ ジェネラライズ サービス",spatialRouteDeterminationService:"416 ルート決定サービス",spatialPositioningService:"417 測位サービス",spatialProximityAnalysisService:"418 近接解析サービス",thematicProcessingService:"500 地理処理サービス - 主題",thematicGoparameterCalculationService:"501 地理パラメーター計算サービス",thematicClassificationService:"502 主題分類サービス",thematicFeatureGeneralizationService:"503 フィーチャ ジェネラライズ サービス",thematicSubsettingService:"504 サブセット化サービス",thematicSpatialCountingService:"505 空間計算サービス",thematicChangeDetectionService:"506 変更検出サービス",thematicGeographicInformationExtractionService:"507 地理情報抽出サービス",thematicImageProcessingService:"508 画像処理サービス",thematicReducedResolutionGenerationService:"509 低解像度生成サービス",thematicImageManipulationService:"510 画像操作サービス",thematicImageUnderstandingService:"511 画像理解サービス",thematicImageSynthesisService:"512 画像合成サービス",thematicMultibandImageManipulationService:"513 マルチバンド画像操作",thematicObjectDetectionService:"514 オブジェクト検出サービス",thematicGeoparsingService:"515 地理解析サービス",thematicGeocodingService:"516 ジオコーディング サービス",temporalProcessingService:"600 地理処理サービス - 時間",temporalReferenceSystemTransformationService:"601 時間参照系変換サービス",temporalSubsettingService:"602 サブセット化サービス",temporalSamplingService:"603 サンプリング サービス",temporalProximityAnalysisService:"604 時間近接解析サービス",metadataProcessingService:"700 地理処理サービス - メタデータ",metadataStatisticalCalculationService:"701 統計計算サービス",metadataGeographicAnnotationService:"702 地理アノテーション サービス",comService:"800 地理通信サービス",comEncodingService:"801 エンコード サービス",comTransferService:"802 交換サービス",comGeographicCompressionService:"803 地理圧縮サービス",comGeographicFormatConversionService:"804 地理形式変換サービス",comMessagingService:"805 メッセージング サービス",comRemoteFileAndExecutableManagement:"806 リモート ファイルおよび実行ファイル管理"},useLimitation:{noCondition:"適用条件なし",unknownCondition:"不明な条件",freeText:"フリー テキスト"}});