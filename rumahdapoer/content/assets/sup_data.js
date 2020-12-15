var title = ['SOTO BETAWI', 'SAYUR ASEM'];
var image = ['images/soto_betawi.jpg', 'images/sayur_asem.jpg'];
var deskripsi = ['Soto Betawi merupakan salah satu kuliner khas Jakarta yang muncul sekitar tahun 1977-1978. Yang mempopulerkan dan pertama memakai kata Soto Betawi adalah penjual soto di THR Lokasari. Selain daging sapi, jeroan seperti paru, usus, dan babat juga digunakan sebagai bahan baku soto ini.', 'Sayur asem atau sayur asam adalah sup sayur khas Indonesia. Ini adalah hidangan Asia Tenggara populer yang berasal dari masakan Sunda, terdiri dari sayuran dalam sup asam.'];
var bahan = ['150 gr daging sandung lemur<br>100 gr daging babat<br>100 gr paru sapi<br>3 cm jahe<br>2 siung bawang putih. Haluskan<br>5 butir cengkeh<br>½ biji pala<br>1 butir bunga pekak<br>3 cm kayu manis<br>1 batang serai<br>2 lembar daun salam<br>1 lembar daun jeruk<br>2 cm kunyit. Haluskan<br>150 ml santan<br>250 susu cair<br>½ sdt garam<br>½ sdt lada<br>½ sdt gula<br>Minyak untuk menggoreng<br>1 batang seledri<br>20 gr kentang. Potong dadu. Goreng<br>1 buah tomat<br><br>Bumbu merah<br>11 siung bawang merah<br>5 siung bawang putih<br>3 butir kemiri<br>3 buah cabai merah. Buang biji<br>1 cm jahe<br>1 cm lengkuas<br><br>Bahan pelengkap<br>Emping<br>Jeruk limau<br>Bawang goreng<br>Kecap manis<br>', '150 gram daging tetelan<br>2 lembar daun salam<br>2 cm lengkuas, dimemarkan<br>50 gram melinjo<br> 50 gram kacang tanah, direbus, ditumbuk kasar <br>150 gram nangka muda, dipotong-potong<br> 1 buah jagung manis, dipotong-potong<br>50 gram pepaya muda, dipotong-potong<br>100 gram labu siam, dipotong-potong<br>20 gram asam jawa dan<br>4 sendok makan air, dilarutkan<br>1 1/2 sendok makan garam<br> 1/2 sendok makan gula pasir'];
var prosedur = ['1. Rebus daging sandung lemur, paru dan babat selama 15 menit, lalu buang air rebusannya.<br><br>2. Rebus daging dan jeroan tadi dengan ditambahkan bawang putih dan jahe serta 500 ml air biarkan hingga kaldu daging keluar.<br><br>3. Tumis bumbu merah ditambahkan dengan cengkeh, biji pala, kunyit, bunga pekak, kayu manis, serai, daun salam dan daun jeruk hingga matang.<br><br>4. Setelah tumisan bumbu matang, masukan ke dalam rebusan daging. Biarkan selama kurang lebih 15 menit agar bumbu meresap ke dalam daging.<br><br>5. Angkat daging dari dalam rebusan.<br><br>6. Setelah daging di angkat, tambahkan santan dan susu cair ke dalam air rebusan. Aduk rata agar santan tidak pecah lalu beri garam, lada dan gula pasir untuk memberi rasa.<br><br>7. Goreng daging sebentar. Angkat dan tiriskan.<br><br>8. Potong-potong daging lalu letakan dalam mangkuk saji bersama dengan kentang goreng, irisan tomat, daun bawang dan daun seledri lalu sirami dengan kuah santan<br><br>9. Sajikan dengan diberi pendamping seperti bawang goreng, emping, jeruk limau dan kecap manis<br><br>', '1. Sambil menghaluskan bumbu,siapkan air lalu didihkan. Setelah air mendidih, masukkan jagung dan buah melinjo. Tunggu hingga kembali mendidih. .<br><br>2. Setelah air mendidih,masukkan bumbu halus,daun salam,lengkuas,buah asam dan asam jawa. Aduk-aduk,tunggu hingga bumbu matang dan wangi. .<br><br>3. Setelah bumbu matang,masukkan nangka muda dan labu siam. Tunggu hinggaa nangka muda dan labu setengah matang. .<br><br>4. Ketika nangka muda dan labu sudah mulai empuk garam,gula pasir dan gula jawa. Koreksi rasa. .<br><br>5. Jika dirasa sudah pas,masukkan kacang panjang,daun melinjo dan terong. .<br><br>6. Aduk hingga sayuran tercampur rata,tunggu hingga semua sayur matang. Matikan api,sajikan.'];
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