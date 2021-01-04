// JavaScript Document
var TheDays = new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();
if(TheDays=="2020-4-4"){
    $("head").append('<script type="text/javascript" src="http://www.guizhou.gov.cn/material/grayscale.js" ignoreapd="1"></script>');
    $("head").append("<style type='text/css'>body,html{ -webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); filter: grayscale(100%); filter: gray; background-color: #EEE !important; }</style>");
    window.onload=function(){grayscale(document.body)}
}