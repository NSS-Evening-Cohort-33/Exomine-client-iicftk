export const Governors = async () => {
  const response = await fetch("http://localhost:8088/governors?status=active");
  const governors = await response.json();

  let html = `<select id="governor">
                <option value="0">Choose a governor...</option>`;

  for (const governor of governors) {
    html += `<option value="${governor.id}">${governor.name}</option>`;
  }

  html += `</select>`;

  return html;
};
