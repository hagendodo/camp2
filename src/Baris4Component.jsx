import React from "react";

export default function Baris4Component({ functionCekJawaban }) {
  return (
    <tr>
      <td>
        <input
          id="4_1"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td></td>
      <td>
        <input
          id="4_3"
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
