/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
!function(){function e(e,t,r){var s=o[this.id];if(s)for(var l=this instanceof CKEDITOR.ui.dialog.checkbox,d=0;d<s.length;d++){var c=s[d];switch(c.type){case i:if(!e)continue;if(null!==e.getAttribute(c.name))return e=e.getAttribute(c.name),l?this.setValue("true"==e.toLowerCase()):this.setValue(e),void 0;l&&this.setValue(!!c["default"]);break;case n:if(!e)continue;if(c.name in r)return e=r[c.name],l?this.setValue("true"==e.toLowerCase()):this.setValue(e),void 0;l&&this.setValue(!!c["default"]);break;case a:if(!t)continue;if(t.getAttribute(c.name))return e=t.getAttribute(c.name),l?this.setValue("true"==e.toLowerCase()):this.setValue(e),void 0;l&&this.setValue(!!c["default"])}}}function t(e,t,r){var s=o[this.id];if(s)for(var l=""===this.getValue(),d=this instanceof CKEDITOR.ui.dialog.checkbox,c=0;c<s.length;c++){var u=s[c];switch(u.type){case i:if(!e||"data"==u.name&&t&&!e.hasAttribute("data"))continue;var h=this.getValue();l||d&&h===u["default"]?e.removeAttribute(u.name):e.setAttribute(u.name,h);break;case n:if(!e)continue;if(h=this.getValue(),l||d&&h===u["default"])u.name in r&&r[u.name].remove();else if(u.name in r)r[u.name].setAttribute("value",h);else{var p=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",e.getDocument());p.setAttributes({name:u.name,value:h}),1>e.getChildCount()?p.appendTo(e):p.insertBefore(e.getFirst())}break;case a:if(!t)continue;h=this.getValue(),l||d&&h===u["default"]?t.removeAttribute(u.name):t.setAttribute(u.name,h)}}}for(var i=1,n=2,a=4,o={id:[{type:i,name:"id"}],classid:[{type:i,name:"classid"}],codebase:[{type:i,name:"codebase"}],pluginspage:[{type:a,name:"pluginspage"}],src:[{type:n,name:"movie"},{type:a,name:"src"},{type:i,name:"data"}],name:[{type:a,name:"name"}],align:[{type:i,name:"align"}],"class":[{type:i,name:"class"},{type:a,name:"class"}],width:[{type:i,name:"width"},{type:a,name:"width"}],height:[{type:i,name:"height"},{type:a,name:"height"}],hSpace:[{type:i,name:"hSpace"},{type:a,name:"hSpace"}],vSpace:[{type:i,name:"vSpace"},{type:a,name:"vSpace"}],style:[{type:i,name:"style"},{type:a,name:"style"}],type:[{type:a,name:"type"}]},r="play loop menu quality scale salign wmode bgcolor base flashvars allowScriptAccess allowFullScreen".split(" "),s=0;s<r.length;s++)o[r[s]]=[{type:a,name:r[s]},{type:n,name:r[s]}];for(r=["allowFullScreen","play","loop","menu"],s=0;s<r.length;s++)o[r[s]][0]["default"]=o[r[s]][1]["default"]=!0;CKEDITOR.dialog.add("flash",function(i){var n,a=!i.config.flashEmbedTagOnly,o=i.config.flashAddEmbedTag||i.config.flashEmbedTagOnly,r="<div>"+CKEDITOR.tools.htmlEncode(i.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';return{title:i.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){this.fakeImage=this.objectNode=this.embedNode=null,n=new CKEDITOR.dom.element("embed",i.document);var e=this.getSelectedElement();if(e&&e.data("cke-real-element-type")&&"flash"==e.data("cke-real-element-type")){this.fakeImage=e;var t=i.restoreRealElement(e),a=null,o=null,r={};if("cke:object"==t.getName()){a=t,t=a.getElementsByTag("embed","cke"),0<t.count()&&(o=t.getItem(0));for(var t=a.getElementsByTag("param","cke"),s=0,l=t.count();l>s;s++){var d=t.getItem(s),c=d.getAttribute("name"),d=d.getAttribute("value");r[c]=d}}else"cke:embed"==t.getName()&&(o=t);this.objectNode=a,this.embedNode=o,this.setupContent(a,o,r,e)}},onOk:function(){var e=null,t=null,n=null;if(this.fakeImage?(e=this.objectNode,t=this.embedNode):(a&&(e=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",i.document),e.setAttributes({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"})),o&&(t=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",i.document),t.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"}),e&&t.appendTo(e))),e)for(var n={},r=e.getElementsByTag("param","cke"),s=0,l=r.count();l>s;s++)n[r.getItem(s).getAttribute("name")]=r.getItem(s);r={},s={},this.commitContent(e,t,n,r,s),e=i.createFakeElement(e||t,"cke_flash","flash",!0),e.setAttributes(s),e.setStyles(r),this.fakeImage?(e.replace(this.fakeImage),i.getSelection().selectElement(e)):i.insertElement(e)},onHide:function(){this.preview&&this.preview.setHtml("")},contents:[{id:"info",label:i.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:i.lang.common.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(i.lang.flash.validateSrc),setup:e,commit:t,onLoad:function(){var e=this.getDialog(),t=function(t){n.setAttribute("src",t),e.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(n.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')};e.preview=e.getContentElement("info","preview").getElement().getChild(3),this.on("change",function(e){e.data&&e.data.value&&t(e.data.value)}),this.getInputElement().on("change",function(){t(this.getValue())},this)}},{type:"button",id:"browse",filebrowser:"info:src",hidden:!0,style:"display:inline-block;margin-top:10px;",label:i.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",requiredContent:"embed[width]",style:"width:95px",label:i.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(i.lang.common.invalidHtmlLength.replace("%1",i.lang.common.width)),setup:e,commit:t},{type:"text",id:"height",requiredContent:"embed[height]",style:"width:95px",label:i.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(i.lang.common.invalidHtmlLength.replace("%1",i.lang.common.height)),setup:e,commit:t},{type:"text",id:"hSpace",requiredContent:"embed[hspace]",style:"width:95px",label:i.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(i.lang.flash.validateHSpace),setup:e,commit:t},{type:"text",id:"vSpace",requiredContent:"embed[vspace]",style:"width:95px",label:i.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(i.lang.flash.validateVSpace),setup:e,commit:t}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:r}]}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:i.lang.common.upload,elements:[{type:"file",id:"upload",label:i.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:i.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:i.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",requiredContent:"embed[scale]",label:i.lang.flash.scale,"default":"",style:"width : 100%;",items:[[i.lang.common.notSet,""],[i.lang.flash.scaleAll,"showall"],[i.lang.flash.scaleNoBorder,"noborder"],[i.lang.flash.scaleFit,"exactfit"]],setup:e,commit:t},{id:"allowScriptAccess",type:"select",requiredContent:"embed[allowscriptaccess]",label:i.lang.flash.access,"default":"",style:"width : 100%;",items:[[i.lang.common.notSet,""],[i.lang.flash.accessAlways,"always"],[i.lang.flash.accessSameDomain,"samedomain"],[i.lang.flash.accessNever,"never"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",requiredContent:"embed[wmode]",label:i.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[i.lang.common.notSet,""],[i.lang.flash.windowModeWindow,"window"],[i.lang.flash.windowModeOpaque,"opaque"],[i.lang.flash.windowModeTransparent,"transparent"]],setup:e,commit:t},{id:"quality",type:"select",requiredContent:"embed[quality]",label:i.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[i.lang.common.notSet,""],[i.lang.flash.qualityBest,"best"],[i.lang.flash.qualityHigh,"high"],[i.lang.flash.qualityAutoHigh,"autohigh"],[i.lang.flash.qualityMedium,"medium"],[i.lang.flash.qualityAutoLow,"autolow"],[i.lang.flash.qualityLow,"low"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",requiredContent:"object[align]",label:i.lang.common.align,"default":"",style:"width : 100%;",items:[[i.lang.common.notSet,""],[i.lang.common.alignLeft,"left"],[i.lang.flash.alignAbsBottom,"absBottom"],[i.lang.flash.alignAbsMiddle,"absMiddle"],[i.lang.flash.alignBaseline,"baseline"],[i.lang.common.alignBottom,"bottom"],[i.lang.common.alignMiddle,"middle"],[i.lang.common.alignRight,"right"],[i.lang.flash.alignTextTop,"textTop"],[i.lang.common.alignTop,"top"]],setup:e,commit:function(e,i,n,a,o){var r=this.getValue();t.apply(this,arguments),r&&(o.align=r)}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(i.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:i.lang.flash.chkMenu,"default":!0,setup:e,commit:t},{type:"checkbox",id:"play",label:i.lang.flash.chkPlay,"default":!0,setup:e,commit:t},{type:"checkbox",id:"loop",label:i.lang.flash.chkLoop,"default":!0,setup:e,commit:t},{type:"checkbox",id:"allowFullScreen",label:i.lang.flash.chkFull,"default":!0,setup:e,commit:t}]}]}]},{id:"advanced",label:i.lang.common.advancedTab,elements:[{type:"hbox",children:[{type:"text",id:"id",requiredContent:"object[id]",label:i.lang.common.id,setup:e,commit:t}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",requiredContent:"embed[bgcolor]",label:i.lang.flash.bgcolor,setup:e,commit:t},{type:"text",id:"class",requiredContent:"embed(cke-xyz)",label:i.lang.common.cssClass,setup:e,commit:t}]},{type:"text",id:"style",requiredContent:"embed{cke-xyz}",validate:CKEDITOR.dialog.validate.inlineStyle(i.lang.common.invalidInlineStyle),label:i.lang.common.cssStyle,setup:e,commit:t}]}]}})}();