function getCurrentTabUrl() {
  var queryInfo = {
    active: true,
    currentWindow: true,
    url: "http://www.90min.com/*"
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];

    var url = tab.url;
    affiliate_position = url.search('a_aid=')
    affiliate_position = affiliate_position === -1 ? -1 : affiliate_position - 1;

    if (affiliate_position !== -1) {
      url = url.substring(0, affiliate_position)
    }
    url_with_code = url + '?a_aid=35612';

    copyToClipboard(url_with_code)
    document.getElementById('status').textContent = "copied link";
  }
);

  function copyToClipboard(text){
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl();
});
