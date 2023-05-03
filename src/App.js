import './App.css';

function App() {
  let NewSession = true;
  let arr = [];
  let Harr = [];
  let OpenR = null;
  let OpenH = false;
  let Resetbutton = null;
  let NScounter = 0;
  let Ifmin = null;



  function Append() {
    if (NewSession !== true) {
      NScounter += 1
      let input1 = document.getElementById('UserResponse');
      let harr0 = document.getElementById("Harr0")
      let harr1 = document.getElementById("Harr1")
      let harr2 = document.getElementById("Harr2")
      let harr3 = document.getElementById("Harr3")
      arr.push(input1.value);
      Harr.push(input1.value)
      harr3.textContent = Harr[Harr.length - 1]
      harr2.textContent = Harr[Harr.length - 2]
      harr1.textContent = Harr[Harr.length - 3]
      harr0.textContent = Harr[Harr.length - 4]
      if (harr0.textContent === "") {
        harr0.style.padding = "0px"
      }
      if (harr1.textContent === "") {
        harr1.style.padding = "0px"
      }
      if (harr2.textContent === "") {
        harr2.style.padding = "0px"
      }
      if (harr3.textContent === "") {
        harr3.style.padding = "0px"
      }
      document.getElementById("Prev").textContent = arr.shift();
      document.getElementById("Prev").style.padding = "20px"
      document.getElementById('AIR').textContent = arr;
    } else if (NewSession === true) {
      let input1 = document.getElementById("UserResponse");
      let harr0 = document.getElementById("Harr0")
      let harr1 = document.getElementById("Harr1")
      let harr2 = document.getElementById("Harr2")
      let harr3 = document.getElementById("Harr3")
      document.getElementById("Prev").textContent = "";
      document.getElementById("Prev").style.padding = "0px";
      arr.push(input1.value);
      Harr.push(input1.value)
      document.getElementById("AIR").textContent = arr;
      harr3.textContent = Harr[Harr.length - 1]
      harr2.textContent = Harr[Harr.length - 2]
      harr1.textContent = Harr[Harr.length - 3]
      harr0.textContent = Harr[Harr.length - 4]
      if (harr0.textContent === "") {
        harr0.style.padding = "0px"
      }
      if (harr1.textContent === "") {
        harr1.style.padding = "0px"
      }
      if (harr2.textContent === "") {
        harr2.style.padding = "0px"
      }
      if (harr3.textContent === "") {
        harr3.style.padding = "0px"
      }

      NScounter += 1
    }
  }



  function Min() {
    if (document.getElementById("block").style.visibility !== "hidden") {
      Ifmin = true;
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
      let dot1 = document.getElementById("Dot1")
      dot1.style.visibility = "visible"
      dot1.style.width = "400px"
      dot1.style.transition = "1s"
      dot1.style.borderRadius = "0 0 200px 0"
      document.getElementById("Harr0").style.visibility = "visible"
      document.getElementById("Harr1").style.visibility = "visible"
      document.getElementById("Harr2").style.visibility = "visible"
      document.getElementById("Harr3").style.visibility = "visible"
      document.getElementById("extrablock").style.visibility = "visible"
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
    if (document.getElementById("HistoryB").style.visibility !== "visible") {
      document.getElementById("HistoryB").style.height = "fit-content"
      document.getElementById('wrapperID').style.marginLeft = "100px";
      document.getElementById('wrapperID').style.marginRight = "auto";
      document.getElementById("HistoryB").style.visibility = "visible"
      document.getElementById("HistoryB").style.backgroundColor = "rgb(29, 28, 36)"
      Harr0.style.visibility = "visible"
      Harr1.style.visibility = "visible"
      Harr2.style.visibility = "visible"
      Harr3.style.visibility = "visible"
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
    if (document.getElementById("HistoryB").style.visibility === "visible") {
      if (Ifmin === true) {
        Ifmin = "Pending"
      }
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
      setTimeout(WrapperTimeout, 1000)
      OpenH = false;
    }
  }
  function WrapperTimeout() {
    document.getElementById("wrapperID").style.marginLeft = "-350px"
  }
  function DownHistory() {
    let harr0 = document.getElementById("Harr0")
    let harr1 = document.getElementById("Harr1")
    let harr2 = document.getElementById("Harr2")
    let harr3 = document.getElementById("Harr3")
    if (Harr.length > 4) {
    harr3.textContent = harr2.textContent
    harr2.textContent = harr1.textContent
    harr1.textContent = harr0.textContent
    for (let i = -1; i <= Harr.length - 1; i++) {
      if (Harr[i] === harr1.textContent) {
        harr0.textContent = Harr[i - 1]
      }
      if (harr0.textContent === "") {
        harr3.textContent = Harr[3]
        harr2.textContent = Harr[2]
        harr1.textContent = Harr[1]
        harr0.textContent = Harr[0]
      } else if (harr3.textContent !== "") {
        harr3.style.padding = "20px"
      }
    }
  }
  }

  function UpHistory() {
    let harr0 = document.getElementById("Harr0")
    let harr1 = document.getElementById("Harr1")
    let harr2 = document.getElementById("Harr2")
    let harr3 = document.getElementById("Harr3")
    if (Harr.length > 4) {
    harr0.textContent = harr1.textContent
    harr1.textContent = harr2.textContent
    harr2.textContent = harr3.textContent
    for (let i = -1; i <= Harr.length - 1; i++) {
      if (Harr[i] === harr2.textContent) {
        harr3.textContent = Harr[i + 1]
      }
    }
  }
    if (harr3.textContent === "") {
        document.getElementById("TopOfHistory").style.visibility = "visible"
        document.getElementById("TopOfHistory").style.animation = "shake 0.3s"
        setTimeout(Animation, 1000)
        setTimeout(TOHvis, 2000)
        harr3.textContent = Harr[Harr.length - 1]
        harr2.textContent = Harr[Harr.length - 2]
        harr1.textContent = Harr[Harr.length - 3]
        harr0.textContent = Harr[Harr.length - 4]
    } else if (harr0.textContent !== "") {
        harr0.style.padding = "20px"
    } else if (NScounter < 5) {
        document.getElementById("TopOfHistory").style.visibility = "visible"
        document.getElementById("TopOfHistory").style.animation = "shake 0.3s"
        setTimeout(Animation, 1000)
        setTimeout(TOHvis, 2000)
    }
  }
  function Animation() {
    document.getElementById("TopOfHistory").style.animation = "none"
  }
  function TOHvis() {
    document.getElementById("TopOfHistory").style.visibility = "hidden"
  }
  function BTTHistory() {
    let harr0 = document.getElementById("Harr0")
    let harr1 = document.getElementById("Harr1")
    let harr2 = document.getElementById("Harr2")
    let harr3 = document.getElementById("Harr3")
    harr3.textContent = Harr[Harr.length - 1]
    harr2.textContent = Harr[Harr.length - 2]
    harr1.textContent = Harr[Harr.length - 3]
    harr0.textContent = Harr[Harr.length - 4]
  }



  function Send() {
    let input = document.getElementById('UserResponse')
    input.value = "";
  }

  function Reset() {
    if (document.getElementById("Prev").textContent === "") {
      document.getElementById('ResetCON').style.top = "-25vw"
    }
    if (document.getElementById("AIR").textContent === "") {
      document.getElementById('ResetCON').style.top = "-20vw"
    }
    OpenR = true;
    TempDisable();
    document.getElementById("ResetCON").style.visibility = "visible"
    if (OpenH === false) {
      document.getElementById("ResetCON").style.left = "-11vw"
    } else {
      document.getElementById("ResetCON").style.left = "13vw"
    }
    if (Resetbutton === true) {
      Exit();
      document.getElementById("ResetCON").style.visibility = "hidden"
      let Prev = document.getElementById("Prev");
      let harr0 = document.getElementById("Harr0")
      let harr1 = document.getElementById("Harr1")
      let harr2 = document.getElementById("Harr2")
      let harr3 = document.getElementById("Harr3")
      Harr = [];
      harr0.style.padding = "0px"
      harr0.textContent = ""
      harr1.style.padding = "0px"
      harr1.textContent = ""
      harr2.style.padding = "0px"
      harr2.textContent = ""
      harr3.style.padding = "0px"
      harr3.textContent = ""
      document.getElementById('AIR').textContent = "";
      document.getElementById('AIR').style.padding = "0px";
      Prev.textContent = "";
      Prev.style.padding = "0px";
      Prev.style.transitionDuration = "500ms";
      arr = [];
      NewSession = true;
      Resetbutton = false;
      OpenR = false;
      NScounter = 0;
      TempDisable();
    } 
  }
  function Close() {
    document.getElementById("ResetCON").style.visibility = "hidden"
    OpenR = false;
    TempDisable();
  }
  function ResetVAR() {
    Resetbutton = true;
    Reset();
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
      if (Harr0.textContent !== "") {
        Harr0.style.padding = "20px"
      }
      if (Harr1.textContent !== "") {
        Harr1.style.padding = "20px"
      }
      if (Harr2.textContent !== "") {
        Harr2.style.padding = "20px"
      }
      if (Harr3.textContent !== "") {
        Harr3.style.padding = "20px"
      }
      setTimeout(Send, 0);
      NewSession = false;
    }
  });

  function TempDisable() {
    if (OpenR === true) {
      document.getElementById("UserResponse").disabled = true;
    } else {
      document.getElementById("UserResponse").disabled = false;
    }
  }

  return (
    <div className="App">
      <div id="InfoWrap"></div>
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
          <button className='Hbutton' id="Up" onClick={UpHistory}>+</button>
          <button className='Hbutton' id="Down" onClick={DownHistory}>-</button>
          <button id="BTT" onClick={BTTHistory}>Back To Top</button>
          <button id="HInfo">History</button>
        </div>
        <div id='block'>
          <button className='dots' id='Dot1'></button>
        </div>
      </div>
      <div className='ConfirmationWrap'>
      <div className='wrapper' id='wrapperID'>
        <div className="Box">
          <div className='Group'>
            <button id="History" onClick={History}>H</button>
            <h1>asdf</h1>
          </div>
          <div id="Prev"></div>
          <div id="AIR">{arr}</div>
        </div>
        <div className="ChatBox">
          <input type='text' id="UserResponse" autoComplete='off' />
          <button id="Reset" onClick={Reset}>Reset Session</button>
        </div>
      </div>
      <div id="ResetWrap">
      <div id="ResetCON">
        <p id="TextCON">Are you sure you want to reset your session? <br></br><br></br>
        *Note: This will reset your history*</p>
        <div className="CONbuttons">
        <button id="CONclose" onClick={Close}>Close</button>
        <button id="CONreset" onClick={ResetVAR}>Reset</button>
        </div>
      </div>
      </div>
      </div>
      <body>
      <div id='TopOfHistory'>
        <p id='TOHtext'>Reached Top of History!</p>
      </div>
      </body>
    </div>
  );
}

export default App;
