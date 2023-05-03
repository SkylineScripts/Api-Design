import './App.css';

function App() {
  let NewSession = true;
  let arr = [];
  let Harr = [];
  let OpenH = null;



  function Append() {
    if (NewSession != true) {
      let input1 = document.getElementById('UserResponse');
      arr.push(input1.value);
      Harr.push(input1.value)
      document.getElementById("Harr3").textContent = Harr[Harr.length - 1]
      document.getElementById("Harr2").textContent = Harr[Harr.length - 2]
      document.getElementById("Harr1").textContent = Harr[Harr.length - 3]
      document.getElementById("Harr0").textContent = Harr[Harr.length - 4]
      document.getElementById("Prev").textContent = arr.shift();
      document.getElementById("Prev").style.padding = "20px"
      document.getElementById('AIR').textContent = arr;
    } else if (NewSession === true) {
      let input1 = document.getElementById("UserResponse");
      document.getElementById("Prev").textContent = "";
      document.getElementById("Prev").style.padding = "0px";
      arr.push(input1.value);
      Harr.push(input1.value)
      document.getElementById("Harr3").textContent = Harr[Harr.length - 1]
      document.getElementById("Harr2").textContent = Harr[Harr.length - 2]
      document.getElementById("Harr1").textContent = Harr[Harr.length - 3]
      document.getElementById("Harr0").textContent = Harr[Harr.length - 4]


    }
  }



  function Min() {
    if (document.getElementById("block").style.visibility != "hidden") {
      let Harr0 = document.getElementById("Harr0")
      let Harr1 = document.getElementById("Harr1")
      let Harr2 = document.getElementById("Harr2")
      let Harr3 = document.getElementById("Harr3")
      let dot1 = document.getElementById("Dot1")
      let extra = document.getElementById("extrablock")
      dot1.style.width = "400px"
      dot1.style.visibility = "hidden"
      dot1.style.transition = "0.0s"
      Harr0.style.visibility = "hidden"
      Harr0.style.transition = "0.0s"
      Harr1.style.visibility = "hidden"
      Harr1.style.transition = "0s"
      Harr2.style.visibility = "hidden"
      Harr2.style.transition = "0s"
      Harr3.style.visibility = "hidden"
      Harr3.style.transition = "0s"
      extra.style.visibility = "hidden"
      extra.style.transition = "0s"
      document.getElementById("block").style.visibility = "hidden"
      document.getElementById("block").style.transition = "0.0s"
      document.getElementById("HistoryB").style.height = "30px"
    } else {
      let Harr0 = document.getElementById("Harr0")
      let Harr1 = document.getElementById("Harr1")
      let Harr2 = document.getElementById("Harr2")
      let Harr3 = document.getElementById("Harr3")
      let dot1 = document.getElementById("Dot1")
      let extra = document.getElementById("extrablock")
      dot1.style.visibility = "visible"
      dot1.style.width = "400px"
      dot1.style.transition = "1s"
      dot1.style.borderRadius = "0 0 200px 0"
      Harr0.style.visibility = "visible"
      Harr1.style.visibility = "visible"
      Harr2.style.visibility = "visible"
      Harr3.style.visibility = "visible"
      extra.style.visibility = "visible"
      document.getElementById("block").style.visibility = "visible"
      document.getElementById("block").style.transition = "0.3s"
      document.getElementById("HistoryB").style.height = "fit-content"
    }


  }


  function History() {
    let Harr0 = document.getElementById("Harr0")
    let Harr1 = document.getElementById("Harr1")
    let Harr2 = document.getElementById("Harr2")
    let Harr3 = document.getElementById("Harr3")
    let dot1 = document.getElementById("Dot1")
    let extra = document.getElementById("extrablock")
    if (document.getElementById("HistoryB").style.visibility != "visible") {
      document.getElementById("HistoryB").style.visibility = "visible"
      document.getElementById("HistoryB").style.backgroundColor = "rgb(29, 28, 36)"
      Harr0.style.backgroundColor = "rgb(20, 41, 182)"
      Harr1.style.backgroundColor = "rgb(20, 41, 182)"
      Harr2.style.backgroundColor = "rgb(20, 41, 182)"
      Harr3.style.backgroundColor = "rgb(20, 41, 182)"
      document.getElementById('block').style.visibility = "visible"
      document.getElementById("block").style.transition = "0.3s"
      extra.style.visibility = "visible"
      extra.style.transition = "0.3s"
      Harr0.style.color = "white"
      Harr1.style.color = "white"
      Harr2.style.color = "white"
      Harr3.style.color = "white"
      dot1.style.visibility = "visible"
      dot1.style.width = "400px"
      dot1.style.borderRadius = "0 0 200px 0"
      OpenH = true;
    }
  }
  function Exit() {
    let Harr0 = document.getElementById("Harr0")
    let Harr1 = document.getElementById("Harr1")
    let Harr2 = document.getElementById("Harr2")
    let Harr3 = document.getElementById("Harr3")
    let dot1 = document.getElementById("Dot1")
    let extra = document.getElementById("extrablock")
    if (document.getElementById("HistoryB").style.visibility == "visible") {
      Harr0.style.backgroundColor = "transparent"
      Harr0.style.color = "transparent"
      Harr1.style.backgroundColor = "transparent"
      Harr1.style.color = "transparent"
      Harr2.style.backgroundColor = "transparent"
      Harr2.style.color = "transparent"
      Harr3.style.backgroundColor = "transparent"
      Harr3.style.color = "transparent"
      dot1.style.width = "0px"
      dot1.style.visibility = "hidden"
      extra.style.visibility = "hidden"
      extra.style.transition = '1s'
      document.getElementById('block').style.visibility = "hidden"
      document.getElementById("block").style.transition = "1s"
      document.getElementById('HistoryB').style.backgroundColor = "transparent"
      document.getElementById("HistoryB").style.visibility = "hidden"
      OpenH = false;
    }
  }
  let AddValue = 1;
  let HCheck = "pending";
  function DownHistory() {
    let harr0 = document.getElementById("Harr0")
    let harr1 = document.getElementById("Harr1")
    let harr2 = document.getElementById("Harr2")
    let harr3 = document.getElementById("Harr3")
    if (AddValue + 3 < Harr.length) {
      if (HCheck == "valid") {
        AddValue = AddValue + 1
      }
      HCheck = "valid";
      harr3.textContent = harr2.textContent
      harr2.textContent = harr1.textContent
      harr1.textContent = harr0.textContent
      if (Harr.length)
        harr0.textContent = Harr[Harr.length - 4 - AddValue]
    }
  }



  function Send() {
    let input = document.getElementById('UserResponse')
    input.value = "";
  }

  function Reset() {
    let Prev = document.getElementById("Prev");
    document.getElementById('AIR').textContent = "";
    document.getElementById('AIR').style.padding = "0px";
    Prev.textContent = "";
    Prev.style.padding = "0px";
    Prev.style.transitionDuration = "500ms";
    arr = [];
    NewSession = true;
  }
  function ChangePADD() {
    let response = document.getElementById("AIR")
    response.style.padding = "30px";
    response.style.transitionDuration = "500ms";
    if (response.style.padding === "30px") {
      setTimeout(() => {
        response.style.padding = "20px";
        response.style.transitionDuration = "500ms";
      }, 400);
    }
  }

  document.addEventListener("keyup", function (event) {
    let UserR = document.getElementById("UserResponse");
    let Prev = document.getElementById("Prev")
    let Harr0 = document.getElementById("Harr0")
    let Harr1 = document.getElementById("Harr1")
    let Harr2 = document.getElementById("Harr2")
    let Harr3 = document.getElementById("Harr3")
    if (event.key === 'Enter') {
      if (document.getElementById("AIR").textContent === "") {
        Prev.style.padding = "0px"
      }
      if (Prev.textContent !== "") {
        Prev.style.padding = "20px"
      }
      Append()
      if (UserR.value === "") {
        document.getElementById("AIR").style.padding = "0px";
        Prev.style.padding = "0px"
      } else {
        ChangePADD();
      }
      if (Prev.textContent === "") {
        Prev.style.padding = "0px";
      }
      if (Harr0.textContent != "") {
        Harr0.style.padding = "20px"
      }
      if (Harr1.textContent != "") {
        Harr1.style.padding = "20px"
      }
      if (Harr2.textContent != "") {
        Harr2.style.padding = "20px"
      }
      if (Harr3.textContent != "") {
        Harr3.style.padding = "20px"
      }
      setTimeout(Send, 0);
      NewSession = false;
    }
  });

  return (
    <div className="App">
      <div id="HistoryB">
        <div id="helperblock"></div>
        <div id="topblock">
          <button className='topbuttons' id="Exit" onClick={Exit}></button>
          <button className='topbuttons' id="Minimize" onClick={Min}></button>
          <button className='topbuttons' id="Fullscreen"></button>
        </div>
        <div className="Harr" id="Harr3"></div>
        <div className="Harr" id="Harr2"></div>
        <div className="Harr" id="Harr1"></div>
        <div className="Harr" id="Harr0"></div>
        <div id="extrablock">
          <button className='Hbutton' id="Up" >+</button>
          <button className='Hbutton' id="Down" onClick={DownHistory}>-</button>
        </div>
        <div id='block'>
          <button className='dots' id='Dot1'></button>
        </div>
      </div>
      <div className='wrapper'>
        <div className="Box">
          <div className='Group'>
            <button id="History" onClick={History}>H</button>
            <h1>Api Design</h1>
          </div>
          <div id="Prev"></div>
          <div id="AIR">{arr}</div>
        </div>
        <div className="ChatBox">
          <input type='text' id="UserResponse" autoComplete='off' />
          <button id="Reset" onClick={Reset}>Reset Session</button>
        </div>
      </div>
    </div>
  );
}

export default App;
