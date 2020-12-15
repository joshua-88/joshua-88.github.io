var title = ['ES CENDOL', 'LUPIS KETAN GULA MERAH'];
var image = ['images/es_cendol.png', 'images/lupis_ketan.png'];
var deskripsi = ['Saat libur enaknya membuat sajian spesial untuk keluarga di rumah. Es cendol biasanya dibuat tepung hunkue dengan campuran daun pandan suji.', 'Beras ketan akan dikukus dalam bungkusan daun pisang berbentuk segitiga (atau lonjong seperti lontong) hingga empuk dan matang. Lupis ini lalu dibalur dengan parutan kelapa dan disajikan dengan saus gula jawa kental (kinca).'];
var bahan = [' 150 gram tepung hunkue<br>500 ml air<br>100 ml air daun suji<br>1/2 sdt garam<br>600 ml santan dari 1 butir kelapa<br>1/2 sdt garam<br>2 lembar daun pandan<br>250 gram gula merah, disisir halus<br>250 ml air<br>2 lembar daun pandan<br>1/4 sdt garam<br>3 buah nangka dipotong kotak<br>500 gram es batu<br>', '350 gram beras ketan putih rendam minimal 1 jam<br>¼ sdt garam<br>2 lembar daun pandan<br>Air untuk merenus secukupnya<br>Daun pisang untuk membungkus secukupnya<br>Tusuk gigi untuk menyamat secukupnya<br>200 gram gula aren<br>150 ml air<br>1 lembar daun pandan<br>½ kelapa parut putih<br>1 lembar daun pandan<br>¼ sdt garam'];
var prosedur = ['1. Cendol, rebus air, air suji, garam, tepung hunkwe, aduk hingga rata sampai mendidih. Masak sampai meletup-letup dan kental.<br><br>2. Tuang ke dalam cetakan cendol. Tekan di atas wadah yang berisi air es, angkat dan tiriskan.<br><br>3. Untuk kuah santan, rebus santan sampai mendidih.<br><br>4. Untuk sirupnya, rebus gula merah, air, daun pandan, garam dan nangka sampai kental.<br><br>5. Sajikan cendol dengan kuah santan, sirup dan pelengkap.<br>', '1. Tiriskan beras ketan dan cuci bersih. Tiriskan kembali.<br><br>2. Campur beras ketan dengan garam. Aduk rata.<br><br>3. Ambil selembar daun pisang. Bentuk jadi contong segitiga atau kerucut. Isi dengan 2 sdm beras ketang hingga penuh. Lipat daun hingga ketan tertutup dan berbentuk segitiga. Sematkan dengan tusuk gigi. Lakukan hingga semua habis.<br><br>4. Siapkan panci presto. Masukkan lupis dan daun pandan. Isi panci dengan air hingga setengah panci. Tutup rapat lalu rebus dengan api besar. Saat muncul bunyi nyaring atau mendesis, kecilkan api. Rebus selama 1 jam hingga matang. Angkat dan tiriskan.<br><br>5. Kuah Kinca: Rebus semua bahan hingga gula larut dan mengental. Angkat lalu saring. Siap digunakan.<br><br>6. Taburan: Campur semua bahan lalu kukus selama 15 menit. Angkat dan siap digunakan.<br><br>7. Ambil lupis dan buka pembungkus daun pisangnya. Gulingkan atau taburi dengan kelapa parut. Siram dengan kuah kinca.<br><br>8. Siap disajikan.'];
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