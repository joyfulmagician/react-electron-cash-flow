// Send Button
export function sendButton() {
  return `
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    background-color: #c93a71;
    color: #ffffff;
    cursor: pointer;
    margin-left: 20px;
    font-size: 0.8rem;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 100;
    :hover {
        background-color: #c04b82;
    }
  `;
}

// Container Inflow and Outflow

export function containerInflowOutflow() {
  return `
    margin: 0;
    width: 80%;
    text-align: center;
    position: absolute;
    margin-left: 20%;
  `;
}
export function defaultButton() {
  return `
    padding: 10px 34px;
    position: absolute;
    border: none;
    border-radius: 40px;
    background-color: #c93a71;
    color: #ffffff;
    cursor: pointer;
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
    :hover {
      padding: 9.5px 33.5px;
    }
  `;
}
