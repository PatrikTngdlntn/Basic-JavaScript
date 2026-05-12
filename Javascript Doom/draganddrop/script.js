// 1. Variabel untuk menyimpan elemen yang sedang diseret
let elemenYangDiseret = null;

// 2. Event untuk ELEMEN PEMAIN (Draggable)
document.addEventListener("dragstart", function(e) {
    if (e.target.classList.contains("pemain")) {
        elemenYangDiseret = e.target; // Simpan elemennya saat mulai ditarik
        e.target.style.opacity = "0.5"; // Efek transparan saat ditarik
    }
});

document.addEventListener("dragend", function(e) {
    if (e.target.classList.contains("pemain")) {
        e.target.style.opacity = "1"; // Kembalikan warna saat dilepas
    }
});

// 3. Event untuk KOTAK PENERIMA (Dropzone)
const kotakTujuan = document.querySelectorAll(".dropzone");

kotakTujuan.forEach(kotak => {
    // Wajib ada dragover agar browser mengizinkan 'drop'
    kotak.addEventListener("dragover", function(e) {
        e.preventDefault(); // Mencegah perilaku default browser yang melarang drop
    });

    kotak.addEventListener("drop", function(e) {
        e.preventDefault();
        
        // Di sinilah fungsi APPEND beraksi!
        // e.currentTarget adalah si kotak (Gudang atau Lapangan)
        if (elemenYangDiseret) {
            e.currentTarget.append(elemenYangDiseret);
        }
    });
});