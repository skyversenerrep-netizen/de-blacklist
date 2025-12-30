const listData = document.getElementById("listData");

function tampilkanData(data) {
  listData.innerHTML = "";

  if (data.length === 0) {
    listData.innerHTML = "<p>✅ Tidak ada data ditemukan</p>";
    return;
  }

  data.forEach(d => {
    listData.innerHTML += `
      <div class="card">
        <div class="card-info">
          <p><b>GAME:</b> ${d.game}</p>
          <p><b>Username Akun:</b> ${d.username}</p>
          <p><b>ID Akun:</b> ${d.idAkun}</p>

          <p><b>Screenshoot Akun:</b>
            ${d.fotoAkun 
              ? `<a href="${d.fotoAkun}" target="_blank">${d.fotoAkun}</a>`
              : '-'}
          </p>

          <p><b>Penjual:</b> ${d.penjual}</p>
          <p><b>Platform:</b> ${d.platform}</p>
          <p><b>Harga:</b> ${d.harga}</p>
          <p><b>Kontak Penjual:</b> ${d.kontak}</p>
          <p><b>Waktu:</b> ${d.waktu}</p>
          <p><b>Informasi Tambahan:</b> ${d.infoTambahan}</p>
        </div>
      </div>
    `;
  });
}

function filterData() {
  const username = document.getElementById("username").value.toLowerCase();
  const game = document.getElementById("game").value;

  const hasil = blacklistData.filter(d =>
    (username === "" || d.username.toLowerCase().includes(username)) &&
    (game === "" || d.game === game)
  );

  tampilkanData(hasil);
}

// tampilkan semua data saat halaman dibuka
tampilkanData(blacklistData);

function copyReport() {
  const text = document.getElementById("reportTemplate");
  text.select();
  document.execCommand("copy");
  alert("✅ Format laporan berhasil disalin!");
}
