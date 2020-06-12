var nama_web = "Tiketku.id";

var nama;
var menu = [
	{ "url" : "index.html", "nama_menu" : "Home", "icon" : "fa fa-home" },
	{ "url" : "pesan.html", "nama_menu" : "Pesan", "icon" : "fa fa-user" },
	{ "url" : "promo.html", "nama_menu" : "Promo", "icon" : "fa fa-image" },
	{ "url" : "kontak.html", "nama_menu" : "Kontak", "icon" : "fa fa-user" }
];



document.title = nama_web;
document.getElementById("title").innerHTML = nama_web;

fungsi_nama = function(nama) {
    nama = prompt("Masukkan Nama Kamu : ");
    localStorage.setItem("nama", nama);
}

if (localStorage.getItem("nama") === null) {
    fungsi_nama(nama);
    // document.getElementById("judul_nama").innerHTML = "Selamat datang di Tiketku.id !!!";
} else {
	// if (document.getElementById("nama_pemesan").length > 0) {
	// 	document.getElementById("nama_pemesan").value = localStorage.getItem("nama");
	// }
    // document.getElementById("judul_nama").innerHTML = "Selamat datang " + localStorage.getItem("nama") + " di Tiketku.id !!!";
}

// Menampilkan Menu dengan Javascript
var html = '';
for (var i = 0; i < menu.length; i++) {
	html += '<li><a href="' + menu[i].url + '"><i class="' + menu[i].icon + '"></i> ' + menu[i].nama_menu + '</a></li>';
}

document.getElementById("menu").innerHTML = html;

// End Menu

// Menu Kanan Bidodata

var tabel_biodata = '<table>' +
					'	<thead>' +
					'		<tr>' +
					'			<th colspan="3">' +
					'				Biodata' +
					'			</th>' +
					'		</tr>' +
					'	</thead>' +
					'	<tbody>' +
					'		<tr>' +
					'			<td>NIM</td>' +
					'			<td style="width: 1%">:</td>' +
					'			<td><b>1900018006</b></td>' +
					'		</tr>' +
					'		<tr>' +
					'			<td>Nama</td>' +
					'			<td style="width: 1%">:</td>' +
					'			<td><b>Ertha Dwi Setiyawan</b></td>' +
					'		</tr>' +
					'		<tr>' +
					'			<td>Kelas</td>' +
					'			<td style="width: 1%">:</td>' +
					'			<td><b>A</b></td>' +
					'		</tr>' +
					'		<tr>' +
					'			<td>Tugas</td>' +
					'			<td style="width: 1%">:</td>' +
					'			<td><b>Post Test Praktikum Pemrograman Web</b></td>' +
					'		</tr>' +
					'	</tbody>' +
					'</table>' +
				'</table>';

document.getElementById("tabel_biodata").innerHTML = tabel_biodata;

// End Menu Kanan
