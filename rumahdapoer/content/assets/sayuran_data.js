var title = ['GADO-GADO', 'TUMIS BAYAM'];
var image = ['images/gado_gado.png', 'images/tumis_bayam.png'];
var deskripsi = ['Salad asli Indonesia ini berasal dari Jawa yang terdiri dari sayur-sayuran yang direbus dan dicampur jadi satu, dengan bumbu kacang yang dihaluskan. Dilengkapi dengan irisan telur rebus, timun dan bawang goreng dapat menambah kenikmatan. Gado-gado biasanya disajikan dengan irisan lontong atau bisa juga disantap bersama nasi sesuai selera.', 'Tumis Bayam Jagung Tahu bisa jadi variasi sajian sayur yang mudah dibuat. Tambahan jagung juga memberikan rasa dan aroma manis yang menyegarkan.'];
var bahan = ['2 buah kentang<br>1 buah wortel <br>8 lembar daun selada <br>1 buah timun <br>100 gram kacang Panjang <br>1 buah lontong <br>1 papan tempe <br>2 buah tahu<br><br>Bahan sauce kacang <br>700 ml santan <br>4 lembar daun jeruk <br>50 gram gula merah <br>2 dm kecap manis <br>1 sdt gula pasir <br>1 sdt asam jawa <br>2dt garam' , '1 ikat bayam siangi<br>1 bawang putih digeprak<br>¼ bawang Bombay iris tipis<br>1 sdt garam<br>1sdt merica bubuk<br>100cc air<br>Minyak untuk menumis<br>Minyak untuk menggoreng<br>'
, '300g beras, cuci bersih <br>250ml air <br>200ml santan encer dari 1/2 butir kelapa <br>2lembar daun salam <br>2batang serai, memarkan <br>5cm lengkuas <br>1.5sdt Royco Kaldu Ayam'];
var prosedur = ['1. Kupas sayuran seperti kentang dan wortel. Cuci bersih semua sayuran.<br><br>2. Potong-potong kentang dan wortel dengan bentuk dadu sedang. Iris kasar kol.<br><br>3. Potong-potong kacang panjang.<br><br>4. Panaskan air secukupnya dalam panci hingga mendidih.<br><br>5. Ambil sedikit air mendidih lalu seduh toge. Tiriskan lalu sisihkan.<br><br>6. Rebus kentang, wortel, kol, dan kacang panjang dalam air mendidih hingga matang. Angkat dan tiriskan, lalu sisihkan.<br><br>7. Potong-potong timun, lalu sisihkan.<br><br>8. Iris kasar selada atau biarkan utuh, sesuai selera. Sisihkan.<br><br>6. Cuci bersih kacang tanah. Goreng dalam minyak panas. Angkat dan tiriskan, lalu biarkan hingga dingin. Giling kacang menggunakan blender hingga halus. Sisihkan.<br><br>7. Larutkan asam jawa dengan 3 sdm air panas. Saring dan ambil airnya. Sisihkan.<br><br>8. Panaskan minyak, tumis bumbu halus dan daun jeruk hingga harum.<br><br>9. Masukkan gilingan kacang tanah, aduk rata.<br><br>10. Masukkan santan, gula merah, kecap manis, dan garam. Aduk hingga rata dan masak hingga mendidih.<br><br>11. Masukkan air asam jawa, aduk rata.<br><br>12. Masak hingga saus mengental dan koreksi rasanya.<br><br>13. Angkat dan sisihkan.','1. Tumis bawang putih dan bawang bombay, masukkan potongan tahu yang sudah digoreng, biji jagung dan bayam. Tambahkan garam dan merica putih bubuk, lalu aduk hingga merata.<br><br>2. Tambahkan air, lalu masak cepat hingga bayam sedikit layu, lalu bubuhi Royco Bumbu Pelezat Serbaguna Rasa Ayam agar rasa tumisan makin nikmat. Masak hingga airnya mendidih dan berkurang.<br><br>3. Angkat dan sajikan hangat-hangat dengan nasi pulen yang nikmat.'];
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