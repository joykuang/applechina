(function(){var b=require("ac-analytics");new b.observer.Page();var a=document.addEventListener?"addEventListener":"attachEvent";
var c=document.addEventListener?"":"on";document[a](c+"readystatechange",function(){if(document.readyState==="complete"){new b.observer.Click();
new b.observer.Link();new b.observer.Section()}})}());