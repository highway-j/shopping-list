$(document).ready(function(){

// add list items
	$('button').click(function() {
		if ($('input').val().length > 0){
			var value = $('input').val();
			$('#itemList').append('<li><div class="box"></div><p>'+value+'</p><img class="delete" src="css/images/x-icon.png"/></li>');
			document.getElementById('addTo').value = '';
		} else {
			alert('Enter your items in the field!');
		}
	});

// cross off list items
	$('#itemList').on('click', 'li', function(){
		$(this).toggleClass('strike'); 
		$(this).children('.box').toggleClass('box-checked');
	});

// delete button on hover
	$('#itemList').on('mouseenter', 'li', function(){
		$(this).children('.delete').toggleClass('show');
	});
	$('#itemList').on('mouseleave', 'li', function() {
		$(this).children('.delete').toggleClass('show');
	});

// delete li on click
	$('#itemList').on('click', '.show', function(){
		$(this).parent().fadeOut();
	});

// enter to add items
	$('#addTo').keyup(function(e) {
		if(e.keyCode == 13) {
			e.preventDefault();
			$('button').click();
		};
	});

// sortable
	$('#itemList').sortable({ axis: "y" });

});
