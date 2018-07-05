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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"ไม่มี",notComplete:"ยังไม่สมบูรณ์",other:"อื่นๆ",present:"ปัจจุบัน",unknown:"ไม่ทราบ",unpublishedMaterial:"วัสดุที่ไม่ได้เผยแพร่"},hints:{integerGreaterThanOne:"กรอกจำนวนเต็มที่มากกว่า 1",integer0To100:"กรอกจำนวนเต็ม ตั้งแต่ 0 – 100"},citeinfo:{caption:"ข้อมูลอ้างอิง",origin:"ผู้ริเริ่ม",pubdate:"วันที่ตีพิมพ์",pubtime:"เวลาที่ตีพิมพ์",title:"ชื่อ",edition:"ฉบับ",geoform:{caption:"ฟอร์มการนำเสนอข้อมูลแบบ Geospatial",atlas:"สมุดแผนที่",audio:"เสียง",diagram:"แผนภาพ",sDocument:"เอกสาร",globe:"ลูกโลก",map:"แผนที่",model:"แบบ",multiMediaPresentation:"การนำเสนอมัลติมีเดีย",profile:"ข้อมูลส่วนตัว",rasterDigitalData:"ข้อมูลดิจิตอล Raster",remoteSensingImage:"ข้อมูลภาพถ่ายระยะไกล",section:"ส่วน",spreadsheet:"สเปรดชีท",tabularDigitalData:"ข้อมูลดิจิตอล แบบตาราง",vectorDigitalData:"ข้อมูลดิจิตอล เวกเตอร์",video:"วิดีโอ",view:"วิว"},serinfo:{caption:"ข้อมูลชุด",sername:"ชื่อชุด",issue:"บัตรประจำตัวประชาชนฉบับที่"},pubinfo:{caption:"ข้อมูลที่ตีพิมพ์",pubplace:"สถานที่ตีพิมพ์",publish:"ผู้เผยแพร่"},othercit:"รายละเอียดอ้างอิงอื่นๆ",onlink:"ลิงค์เชื่อมโยง"},cntinfo:{caption:"ข้อมูลสำหรับการติดต่อ",section:{primary:"หลัก",phoneAndEmail:"เบอร์โทรศัพท์ และ อีเมล์",hoursAndInstructions:"ชั่วโมงและคำแนะนำ"},cntorgp:{caption:"โดยองค์กร",cntorg:"องค์กร",cntper:"บุคคล"},cntperp:{caption:"โดยบุคคล",cntper:"บุคคล",cntorg:"องค์กร"},cntpos:"ตำแหน่ง",cntaddr:{caption:"ที่อยู่",addrtype:{caption:"ประเภทที่อยู่",mailing:"จดหมาย",physical:"ทางกายภาพ",mailingAndPhysical:"ทางไปรษณีย์และทางกายภาพ"},address:"ที่อยู่",city:"เทศบาล",state:"เมือง",postal:"รหัสไปรษณีย์",country:"ประเทศ"},cntvoice:"เสียงพูด",cnttdd:"TDD/TTY โทรศัพท์ (สำหรับผู้พิการทางเสียง)",cntfax:"โทรสาร",cntemail:"ที่อยู่จดหมายอิเล็กทรอนิกส์",hours:"ชั่วโมง",cntinst:"คู่มือ"},dataqual:{caption:"รายละเอียดคุณภาพของข้อมูล",section:{attributeAccuracy:"ความถูกต้องของข้อมูลเชิงบรรยาย",logicalConsistency:"ความสอดคล้องเชิงตรรกะ",completeness:"ความสมบูรณ์",positionalAccuracy:"ความถูกต้องด้านตำแหน่ง",lineage:"ที่มา",cloudCover:"ครอบคลุม Cloud"},attracc:{caption:"ความถูกต้องของข้อมูลเชิงบรรยาย",attraccr:"รายงานความถูกต้องของข้อมูลเชิงบรรยาย",qattracc:{caption:"การประเมินผลความถูกต้องข้อมูลเชิงปริมาณของข้อมูลเชิงบรรยาย",attraccv:"ค่าความถูกต้องข้อมูลเชิงบรรยาย",attracce:"คำอธิบายความถูกต้องข้อมูลเชิงบรรยาย"}},logic:"ตรรกะรายงานความสอดคล้อง",complete:"รายงานสมบูรณ์",posacc:"ความถูกต้องของตำแหน่ง",horizpa:{caption:"ความถูกต้องของตำแหน่งในแนวราบ",horizpar:"รายงานความถูกต้องของตำแหน่งในแนวราบ",qhorizpa:{caption:"การประเมินผลความถูกต้องของตำแหน่งข้อมูลแนวราบเชิงปริมาณ",horizpav:"ค่าความถูกต้องตำแหน่งในแนวราบ",horizpae:"คำอธิบายความถูกต้องตำแหน่งในแนวราบ"}},vertacc:{caption:"ความถูกต้องตำแหน่งในแนวตั้ง",vertaccr:"รายงานความถูกต้องตำแหน่งในแนวตั้ง",qvertpa:{caption:"การประเมินผลความถูกต้องของตำแหน่งข้อมูลแนวตั้งเชิงปริมาณ",vertaccv:"ค่าความถูกต้องตำแหน่งในแนวตั้ง",vertacce:"คำอธิบายความถูกต้องตำแหน่งในแนวตั้ง"}},lineage:{caption:"ที่มา"},srcinfo:{caption:"แหล่งที่มาของข้อมูล",srccite:"การอ้างอิงแหล่งที่มา",srcscale:"ตัวส่วนขนาดที่มา",typesrc:{caption:"ประเภทของแหล่งที่มาสื่อ",paper:"กระดาษ",stableBaseMaterial:"วัสดุที่มีความเสถียร",microfiche:"ฟิล์ม",microfilm:"ฟิล์มขนาดเล็ก",audiocassette:"เทปเสียง",chart:"แผนภูมิ",filmstrip:"แถบฟิล์ม",transparency:"โปร่งแสง",videocassette:"วิดีโอเทป",videodisc:"แผ่นวิดีโอ",videotape:"วิดีโอเทป",physicalModel:"แบบจำลองทางกายภาพ",computerProgram:"โปรแกรมคอมพิวเตอร์",disc:"แผ่นบันทึกข้อมูล",cartridgeTape:"ตลับเทป",magneticTape:"เทปแม่เหล็ก",online:"ออนไลน์",cdrom:"ซีดีรอม",electronicBulletinBoard:"กระดานข่าวอิเล็กทรอนิกส์",electronicMailSystem:"ระบบจดหมายอิเล็กทรอนิกส์"},srctime:"ที่มาของเนื้อหา",srccurr:"แหล่งที่มาปัจจุบันเพื่ออ้างอิง",srccitea:"แหล่งที่มาของการอ้างอิงชื่อย่อ",srccontr:"แหล่งที่มาของเงินสมทบ"},procstep:{caption:"ขั้นตอนกระบวนการ",procdesc:"คำอธิบายกระบวนการ",srcused:"แหล่งที่มาอ้างอิงการใช้ชื่อย่อ",procdate:"วันที่ดำเนินการ",proctime:"ระยะเวลาดำเนินการ",srcprod:"ชื่อย่อแหล่งที่มากระบวนการผลิต",proccont:"กระบวนการติดต่อ"},cloud:"ครอบคลุม Cloud"},distinfo:{caption:"ข้อมูลการจัดจำหน่าย",section:{distributor:"ตัวแทนจำหน่าย",description:"คำบรรยาย",orderProcess:"ขั้นตอนการสั่งซื้อ",prerequisites:"ข้อกำหนดเบื้องต้น",availability:"สภาพพร้อมใช้งาน"},distrib:"ตัวแทนจำหน่าย",resdesc:{caption:"รายละเอียดทรัพยากร",liveData:"ข้อมูลสด และแผนที่",downloadableData:"ข้อมูลที่สามารถดาวน์โหลดได้",offlineData:"ข้อมูลออฟไลน์",staticMapImages:"ภาพแผนที่แบบคงที่",sDocument:"เอกสารอื่น",application:"แอพพลิเคชัน",geographicService:"การให้บริการทางภูมิศาสตร์",clearingHouse:"หน่วยงานกลาง",mapFiles:"ไฟล์แผนที่",geographicActivies:"กิจกรรมทางภูมิศาสตร์"},distliab:"รายงานการกระจายทรัพย์สิน",custom:"ขั้นตอนการสั่งซื้อที่กำหนดเอง",techpreq:"เทคนิคที่กำหนดเบื้องต้น",availabl:"สภาพพร้อมใช้งาน"},eainfo:{caption:"เอกลักษณ์และรายละเอียดข้อมูลเชิงบรรยาย",overview:"ลักษณะภาพรวม",eaover:"เอกลักษณ์ และภาพรวมข้อมูลเชิงบรรยาย",eadetcit:"เอกลักษณ์ และรายละเอียดการอ้างอิงข้อมูลเชิงบรรยาย"},idinfo:{caption:"ข้อมูลประจำตัว",section:{timeAndStatus:"เวลา และสถานะ",constraints:"ข้อจำกัด",contact:"ติดต่อ",additional:"เพิ่มเติม"},citeinfo:"การอ้างอิง",descript:{caption:"คำบรรยาย",sAbstract:"นามธรรม",purpose:"วัตถุประสงค์",supplinf:"ข้อมูลเพิ่มเติม"},timeperd:{caption:"ช่วงเวลาของเนื้อหา",current:{caption:"การอ้างอิงปัจจุบัน",groundCondition:"สภาพพื้นดิน",publicationDate:"วันที่เผยแพ่"}},status:{caption:"สถานะ",progress:{caption:"ความคืบหน้า",complete:"สมบูรณ์",inWork:"ในการทำงาน",planned:"วางแผน"},update:{caption:"การบำรุงรักษาและความถี่ในการอัพเดท",continual:"ความต่อเนื่อง",daily:"รายวัน",weekly:"รายสัปดาห์",monthly:"รายเดือน",annually:"เป็นประจำทุกปี",unknown:"ไม่ทราบ",asNeeded:"ตามความจำเป็น",irregular:"ผิดปกติ",nonePlanned:"ขาดการวางแผน"}},spdom:{caption:"ขอบเขต",bounding:{caption:"ขอบเขตค่าพิกัด",westbc:"ขอบเขตค่าพิกัดทางทิศตะวันตก",eastbc:"ขอบเขตค่าพิกัดทางทิศตะวันออก",northbc:"ขอบเขตค่าพิกัดทางทิศเหนือ",southbc:"ขอบเขตค่าพิกัดทางทิศใต้"}},keywords:{caption:"คำสำคัญ",theme:"หัวข้อ",place:"สถานที่",stratum:"ชั้น",temporal:"ช่วงเวลา",thesaursus:"อรรถาที่เกี่ยวข้อง",delimited:"คำสำคัญ",themektIsoTopicCategory:"หัวข้อ มาตรฐาน ISO",themektIsoTopicDialog:"หัวข้อ มาตรฐาน ISO",placektGnis:"ชื่อระบบสารสนเทศทางภูมิศาสตร์"},accconst:"ข้อจำกัดการเข้าถึง",useconst:"ข้อกำหนดการใช้",ptcontac:"ตำแหน่งการติดต่อเพื่อทรัพยากร",browse:{caption:"เรียกดูกราฟิก",browsen:"เรียกดูลิงค์กราฟิก",browsed:"เรียกดูรายละเอียดไฟล์กราฟิก",browset:"เรียกดูประเภทไฟล์กราฟิก"},datacred:"ชุดข้อมูลเครดิต",secinfo:{caption:"ความปลอดภัยของข้อมูล",secsys:"ระบบรักษาความปลอดภัยการจัดหมวดหมู่",secclass:{caption:"การรักษาความปลอดภัยการจัดหมวดหมู่",topSecret:"ความลับสุดยอด",secret:"ความลับ",confidential:"ลับ",restricted:"หวงห้าม",unclassified:"ไม่เป็นความลับ",sensitive:"รู้สึกไว"},sechandl:"รายละเอียดการจัดการความปลอดภัย"},sNative:"ข้อมูลชุดสิ่งแวดล้อมพื้นเมือง",crossref:"ข้ามการอ้างอิง"},metadata:{idinfo:"การวินิจฉัย",dataqual:"คุณภาพ",spdoinfo:"องค์กรข้อมูลเชิงพื้นที่",spref:"การอ้างอิงเชิงพื้นที่",eainfo:"เอกลักษณ์ และข้อมูลเชิงบรรยาย",distinfo:"การกระจาย",metainfo:"คำอธิบายข้อมูล"},metainfo:{caption:"ข้อมูล metadata",section:{dates:"วันที่ metadata",contact:"การติดต่อ metadata",standard:"Metadata พื้นฐาน",additional:"เพิ่มเติม"},metd:"วันที่ metadata",metrd:"วันที่ตรวจสอบ metadata",metfrd:"วันที่ตรวจสอบ metadata ในอนาคต",metstdn:"ชื่อมาตรฐานของ metadata",metstdv:"รุ่นมาตรฐาน metadata",metac:"ข้อจำกัดการเข้าถึง metadata",metuc:"ข้อจำกัดการใช้งาน metadata",metsi:{caption:"ข้อมูลความปลอดภัย metadata",metscs:"ระบบรักษาความปลอดภัยการจัดหมวดหมู่ metadata",metsc:"การรักษาความปลอดภัยการจัดหมวดหมู่ metadata",metshd:"รายละเอียดการจัดการความปลอดภัย metadata"}},spref:{caption:"ข้อมูลการอ้างอิงเชิงพื้นที่",horizsys:{caption:"ระบบพิกัดในแนวราบ",geograph:{caption:"ทางภูมิศาสตร์",latres:"ความละเอียดค่าละติจูด",longres:"ความละเอียดค่าลองจิจูด",geogunit:{caption:"หน่วยวัดค่าพิกัดทางภูมิศาสตร์",decimalDegrees:"องศาทศนิยม",decimalMinutes:"นาทีทศนิยม",decimalSeconds:"วินาทีทศนิยม",degreesAndDecimalMinutes:"องศาและนาทีทศนิยม",degreesMinutesAndDecimalSeconds:"องศา นาที และ วินาทีทศนิยม",radians:"รัศมี",grads:"จบ"}},planar:{caption:"กราฟเชิงระนาบ"},local:{caption:"ท้องถิ่น",localdes:"คำอธิบายท้องถื่น",localgeo:"ข้อมูล georeference ท้องถิ่น"},geodetic:{caption:"รูปแบบภูมิมาตรศาสตร์",horizdn:{caption:"ชื่อตัวเลขในแนวนอน",nad83:"ตัวเลขอ้างอิง อเมริกาเหนือ ปี 1983",nad27:"ตัวเลขอ้างอิง อเมริกาเหนือ ปี 1927"},ellips:{caption:"ชื่อทรงรี",grs80:"ระบบอ้างอิงภูมิมาตรศาสตร์ 80",clarke1866:"คล๊าร์ค 1866"},semiaxis:"กึ่งแกนหลัก",denflat:"อัตราส่วนตัวเลขในแนวราบ"}},vertdef:{caption:"ระบบพิกัดในแนวตั้ง",altsys:{caption:"ระบบความสูง",altdatum:{caption:"ชื่อตัวเลขความสูง",navd88:"ตัวเลขอ้างอิง ในแนวตั้ง อเมริกาเหนือ ปี 1988",ngvd29:"ตัวเลขอ้างอิง National Geodetic แนวตั้ง ปี 1929"},altres:"ความละเอียดสูง",altunits:{caption:"หน่วยระยะทางความสูง",meters:"เมตร",feet:"ฟุต"},altenc:{caption:"วิธีการเข้ารหัส ระดับความสูง",explicit:"ระดับความสูงที่แม่นยำพร้อมระบบพิกัดแนวนอน",implicit:"พิกัดที่แน่นอน",attribute:"ค่าข้อมูลเชิงบรรยาย"}},depthsys:{caption:"ระบบความลึก",depthdn:{caption:"ชื่อเรียกตัวเลขความลึก",option1:"พื้นผิวท้องถิ่น",option2:"ผังตัวเลข , ตัวเลขสำหรับลดเสียงลง",option3:"น้ำขึ้นน้ำลงต่ำสุด",option4:"น้ำขึ้นน้ำลงสูงสุด",option5:"น้ำลงเต็มที่ปานกลาง",option6:"ค่าเฉลี่ยของระดับน้ำขึ้นเต็มที่ทั้งหมด",option7:"ระดับทะเลปานกลาง",option8:"ตัวเลขการสำรวจที่ดิน",option9:"น้ำลงเต็มที่หน้าน้ำเกิดปานกลาง หรือค่าเฉลี่ยน้ำลงเต็มที่ในช่วงเดือนเพ็ญ",option10:"ค่าเฉลี่ยน้ำขึ้นเต็มที่ในช่วงเดือนเพ็ญ",option11:"น้ำลงเต็มที่หน้าน้ำตายปานกลาง หรือค่าเฉลี่ยน้ำลงเต็มที่",option12:"น้ำขึ้นเต็มที่หน้าน้ำตายปานกลาง ค่าเฉลี่ยน้ำขึ้นเต็มที่ในช่วงกึ่งปักษ์",option13:"น้ำลงเต็มที่ยอดต่ำปานกลาง",option14:"น้ำลงเต็มที่ยอดต่ำปานกลาง",option15:"น้ำขึ้นเต็มที่ยอดสูงปานกลาง",option16:"น้ำขึ้นเต็มที่ ยอดต่ำปานกลาง",option17:"น้ำขึ้นเต็มที่ยอดต่ำปานกลาง",option18:"ช่วงหน้าน้ำเกิด",option19:"น้ำลงเต็มที่",option20:"ช่วงหน้าน้ำตาย",option21:"น้ำขึ้นเต็มที่",option22:"น้ำขึ้นสูง",option23:"น้ำลงเต็มที่",option24:"พื้นที่น้ำลง",option25:"น้ำลงต่ำสุด",option26:"น้ำลงเต็มที่",option27:"น้ำลงปกติต่ำสุด",option28:"ระดับน้ำขึ้น",option29:"น้ำลงเต็มที่ในอินเดีย",option30:"น้ำขึ้นเต็มที่",option31:"น้ำลงเต็มที่",option32:"ระดับน้ำอ้างอิงในโคลัมเบีย",option33:"ระดับน้ำลงบริเวณชายฝั่ง",option34:"น้ำลงบริเวณศูนย์สูตร",option35:"ประมาณค่าทางดาราศาสตร์ต่ำสุด",option36:"ไม่มีการแก้ไข"},depthres:"ความละเอียดค่าความลึก",depthdu:{caption:"หน่วยของการวัดความลึก",meters:"เมตร",feet:"ฟุต"},depthem:{caption:"วิธีการวัดความลึก",explicit:"ความลึกที่แม่นยำพร้อมระบบพิกัดแนวนอน",implicit:"พิกัดที่แน่นอน",attribute:"ค่าข้อมูลเชิงบรรยาย"}}}},timeinfo:{caption:"ข้อมูลช่วงระยะเวลา",sngdate:"วันเดียว",mdattim:"หลายวัน",rngdates:"ช่วงวัน",caldate:"วันที่",time:"เวลา",begdate:"วันเริ่มต้น",begtime:"เวลาเริ่มต้น",enddate:"วันสิ้นสุด",endtime:"เวลาสิ้นสุด"}});