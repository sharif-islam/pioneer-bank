const logBtn = document.getElementById("logBtn");
logBtn.addEventListener("click", function () {
  const logArea = document.getElementById("loginPart");
  logArea.style.display = "none";
  const transArea = document.getElementById("transferPart");
  transArea.style.display = "block";
});

const depositBtn = document.getElementById("depositButton");
depositBtn.addEventListener("click", function () {
  const depositValue = document.getElementById("depositAmount").value;
  var val = parseFloat(depositValue);
  const totDepositVal = document.getElementById("totalDeposit").innerText;
  const depositVal = parseFloat(totDepositVal);
  const totalDeposit = depositVal + val;
  document.getElementById("totalDeposit").innerText = totalDeposit;

  const totBalanceVal = document.getElementById("totalBalance").innerText;
  const balanceVal = parseFloat(totBalanceVal);
  const totalBalance = balanceVal + val;
  document.getElementById("totalBalance").innerText = totalBalance;
  document.getElementById("depositAmount").value = "";
});

const withdrawBtn = document.getElementById("withdrawButton");
withdrawBtn.addEventListener("click", function () {
  const withdrawValue = document.getElementById("withdrawAmount").value;
  var val = parseFloat(withdrawValue);
  const totWithdrawVal = document.getElementById("totalWithdraw").innerText;
  const withdrawVal = parseFloat(totWithdrawVal);
  const totalWithdraw = withdrawVal + val;
  document.getElementById("totalWithdraw").innerText = totalWithdraw;

  const totBalanceVal = document.getElementById("totalBalance").innerText;
  const balanceVal = parseFloat(totBalanceVal);
  const totalBalance = balanceVal - val;
  document.getElementById("totalBalance").innerText = totalBalance;
  document.getElementById("withdrawAmount").value = "";
});
