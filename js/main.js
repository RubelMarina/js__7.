function replaceCSSComments(str) {
  return str.replace(/\/\*.*?\*\/\s?/g, '');
};

console.log(replaceCSSComments('код без /*комментарий*/ комментов'));
console.log(replaceCSSComments('код бе/*коммент1*/з ком/* коммент2 */ментов'));
console.log(replaceCSSComments('код /*к1*/ без /* к2 */ коммент/*к3*/ов')); 
console.log('----------------------------');

function replaceHTMLComments(str) {
  return str.replace(/<!--.+?-->>*?\s?/gm, '').trim();
};

console.log(replaceHTMLComments('<!--коммент1--> код без комментов <!--коммент2-->'));
console.log(replaceHTMLComments('<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов'));
console.log(replaceHTMLComments('код <!--к1--> без <!-- к2 --> комментов')); 
console.log('----------------------------');

function validateFileType(str) {
 return (/.+(\.jpg|\.jpeg|\.png)$/).test(str);
};

console.log(validateFileType('image.png')); 
console.log(validateFileType('image.html')); 
console.log(validateFileType('image.file.jpg')); 
console.log(validateFileType('image.png.file')); 
console.log(validateFileType('image.png.jpeg')); 
console.log(validateFileType('image.pngjpeg')); 
console.log('----------------------------');


function checkYear(str) {
return (/^(19\d\d|20\d\d|2100)$/).test(str);
};
console.log(checkYear(1900));
console.log(checkYear(2001));
console.log(checkYear(2100));
console.log(checkYear(1899)); 
console.log(checkYear(20)); 
console.log(checkYear(200)); 
console.log(checkYear(20000)); 
console.log(checkYear('20000')); 
console.log(checkYear(19)); 
console.log(checkYear('19')); 
console.log(checkYear(2101)); 
console.log('----------------------------');

function checkEmail(str) {
return (/^[a-zA-Z-.]+@[a-zA-Z-.]+\.[a-z]{2,3}$/).test(str);
};

console.log(checkEmail('mail@gmail.com'));
console.log(checkEmail('mail.name@mail.ua'));
console.log(checkEmail('mail-name@mail.ua'));
console.log(checkEmail('mail-name@mail.com.ua'));
console.log(checkEmail('mail@gmail')); 
console.log(checkEmail('mail@gmail-com')); 
console.log(checkEmail(' mail-name@mail.com.ua')); 
console.log(checkEmail('mail-name@mail.com.ua ')); 
console.log('----------------------------');

function checkDomainUrl(str) {
return (/^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9-_][a-zA-Z0-9-_]+\.[a-zA-Z]{2,5}?$/).test(str);
};

console.log(checkDomainUrl('http://external.asd1230-123.asd_internal.asd.gm-_ail.com'));
console.log(checkDomainUrl('http://domain.com'));
console.log(checkDomainUrl('https://example.domain.com'));
console.log(checkDomainUrl('https://example.domain-hyphen.com'));
console.log(checkDomainUrl('http://example.domain-hyphen.com'));
console.log(checkDomainUrl('http://www.domain.com'));
console.log(checkDomainUrl('http://www.domain.info'));
console.log(checkDomainUrl('http://www')); 
console.log(checkDomainUrl('https://domain')); 
console.log(checkDomainUrl(' https://domain')); 
console.log(checkDomainUrl('https://domain.com ')); 
console.log(checkDomainUrl('example.museum')); 
console.log(checkDomainUrl('example.domain-hyphen.com')); 
console.log(checkDomainUrl('www.domain.com')); 
console.log(checkDomainUrl('www.example.domain-hyphen.com')); 
console.log('----------------------------');



function createLinksFromDomains(str) {
  let arr = str.split(' ');
  let arr1 = arr.map(function (i) {
    let str = '';
    let str1 = i.match('^(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}$', 'gi');
    if (str1) {str = i.replace(i, `<a href="${i}" target="_blank">${i.replace(/^(http:|https:)\/\//gi, '')}</a>`)
    return str} else {
      return i;};
  });
  let result = arr1.join(' ');
  return result;
};

console.log(createLinksFromDomains('http://site.ua text1 https://site.com text2 https://site.com.ua text3 https://subdomain.my-site.com.ua text4 https://site.com'));
console.log(createLinksFromDomains('site.ua text1 https://site.com text2 https://site.com.ua text3 subdomain.my-site.com.ua text4'));


// function createLinksFromDomains(str) {
//   let arr = str.split(' ');
//   let arr1 = arr.map(function (i) {
//     let reg = new RegExp('(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}', 'gi');
//     let str = '';
//     let str1 = reg.test(i);
//     if (str1 == true) {str = i.replace(i, `<a href="${i}" target="_blank">${i.replace(/^(http:|https:)\/\//gi, '')}</a>`)
//     return str} else {
//     return i;};
//   });

//   let result = arr1.join(' ');
//   return result;
// };