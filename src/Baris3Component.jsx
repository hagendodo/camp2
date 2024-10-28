import React from "react";

export default function Baris3Component({ functionCekJawaban }) {
  return (
    <tr>
      <td>
        <input
          id="3_1"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td></td>
      <td>
        <input
          id="3_3"
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
