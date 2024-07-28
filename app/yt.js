export function youtube_parser(url) {
  url = url.replace(/\?si=.*/, '');
  var musicUrlRegExp = /^.*((music\.youtube\.com\/)|(youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var musicMatch = url.match(musicUrlRegExp);
  if (musicMatch && musicMatch[8]?.length === 11) {
    return musicMatch[8];
  }

  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);

  return (match && match[7]?.length === 11) ? match[7] : false;
}
