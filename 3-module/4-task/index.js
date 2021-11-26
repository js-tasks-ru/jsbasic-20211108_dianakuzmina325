function showSalary(users, age) {
  let someUsers = users.filter(item => item["age"] <= age);
  let summaryInfo = someUsers.map(item => item["name"] + ", " + item["balance"]);
  let strSummaryInfo = summaryInfo.join("\n");
  return strSummaryInfo;
}
