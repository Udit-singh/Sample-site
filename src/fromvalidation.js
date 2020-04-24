function checknum()
		{
			var field = document.getElementById("num").value;
			var re3 = /^\d{10}$/;
			if (re3.test(field)) {
				document.getElementById("num").style.color = "Green";
				document.getElementById("num").innerHTML = "<b>valid<b>";

				return (true);
			}
			else
			{
				document.getElementById("num").style.color = "Red";
				alert("Enter a Valid number");
				return (false);
			}
		}

function checkname()
		{
			var fname = document.getElementById("firstname").value;
			var rel = /^[a-zA-Z\s\'\-]{2,15}$/;

			if (rel.test(fname)) 
			{
				document.getElementById("firstname").style.color = "white";
				document.getElementById("firstname").innerHTML="<strong>Hey, you didn't type anything</strong>"
				return true;
			}
			else 
			{
				document.getElementById("firstname").style.color = "white";
				alert("Enter a Valid name");
				return false;
			}
		}