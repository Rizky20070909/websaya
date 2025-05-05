const nama = "Rizky Ramadan";
let usia = 90;

let biodata = document.getElementById ('biodata')

function generateBiodata() {
    let generasi;

    if (usia >= 10 && usia <= 18 ) {
        generasi = "generasi remaja";
    } 
    else if (usia >= 19 && usia <= 28) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 28 && usia <= 90) {
        generasi = "generasi tua";
    }
    else if (usia => 1 && usia <= 10) {
        generasi = "generasi bocil epep";
    }
    else {
        console.log('lu orang mana bro heheh')
    }
}

console.log(nama);
console.log(usia);

generateBiodata();