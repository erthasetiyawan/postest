fungsi_nama = function(nama) {
    nama = prompt("Masukkan Nama Kamu : ");
    localStorage.setItem("nama", nama);
}

if (localStorage.getItem("nama") === null) {
    fungsi_nama(nama);
    // document.getElementById("judul_nama").innerHTML = "Selamat datang di Tiketku.id !!!";
} else {
		document.getElementById("nama_pemesan").value = localStorage.getItem("nama");
}

var tujuan = [
	{ "id" : 1 , "nama" : "Semarang", "harga" : 80000 },
	{ "id" : 2 , "nama" : "Surabaya", "harga" : 150000 },
	{ "id" : 3 , "nama" : "Bandung", "harga" : 180000 },
	{ "id" : 4 , "nama" : "Jakarta", "harga" : 190000 },
	{ "id" : 5 , "nama" : "Serang", "harga" : 180000 },
	{ "id" : 6 , "nama" : "Bali", "harga" : 200000 },
]

var tujuan_html = '';

tujuan_html += '<option value="">Pilih Tujuan</option>';
for (var i = 0; i < tujuan.length; i++) {
	tujuan_html += '<option value="'+tujuan[i].id+'">'+tujuan[i].nama+' ('+tujuan[i].harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+')</option>';	
}

document.getElementById("tujuan").innerHTML = tujuan_html;
document.getElementById("tujuan_pesan").innerHTML = tujuan_html;

pilihTujuan = (param) => {

	if (param.value === '') {

		document.getElementById('harga').value = 0;

	}else{
		
		document.getElementById('harga').value = tujuan[param.value-1].harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	}

}

// End Tujuan

// Fungsi Uang

function number(param) {
    var nilai = param.value.replace(/\D/g, "").replace(/[a-zA-Z]*/g, "");
    document.getElementById(param.getAttribute('id')).value = nilai;
}

// End Uang

// Jumlah Tiket

document.getElementById("jumlah_tiket").addEventListener("keyup", function(){
	var data_tujuan = document.getElementById('tujuan').value;

	if (isNaN(data_tujuan) || data_tujuan === '') {

		document.getElementById("harga").value = 0;

	}else{

		var harga_tiket = tujuan[data_tujuan-1].harga;
		var total_harga = parseInt(harga_tiket) * parseInt(this.value);

		if (isNaN(total_harga)) {

			document.getElementById("harga").value = 0;

		}else{

			document.getElementById("harga").value = total_harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

		}

	}

});

// End

// Button Pesan Tiket

pesanTiket = () => {
	var tanggal_berangkat = document.getElementById("tanggal_berangkat").value;
	var tujuan = document.getElementById("tujuan").value;
	var jumlah_tiket = document.getElementById("jumlah_tiket").value;

	if (tanggal_berangkat === '') {
		alert("Tanggal berangkat belum diisi!"); return false;
	}

	if (tujuan === '') {
		alert("Tujuan belum dipilih!"); return false;
	}

	if (jumlah_tiket === '' || jumlah_tiket === 0) {
		alert("Jumlah tiket belum ditentukan!"); return false;
	}

	var konfirmasi = confirm("Apakah data diatas sudah benar?");

	if (konfirmasi == true) {

		localStorage.setItem("tanggal_berangkat", tanggal_berangkat);
		localStorage.setItem("tujuan", tujuan);
		localStorage.setItem("jumlah_tiket", jumlah_tiket);

		alert("Pemesanan berhasil!");

		window.setTimeout( window.location.reload(), 3000);

	} else { return false; }
}
// End

// Cari Tiket Pemesanan

cariTiket = () => {

	var nama_pemesan = document.getElementById("nama_pemesan").value;
	var tanggal_berangkat = document.getElementById("tanggal_berangkat").value;
	var tujuan = document.getElementById("tujuan").value;
	var jumlah_tiket = document.getElementById("jumlah_tiket").value;
	var harga = document.getElementById("harga").value;

	if (nama_pemesan === '') {
		alert("Nama Pemesan belum diisi!"); return false;
	}

	if (tanggal_berangkat === '') {
		alert("Tanggal berangkat belum diisi!"); return false;
	}

	if (tujuan === '') {
		alert("Tujuan belum dipilih!"); return false;
	}

	if (jumlah_tiket === '' || jumlah_tiket === 0) {
		alert("Jumlah tiket belum ditentukan!"); return false;
	}

	var konfirmasi = confirm("Apakah data diatas sudah benar?");

	if (konfirmasi == true) {

		localStorage.setItem("pesan", "betul");
		localStorage.setItem("nama_pemesan", nama_pemesan);
		localStorage.setItem("tanggal_berangkat", tanggal_berangkat);
		localStorage.setItem("tujuan", tujuan);
		localStorage.setItem("jumlah_tiket", jumlah_tiket);
		localStorage.setItem("harga_tiket", harga);

		alert("Pemesanan berhasil!");

		if (localStorage.getItem("pesan") === "betul") {

			document.getElementById("tanggal_berangkat_pesan").value = localStorage.getItem("tanggal_berangkat");
			document.getElementById("tujuan_pesan").value = localStorage.getItem("tujuan");
			document.getElementById("jumlah_tiket_pesan").value = localStorage.getItem("jumlah_tiket");
			document.getElementById("harga_tiket_pesan").value = localStorage.getItem("harga_tiket");
			document.getElementById("subtotal_harga").value = localStorage.getItem("harga_tiket");
			document.getElementById("total_harga_tiket").value = localStorage.getItem("harga_tiket");

			document.getElementsByClassName("detail_pesan")[0].style.display = 'block';
			document.getElementById("detail_pesan").scrollIntoView({
				behavior: 'smooth'
			});

		}else{

			localStorage.clear();

		}

		// window.setTimeout( window.location.reload(), 3000);

	} else { return false; }

}

// End Cari Tiket

// Cek Member

cekMember = (param) => {

	if (param.value === '1') {

		var subtotal_harga = parseInt(localStorage.getItem("harga_tiket").replace(/\./g, ""));
		var total_harga_tiket = subtotal_harga * 0.2;

		var harga_totalnya = subtotal_harga - total_harga_tiket;
		document.getElementById("diskon_pesan").value = total_harga_tiket.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		document.getElementById("total_harga_tiket").value = harga_totalnya.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


	}else{

		var subtotal_harga = localStorage.getItem("harga_tiket").replace(/,/g, ".");
		document.getElementById("diskon_pesan").value = 0;
		document.getElementById("total_harga_tiket").value = subtotal_harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	}
}

// End Cek Member

// Aksi Bayar Tiker

bayarTiket = () => {

	if (localStorage.getItem("pesan") === "betul") {

		var konfirmasi = confirm("Apakah data tersebut sudah benar?");

		if (konfirmasi === true) {
			alert("Pemesan dan Pembayaran Tiket Anda berhasil!");
			window.location.reload();
		}else { return false; }

	}

}

// End


if (localStorage.getItem("pesan") === "betul") {

	document.getElementById("tanggal_berangkat_pesan").value = localStorage.getItem("tanggal_berangkat");
	document.getElementById("tujuan_pesan").value = localStorage.getItem("tujuan");
	document.getElementById("jumlah_tiket_pesan").value = localStorage.getItem("jumlah_tiket");
	document.getElementById("harga_tiket_pesan").value = localStorage.getItem("harga_tiket");
	document.getElementById("subtotal_harga").value = localStorage.getItem("harga_tiket");
	document.getElementById("total_harga_tiket").value = localStorage.getItem("harga_tiket");

}