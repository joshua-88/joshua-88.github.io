var title = ['NASI GORENG', 'NASI UDUK'];
var image = ['images/nasi_goreng.jpg', 'images/nasi_uduk.jpg'];
var deskripsi = ['Hidangan nasi yang harum dengan ayam udang, dan irisan telor dadar ini adalah makanan yang paling nyaman untuk pecinta rempah-rempah.', 'Nasi uduk, satu komponen terpenting dalam keseharian orang Indonesia dari sarapan hingga makan malam. Rasanya yang gurih dan menyenangkan ini begitu tepat dipadukan dengan bermacam-macam lauk pauk. Dari telur, ayam, hingga daging; nasi uduk adalah pemersatunya. Tambahkan lalapan dan sambal, maka lengkap sudah pengalaman makan kita.'];
var bahan = ['1 piring nasi dingin <br> 5 bhn cabe rawit, iris <br> 3 bhn bawang merah, iris <br> 2 siung bawang putih iris <br> 1 btr telur <br> 1 sdm kecap manis <br> ½ sdt gula pasir <br> Secukupnya garam ', '300g beras, cuci bersih <br>250ml air <br>200ml santan encer dari 1/2 butir kelapa <br>2lembar daun salam <br>2batang serai, memarkan <br>5cm lengkuas <br>1.5sdt Royco Kaldu Ayam'];
var prosedur = ['1. Masukkan beras ke dalam wajan medium heavy-based dan tambahkan 520ml air. Cepat didihkan, aduk sekali dan tutup dengan penutup yang rapat. Kecilkan api dan masak selama 10 menit. Buka tutupnya, isi dengan garpu dan sebarkan di atas nampan. Sisihkan hingga dingin. <br><br>2. Sementara itu, panaskan 1 sdm minyak dalam wajan besar dengan api sedang. Tuang telur kocok dan, saat telur mulai matang, gunakan spatula untuk memasukkan serpihan besar telur matang ke tengah telur dadar. Lanjutkan memasak seperti ini selama beberapa menit, lalu biarkan sisa telur mengeras sepenuhnya. Balik telur dadar dan pindahkan ke piring agar dingin sebelum dipotong menjadi potongan-potongan tipis dan panjang. <br><br>3. Masukkan kacang ke dalam panci berisi air asin mendidih dan masak selama 3 menit. Tiriskan, segarkan dengan air dingin dan sisihkan. <br><br>4. Panaskan sisa minyak dalam wajan atau penggorengan besar hingga hampir berasap. Tambahkan ayam dan udang, dan tumis selama 1 menit. Masukkan bawang merah, bawang putih, cabai dan wortel, dan tumis selama 2 menit lagi sampai wortel empuk. Tambahkan pasta bumbu dan tumis selama 1 menit lagi. Tambahkan pure tomat, kecap manis, nasi dan kacang hijau, dan tumis dengan api besar selama 2 menit. Tambahkan kecap, daun bawang, dan irisan telur dadar, aduk rata. <br><br>5. Sendokkan nasi goreng ke piring hangat. Tumpuk mentimun dan tomat di setiap sisi piring, taburkan di atas bawang goreng yang renyah dan sajikan dengan kerupuk udang.', '1. Rebus air dan santan, lalu masukkan daun salam, serai, lengkuas dan Royco Kaldu Ayam. Aduk hingga mendidih.<br><br>2. Masukkan beras, masak dengan api sedang hingga air habis. Matikan api. <br><br>3. Siapkan panci kukus dan tuang campuran beras ke dalam dandang. Kukus selama 25 menit hingga nasi matang dan tanak.'];
var content2 = '<h1>' + title[0] +
    '</h1><img src ="' + image[0] + 
    '"><h3>Deskripsi</h3><p>' + deskripsi[0] + 
    '</p><h3>Bahan</h3><p>' + bahan[0] + 
    '</p><h3>Prosedur</h3><p>' + prosedur[0] + '</p>'
    ;
var i = 0;

function nextItem() {
    i = i + 1; // increase i by one
    i = i % title.length; // if we've gone too high, start from `0` again
    content = '<h1>'+ title[i] +
    '</h1><img src ="' + image[i] + 
    '"><h3>Deskripsi</h3><p>' + deskripsi[i] + 
    '</p><h3>Bahan</h3><p>' + bahan[i] + 
    '</p><h3>Prosedur</h3><p>' + prosedur[i] + '</p>'
    ;
    return content; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = title.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    content = '<h1>'+ title[i] +
    '</h1><img src ="' + image[i] + 
    '"><h3>Deskripsi</h3><p>' + deskripsi[i] + 
    '</p><h3>Bahan</h3><p>' + bahan[i] + 
    '</p><h3>Prosedur</h3><p>' + prosedur[i] + '</p>'
    ;
    return content; // give us back the item of where we are now
}

window.addEventListener('load', function () {
    document.getElementById('output').innerHTML = content2; // initial value
    document.getElementById('prev_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('output').innerHTML = prevItem();
        }
    );
    
    document.getElementById('next_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('output').innerHTML = nextItem();
        }
    );
});

function menuin() {
    document.querySelector('#swipemenu').style.left = '0px';
    //document.querySelector('#closebutton').style.display = 'block';
    setTimeout(function(){ document.querySelector('#closebutton').style.opacity = '0.8' }, 50);
}

function menuout() {
    document.querySelector('#swipemenu').style.left = '-100vw';
    //document.querySelector('#closebutton').style.opacity = '0' ;
    setTimeout(function(){ document.querySelector('#closebutton').style.display = 'none'; }, 1000);
}