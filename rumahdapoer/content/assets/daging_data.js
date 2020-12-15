var title = ['RENDANG', 'AYAM BAKAR'];
var image = ['images/rendang_rendang.png', 'images/ayam_bakar.png'];
var deskripsi = ['Rendang daging menjadi menu istimewa momen hari raya, termasuk Idul Adha. Rasa dedak bumbu rendang ini yang jadi kesukaan banyak orang.', 'Sajian ayam bakar sederhana adalah menu sajian utama yang mungkin sudah sering anda nikmati dirumah makan ataupun restoran.'];
var bahan = ['1 kg daging sapi (bagusnya daging bagian kepala)<br>1 lembar daun kunyit<br>3 lembar daun jeruk<br>2 lembar daun salam<br>Santan dari 4 butir kelapa<br>3 sendok makan garam Bumbu halus<br>100 gr bawang merah<br>100 gr bawang putih<br>150 gr cabai merah keriting<br>1 ruas jari jahe<br>2 ruas jari laos<br>3 batang serai<br>', '1 ekor ayam kampung<br>2 batang serai di memarkan<br>2 lembar daun salam<br>1 sdt air jeruk nipis<br>2 cm jahe di memarkan<br>1 sdt Garam<br>1 sdm Kecap manis<br>300 ml air<br>1 sdt gula merah sisir<br>1/4 sdt merica bubuk<br>2 sdm minyak goreng untuk menumis Bumbu Di Haluskan<br>1/2 sdm Ketumbar<br>1/4 sdt jintan<br>4 siung Bawang putih<br>8 butir Bawang merah<br>2 butir kemiri di sangrai Bahan Olesan Ayam Bakar<br>3 sdm Kecap manis<br>4 buah cabai rawit merah di iris<br>1 sdt minyak goreng<br><br>Bumbu di haluskan<br>1/2 sdm Ketumbar<br>1/4 sdt jintan<br>4 siung Bawang putih<br>8 butir Bawang merah<br>2 butir kemiri di sangrai<br><br>Bahan Olesan ayam bakar<br>3 sdm Kecap manis<br>4 buah cabai rawit merah di iris<br>1 sdt minyak goreng'];
var prosedur = ['1. Potong-potong daging berbentuk kotak dan haluskan bumbu halus dengan blender atau batu giling.<br><br>2. Siapkan wajan, masukkan semua bahan dan bumbu halus. Kemudian masak semua bahan dengan api besar sampai mendidih, sambil diaduk-aduk.<br><br>3. Setelah mendidih kecilkan api menjadi sedang. Aduk-aduk dan masak sampai santan mengeluarkan minyak.<br><br>4. Setelah santan mengeluarkan minyak, kecilkan api kembali. Lalu aduk-aduk sesekali agar rendang tidak gosong dan masak sampai rendang mengering.<br><br>5. Jika menginginkan rendang yang kering, waktu memasak yang diperlukan kira-kira selama delapan jam.<br>', '1. Untuk yang pertama kali bisa dilakukan adalah dengan mempersiapkan bahan utama. Hal ini penting sekali karena bahan utama atau ayam ini harus terlebih dahulu kita bersihkan sebelum dimasak menjadi hidangan yang enak dan lezat. Akan tetapi sebelum terburu membersihkan ayam, sebaiknya silahkan potong-potong terlebih dahulu ayam yang sudah anda siapkan. Untuk potongan ayam bakar, biasanya ukuran ayam cenderung lebih besar dibandingkan untuk ayam goreng, akan tetapi anda bisa menyelesaikannya dengan potongan yang anda inginkan.<br><br>2. Selesai memotong ayam, masukkan ayam kedalam wadah untuk kemudian bawa ayam ke tempat cucian dan akan dibersihkan secara merata.<br><br>3. Tempatkan ayam dibawah air yang mengalir dan bersihkan bagian kulitnya. Bersihkan pula jika masih ada kotoran yang terdapat pada ayam atau bulu-bulu halus yang menempel pada ayam.<br><br>4. Nah, setelah ayam bersih secara merata maka silahkan angkat ayam dan masukkan kembali kedalam wadah sebelumnya. Tiriskan air cuciannya dan sisihkan sementara Untuk membersihkan bau amis yang menempel pada ayam, maka silahkan lumuri ayam dengan menggunakan air jeruk nipis dan taburan garam sedikit saja. Aduk-aduk dan remas-remas secara mrata sampai bumbu meresap kedalamnyam.<br><br>5. Sekarang tumis bumbu yang telah dihaluskan dalam wajan yang telah diberikan minyak dan sudah dipanaskan. Tumis bumbu ini hingga tercium bau harum yang enak dan lezat.<br><br>6. Setelah itu, masukkan juga bumbu lain seperti jahe, serai dan tumis kembali hingga tercium bau harum.<br><br>7. Jika bumbu sudah harum, masukkan ayam kedalamnya dan aduk-aduk ayam hingga berubah warna.<br><br>8. Masukkan air kedalam tumisan bumbu dan ayam dan masukkan pula air kedalamnya bersama dengan kecap, garam, gula dan juga merica bubuk. Masak semua bahan ini hingga meresap dan ayam menjadi lebih empuk secara merata.<br><br>9. Setelah itu, baru siapkan panggangan dan bakar ayam sambil diberikan bumbu olesan hingga tercium bau harum. Jangan lupa untuk dibulak-balik agar ayam tidak gosong.<br>'];
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