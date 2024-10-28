import React from "react";

export default function Baris2Component({ functionCekJawaban }) {
  return (
    <tr>
      <td>
        <input
          id="2_1"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td></td>
      <td>
        <input
          id="2_3"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td></td>
      <td></td>
    </tr>
  );
}
