
var QUERY_STRING = window.location.search;
var URL_PARAMS = new URLSearchParams(QUERY_STRING);

var ARG_ITEM = URL_PARAMS.get('item');
console.log(`[Arg] Item ID: ${ARG_ITEM}`);

var ARG_TAG = URL_PARAMS.get('tag');
console.log(`[Arg] Tag ID: ${ARG_TAG}`);

var ARG_LIST = URL_PARAMS.get('list');
console.log(`[Arg] List ID: ${ARG_LIST}`);



function getNewURL (itemID, tagID)
{
  tagID = tagID ? tagID : DEFAULT_TAG;
  return `${siteURL}?item=${itemID}&tag=${tagID}`;
}

function getAmazonURL (itemID, tagID)
{
  if (!tagID) {
    tagID = TAG_DEFAULT;
  }
  return `${URL_AMAZON}/dp/${itemID}?tag=${tagID}`;
}



function getItemID (url)
{
  var itemStart = url.indexOf('/dp/');
  if (!itemStart)
  {
    return false;
  }
  itemStart += 4;
  var itemEnd = itemStart + 10;
  var itemID = url.substring(itemStart, itemEnd);
  return itemID;
}


function getElement (id) {
  var element = document.getElementById(id);
  return element;
}

/*
function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 
  var link = getNewURL(itemID, tagID);
  setValue(idNew, link);
}
*/


function setLink (id, url)
{
  var element = getElement(id);
  element.text = `${url}`;
  element.href = `${url}`;
}

function redirect (url)
{
  //var url = getAmazonURL(itemID, tagID);
  window.location.replace(`${url}`);
  //window.location.href = `${url}`;
  //setLink(url);
}

function getRedirectURL ()
{
  if (ARG_LIST) {
    return `list.html?list=${ARG_LIST}`;
  }
  if (ARG_ITEM) {
    return GetAmazonURL(ARG_ITEM, ARG_TAG);
  }
  return "new.html";
}

function pageRedirect (id)
{
  var url = getRedirectURL();
  setLink(id, url);
  redirect(url);
}
