var regEx = /./g;

/* array of html tags and replace with &nbsp function */
function makeBlanktest(tag){
	var tagArray = document.getElementsByTagName(tag);
	for(var media = 0, num = tagArray.length; media < num; media++){
		var str = tagArray[media].innerHTML.replace(regEx, '&nbsp;');
		document.getElementsByTagName(tag)[media].innerHTML = (str);
	};
};


var tags = new Array ('p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'cite', 'blockquote', 'span', 'em', 'li', 'font', 'div', 'b', 'i', 'code', 'strong', 's', 'td', 'textarea');
for(var element=0, tagsNum = tags.length; element < tagsNum; element++ ){
	makeBlanktest(tags[element]);	
};

/* array of media html tags and replace with blank box with same dimensions */
function makeBlankMedia(mediaTag){
	var mediaArray = document.getElementsByTagName(mediaTag);
	for(var img=0, num = mediaArray.length; img < num; img++){
		var mediaWidth = mediaArray[img].width;
		var mediaHeight = mediaArray[img].height;
		document.getElementsByTagName(mediaTag)[img].parentNode.innerHTML = ('<div style="width:'+mediaWidth+'px;height:'+mediaHeight+'px;"></div>');
	};
};

var mediaTags = new Array ('iframe', 'img', 'object', 'embed');
for (var i = 0, mediaNum = mediaTags.length; i < mediaNum; i++) {
	makeBlankMedia(mediaTags[i]);
}