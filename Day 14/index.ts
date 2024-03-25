// Question 40
function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string; title: string; tracks?: number }  = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
// Question 41
let magician: string[]=["Abhijeet", "Freddy", "ACP Pradiyuman"]
magician.forEach(magician =>{
console.log(`${magician} is a good magician`);});
// Question 43
let magicians: string[]=["Abhijeet", "Freddy", "ACP Pradiyuman"]
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); 
console.log(magicians); 


