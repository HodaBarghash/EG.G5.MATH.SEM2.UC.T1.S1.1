function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PagRGzJpcV":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyPN791pOGakQey6wd3zLVC6JXhAkUFM1FFIljEB6ZTF9zhcJM3_HRs1dQ3v7pnVp0tbA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

