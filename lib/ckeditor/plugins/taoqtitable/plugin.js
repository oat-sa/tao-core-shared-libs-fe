/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license

 Heavily modified for TAO usage
 @author Christophe Noël <christophe@taotesting.com>
*/
CKEDITOR.plugins.add("taoqtitable",{requires:"dialog",lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:this.path+"images/taoqtitable.png",hidpi:!1,init:function(a){var b=!0;if("table"===a.element.getAttribute("data-qti-class"))b=!1;else if(a.blockless)return;var c=a.lang.table;a.addCommand("taoqtitable",new CKEDITOR.dialogCommand("taoqtitable",
{context:"table",allowedContent:"table[summary];caption tbody thead tfoot;th td tr[scope];"+(a.plugins.dialogadvtab?"table"+a.plugins.dialogadvtab.allowedContent():""),requiredContent:"table"}));a.addCommand("taoqtitableProperties",new CKEDITOR.dialogCommand("taoqtitableProperties"));b&&a.ui.addButton&&a.ui.addButton("TaoQtiTable",{label:c.toolbar,command:"taoqtitable",toolbar:"insert,30",icon:this.path+"images/taoqtitable.png"});CKEDITOR.dialog.add("taoqtitable",this.path+"dialogs/taoqtitable.js");
CKEDITOR.dialog.add("taoqtitableProperties",this.path+"dialogs/taoqtitable.js")}});