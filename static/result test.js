$(document).ready(function() {
console.log("ready!");
	
  	$('.onchange').on('change', formSubmit());
  	formSubmit();
	});


function formSubmit(){
	$('form').submit();
  		console.log("the form has beeen submitted");

  	// grab values
    Income = $('input[name="Income"]').val();
    AppliedOnline = $('input[name="AppliedOnline"]').val();
	Residence = $('#Residence').val();
	YearCurrentAddress = $('input[name="YearCurrentAddress"]').val();
	YearsCurrentEmployer = $('input[name="YearsCurrentEmployer"]').val();
	NumberOfCards = $('input[name="NumberOfCards"]').val();
	CCDebt = $('input[name="CCDebt"]').val();
	Loans = $('input[name="Loans"]').val();
	LoanAmount = $('input[name="LoanAmount"]').val();
	SalePrice = $('input[name="SalePrice"]').val();
	Location = $('#Location').val();
	console.log(Income, AppliedOnline, Residence, YearCurrentAddress, YearsCurrentEmployer,
		NumberOfCards, CCDebt, Loans, LoanAmount, SalePrice, Location)


  	$.ajax({
  		type: "POST",
  		url: "/",
  		data : { 'Income': Income, 'AppliedOnline': AppliedOnline, 'Residence':Residence, 
				'YearCurrentAddress':YearCurrentAddress, 'YearsCurrentEmployer':YearsCurrentEmployer,
				'NumberOfCards': NumberOfCards, 'CCDebt':CCDebt, 'Loans':Loans, 
				'LoanAmount':LoanAmount, 'SalePrice':SalePrice, 'Location':Location
			 },

		success: function(results) {
			if (results.probability) {
				console.log("probability success");
				$('#prediction').html("Prediction = " + results.prediction)
				$('#probability').html("Probability = " + (results.probability*100).toFixed(2) + "%");
				chart(results.prediction, results.probability)

			} else {
				console.log("Something went wrong with the prediction");
				$('.result').html('Something went wrong with the prediction.')
			}
		},

		error: function(error) {
			console.log(error)
		}

		});
  };