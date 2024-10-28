import React from "react";

export default function Baris5Component({ functionCekJawaban }) {
  return (
    <tr>
      <td>
        <input
          id="5_1"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td></td>
      <td>
        <label>3</label>
        <input
          id="5_3"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td>
        <input
          id="5_4"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
      <td>
        <input
          id="5_5"
          type="text"
          maxLength="1"
          onChange={functionCekJawaban}
        />
      </td>
    </tr>
  );
}
