var data_promo = [
	{ "tujuan" : "Semarang", "harga" : 70000 },
	{ "tujuan" : "Surabaya", "harga" : 140000 },
	{ "tujuan" : "Bandung", "harga" : 170000 },
	{ "tujuan" : "Jakarta", "harga" : 180000 },
	{ "tujuan" : "Bali", "harga" : 190000 },
];

var tabel_promo = "";

for (var i = 0; i < data_promo.length; i++) {
	var no = parseInt(i) + 1;
	tabel_promo += "<tr>"+
				"<td class='text-center'>"+ no +"</td>"+
				"<td>"+data_promo[i].tujuan+"</td>"+
				"<td class='text-right'>"+data_promo[i].harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+"</td>"+
				"<tr>";
}

document.getElementById("data_promo").innerHTML = tabel_promo;