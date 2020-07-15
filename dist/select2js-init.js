$(document).ready(function() {
		$(".js-select2").select2({
			minimumInputLength: 3,
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			ajax: {
					url: 'https://api.sruput.id/alamat/',
					dataType: 'json',
					data: function (params) {
					  var query = {
						q: params.term,
						p: params.page || 1
					  }
					  return query;
					},
					processResults: function (data, params) {
						params.page = params.page || 1;
						var more = (params.page * 10) < data.total;
						return { results: data.items, pagination: {more:more} };
					},
					cache: false,
					placeholder: 'Masukan Kota / Kecamatan',
				}
		});
	});
