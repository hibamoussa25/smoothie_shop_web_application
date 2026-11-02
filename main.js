/* 
	Hiba Moussa (ID# 1002180541)
	Professor Sarrat Scott
	INSY 4315-001
	Project 3 
*/

var prodRows = document.getElementById("tbodyRows") ;
var prodRequest = new XMLHttpRequest( ) ;
var prodData ;
var sortOrder = "D" ;


prodRequest.open("GET", "data_hxm.json") ; 
prodRequest.send( ) ;

prodRequest.onload = function( )

{
	
	prodData = JSON.parse(prodRequest.responseText) ;
	renderTable(prodData) ;
}
	

function renderTable(data)
    {
        var prodRowHTML = "";

        for (i = 0; i < data.length; i++)
            {
                prodRowHTML += "<tr> <td>" + data[i].prodID + "</td> <td><img src=" +data[i].prodImg+ "/></td> <td id='prodName"+i+"'>" + data[i].prodName
				+ "</td> <td>" + data[i].prodDesc + "</td> <td>" + data[i].prodPrice + "</td> <td><input type='number' min ='0' max = '9' id='ProdQty"+i+"' value='0'></td> </tr>";

			}

	    prodRows.innerHTML = prodRowHTML ;
    }

function confirmQty( )
{
	
    var q0 = document.getElementById("ProdQty0").value;
    var q1 = document.getElementById("ProdQty1").value;
    var q2 = document.getElementById("ProdQty2").value;
    var q3 = document.getElementById("ProdQty3").value;
    var q4 = document.getElementById("ProdQty4").value;
    var q5 = document.getElementById("ProdQty5").value;
    var q6 = document.getElementById("ProdQty6").value;
    var q7 = document.getElementById("ProdQty7").value;
    var q8 = document.getElementById("ProdQty8").value;
    var q9 = document.getElementById("ProdQty9").value;


    var products = [];

    if(q0 > 0)
    {
        products += document.getElementById("prodName0").innerText + ": Qty " + q0 + "\n";
    }

    if(q1 > 0)
    {
      products += document.getElementById("prodName1").innerText + ": Qty " + q1 + "\n";
    }

    if(q2 > 0)
    {
        products += document.getElementById("prodName2").innerText  + ": Qty " + q2 + "\n";
    }

    if(q3 > 0)
    {
        products += document.getElementById("prodName3").innerText + ": Qty " + q3 + "\n";
    }

    if(q4 > 0)
    {
      products += document.getElementById("prodName4").innerText + ": Qty " + q4 + "\n";
    }

    if(q5 > 0)
    {
      products += document.getElementById("prodName5").innerText + ": Qty " + q5 + "\n";
    }

    if(q6 > 0)
    {
      products += document.getElementById("prodName6").innerText + ": Qty " + q6 + "\n";
    }

    if(q7 > 0)
    {
      products += document.getElementById("prodName7").innerText + ": Qty " + q7 + "\n";
    }

    if(q8 > 0)
    {
      products += document.getElementById("prodName8").innerText + ": Qty " + q8 + "\n";
    }

    if(q9 > 0)
    {
      products += document.getElementById("prodName9").innerText + ": Qty " + q9 + "\n";
    }

    if (products > "" && products != null)
    {
        if(confirm("Are you sure you want to order the following: \n" + products)){
        	var prodObj = []
        	var prodJSON ;
        	var prodQty, prodID;

        	var tblRows = document.getElementById("tbodyRows").rows;

        	for (iRow = 0; iRow < tblRows.length; iRow++){
        		prodQty = document.getElementById("ProdQty" + iRow).value;

        		if (prodQty > 0){
        			prodID = tblRows[iRow].cells[0].innerText;
        			prodObj.push({"ProdID":prodID, "ProdQty":prodQty});
        		}
        	}

        	prodJSON = JSON.stringify(prodObj);

        	localStorage.setItem("prodJSON", prodJSON);

        	alert("Thank you for your purchase! Your order has been placed!");
        }
    }
}


function confirmCancel( )
{
    if (confirm("Are you sure you want to cancel your selections?"))
    {
        document.getElementById("prodForm").reset( );
    }
    else
    {
        return;
    }
}

function sortID()
{
    if (sortOrder == "A")   
    {
        prodData.sort(function(a,b)
        {
            return a.prodID - b.prodID ;
        } ) ;
        sortOrder = "D" ;
    }
    else 
    {
        prodData.sort(function(a,b)
        {
            return b.prodID - a.prodID ;
        }) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

function sortName()
{
    if (sortOrder == "A")  
    {
        prodData.sort(function(a,b)
        {
            if (a.prodName < b.prodName)
            {
                return -1 ;
            }
        } ) ;
        sortOrder = "D" ;
    }
    else  
    {
        prodData.sort(function(a,b)
        {
            if (a.prodName > b.prodName) 
            {
                return -1  
            }
        } ) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}

function sortPrice()
{
   if (sortOrder == "A")
    {
        prodData.sort(function(a,b)
        {
            return a.prodPrice - b.prodPrice ;
        } ) ;
        sortOrder = "D" ;
    }
    else
    {
        prodData.sort(function(a,b)
        {
            return b.prodPrice - a.prodPrice ;
        }) ;
        sortOrder = "A" ;
    }
    renderTable(prodData) ;
}
