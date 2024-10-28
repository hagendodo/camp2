import "./App.css";
import Baris1Component from "./Baris1Component";
import Baris2Component from "./Baris2Component";
import Baris3Component from "./Baris3Component";
import Baris4Component from "./Baris4Component";
import Baris5Component from "./Baris5Component";

function App() {
  function cekSel(e, id, nilaiInput, idParameter, nilaiInputParameter) {
    if (id === idParameter) {
      e.target.classList.remove("correct");
      if (nilaiInput === nilaiInputParameter) {
        return true;
      }
    }
  }

  function cekSoal(functionCekSel) {
    if (functionCekSel) {
      return true;
    } else {
      return false;
    }
  }

  let soal1 = [false, false, false, false, false];
  let soal2 = [false, false, false, false, false];
  let soal3 = [false, false, false];
  let soal4 = [false, false, false, false, false];

  let listColumnSoal1 = [
    {
      id: "1_1",
      correctValue: "M",
    },
    {
      id: "1_2",
      correctValue: "A",
    },
    {
      id: "1_3",
      correctValue: "K",
    },
    {
      id: "1_4",
      correctValue: "A",
    },
    {
      id: "1_5",
      correctValue: "N",
    },
  ];

  let listColumnSoal2 = [
    {
      id: "1_3",
      correctValue: "K",
    },
    {
      id: "2_3",
      correctValue: "U",
    },
    {
      id: "3_3",
      correctValue: "A",
    },
    {
      id: "4_3",
      correctValue: "S",
    },
    {
      id: "5_3",
      correctValue: "A",
    },
  ];

  function ujiSeluruhSel(e, id, nilaiInput, soal, listColumn) {
    listColumn.forEach((data, index) => {
      if (id == data.id) {
        soal[index] = cekSoal(
          cekSel(e, id, nilaiInput, data.id, data.correctValue)
        );
      }
    });
  }

  function cekJawaban(e) {
    const id = e.target.id;
    const nilaiInput = e.target.value;
    const soal1ListId = ["1_1", "1_2", "1_3", "1_4", "1_5"];
    const soal2ListId = ["1_3", "2_3", "3_3", "4_3", "5_3"];

    ujiSeluruhSel(e, id, nilaiInput, soal1, listColumnSoal1);
    ujiSeluruhSel(e, id, nilaiInput, soal2, listColumnSoal2);

    let tempSoal1Final = false;
    let filledSel = 0;

    soal1.forEach((value) => {
      if (value) {
        tempSoal1Final = value;
        filledSel++;
      }
    });

    if (tempSoal1Final && filledSel == soal1.length) {
      soal1ListId.forEach((id) => {
        document.getElementById(id).classList.add("correct");
      });
    } else {
      soal1ListId.forEach((id) => {
        document.getElementById(id).classList.remove("correct");
      });
    }

    let tempSoal2Final = false;
    let filledSel2 = 0;

    soal2.forEach((value) => {
      if (value) {
        tempSoal2Final = value;
        filledSel2++;
      }
    });

    if (tempSoal2Final && filledSel2 == soal2.length) {
      soal2ListId.forEach((id) => {
        document.getElementById(id).classList.add("correct");
      });
    } else {
      soal2ListId.forEach((id) => {
        document.getElementById(id).classList.remove("correct");
      });
    }
  }

  return (
    <div className="tts">
      <HeaderComponent />
      <table>
        <tbody>
          <Baris1Component functionCekJawaban={cekJawaban} />
          <Baris2Component functionCekJawaban={cekJawaban} />
          <Baris3Component functionCekJawaban={cekJawaban} />
          <Baris4Component functionCekJawaban={cekJawaban} />
          <Baris5Component functionCekJawaban={cekJawaban} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
