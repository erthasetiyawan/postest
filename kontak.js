kirimPesan = () => {

	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;
	var nohp = document.getElementById("no_hp").value;
	var pesan = document.getElementById("pesan").value;

	if(nama == ''){
		alert("Nama belum diisi!"); return false;
	}

	if(email == ''){
		alert("Email belum diisi!"); return false;
	}

	if(nohp == ''){
		alert("Nomor Hp belum diisi!"); return false;
	}

	if(pesan == ''){
		alert("Pesan belum diisi!"); return false;
	}

	alert("Pesan berhasil dikirim!");

	window.location.reload();

}