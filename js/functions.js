
export default function appFunctions() {
  fetch("http://qb.net.pl/upload/answers.json", {
    method: 'GET',
    mode: 'no-cors'})
    .then(resp => resp.text())
    .then(function(text) {
    return text ? JSON.parse(text) : {}
  })
    .then(items => console.log(items))


}