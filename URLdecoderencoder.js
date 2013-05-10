$(document).ready(function(){
	$('#Encode').on('click',function(){
		var Encoded = encodeURIComponent($('#DecodedCode').val());
		if(Encoded == ""){ return;}
		$('#EncodedCode').val(Encoded);
	});
	$('#Decode').on('click',function(){
		var Decoded = decodeURIComponent($('#EncodedCode').val());
		if(Decode == ""){ return;}
		$('#DecodedCode').val(Decoded);
	});
});