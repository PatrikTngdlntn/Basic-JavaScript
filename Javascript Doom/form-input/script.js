// menggunakan teknik Event Delegation + Closest
const wadah = document.getElementById("daftar-pemain");
const inputBaru = document.getElementById("input-pemain");
const btnTambah = document.getElementById("btn-tambah");

btnTambah.addEventListener("click", function(){
     const nama = inputBaru.value;
     if(nama === "") 
     return alert("Nama pemain tidak boleh kosong");
     // membuat html dengan template string
     const itemBaru = document.createElement("li")
     itemBaru.style.color = "black";
     itemBaru.innerHTML =`
     <span class="nama-pemain">${nama}</span>
     <button class="btn-seragam">Berikan Seragam</button>
     <button class="btn-hapus">Hapus</button>`;

     wadah.appendChild(itemBaru);
     inputBaru.value = "";
});

//  event delegation 
wadah.addEventListener("click", function(e) {
     if(e.target.classList.contains("btn-hapus")) {
          const li = e.target.closest("li");
          li.remove(); alert("Pemain dihapus");
     }
     // logika untuk tombol seragam
     if(e.target.classList.contains("btn-seragam")) {
          const li = e.target.closest("li");
          const tombol = e.target;
          if (li.style.color === "black") {
               li.style.color = "red";
               tombol.textContent = "Buang Seragam";
          } else {
               li.style.color = "black";
               tombol.textContent = "Berikan Seragam";
          }    
     }
});