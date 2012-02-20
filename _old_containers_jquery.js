var regEx = /./g;

$('p,a,h1,h2,h3,h4').each(function(){
     $string1 = $(this).html();
     $string2 = $string1.replace(regEx, '&nbsp;');
     $(this).html($string2);
});
$('img').each(function(){
    $imgWidth = $(this).width();
    $imgHeight = $(this).height();
    $(this).parent().html('<div style="width:'+$imgWidth+'px;height:'+$imgHeight+'px;"></div>');
});
var regEx = /./g;
function makeBlanktest(tag){
	var tagArray = document.getElementsByTagName(tag);
	for( i=0, num = tagArray.length; i < num; i++){
		var str = tagArray[i].innerHTML.replace(regEx, '&nbsp;');
		document.getElementsByTagName(tag)[i].innerHTML = (str);
	};
};
var tags = new Array ('p', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'cite', 'blockquote', 'span', 'em', 'li', 'font', 'div', 'b', 'i', 'code', 'strong', 's', 'td', 'textarea');
for( i=0, tagsNum = tags.length; i < tagsNum; i++ ){
	makeBlanktest(tags[i]);
};
var imgArray = document.getElementsByTagName('img');
for( i=0, num = imgArray.length; i < num; i++){
	var imgWidth = imgArray[i].width;
	var imgHeight = imgArray[i].height;
	document.getElementsByTagName('img')[i].parentNode.innerHTML = ('<div style="width:'+imgWidth+'px;height:'+imgHeight+'px;"></div>');
};