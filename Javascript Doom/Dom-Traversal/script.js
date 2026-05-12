// DOM Traversal:
// 1. parentElement
// 2. children
// 3. nextElementSibling
// 4. previousElementSibling
// 5. closest
// firstElementChild
// lastElementChild

// menggunakan previousElementSibling untuk navigasi ke samping/atasnya
// const btnWarna = document.querySelector('.btn-warna');
// btnWarna.addEventListener('click', function (e) {
//      // lompat 3 kali ke samping atas
//      const targetNama = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
//      targetNama.style.color = "red";
// });

const btnWarna = document.querySelector('.btn-warna');
btnWarna.addEventListener('click', function (e) {
     const kartu = e.target.closest(".kartu-pemain");

     const targetNama = kartu.querySelector(".nama");
        targetNama.style.color = "yellow";
});

// 2. Menggunakan parentElement & firstElementChild (Naik lalu Turun)
const btnStatus = document.querySelector(".btn-status");
btnStatus.addEventListener("click", function(e) {
    // Tombol -> Naik ke div .aksi -> Naik lagi ke .kartu-pemain
    const kartu = e.target.parentElement.parentElement;
    
    // Dari kartu -> cari anak (children) urutan ke-3 (index 2 yaitu p status)
    const targetStatus = kartu.children[2];
    targetStatus.textContent = "pindah ke madrid";
    targetStatus.style.fontWeight = "bold";

});

// menggunakan closest (lift expres ke atas)
const btnHapus = document.querySelector(".btn-hapus");
btnHapus.addEventListener("click", function(e) {
    // tidak peduli seberapa jauh tombol berada, cari yang terdekat dengan class .kartu-pemain
    const kartu = e.target.closest(".kartu-pemain");
    kartu.remove();
    alert("kartu pemain dihapus");
    
});

// untuk class ganti posisi
const btnPosisi = document.querySelector(".posisicr");
btnPosisi.addEventListener("click", function(e) {
    const kartu = e.target.closest(".kartu-pemain");
    const nama = kartu.children[1];
    nama.textContent = "gelandang";
});

