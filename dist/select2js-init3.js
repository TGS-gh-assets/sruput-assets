$(document).ready(function() {
	$('.js-select2').each(function () {
		$(this).select2({
			minimumInputLength: 3,
			theme: 'bootstrap4',
			width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
			placeholder: 'Masukan Kota / Kecamatan',
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
					cache: true
				}
		});
	});
});
