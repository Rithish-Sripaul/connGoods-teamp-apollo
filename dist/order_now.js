p11 = document.querySelector(".p11");
p12 = document.querySelector(".p12");
p13 = document.querySelector(".p13");
p14 = document.querySelector(".p14");
p15 = document.querySelector(".p15");
p16 = document.querySelector(".p16");

p21 = document.querySelector(".p21");
p22 = document.querySelector(".p22");
p23 = document.querySelector(".p23");
p24 = document.querySelector(".p24");
p25 = document.querySelector(".p25");
p26 = document.querySelector(".p26");
company_name = document.querySelector("#dropdownMenuButton1");
document.querySelector(".nestle").addEventListener("click", () => {
  company_name.textContent = "Nestle";
  p11.textContent = "13";
  p12.textContent = "KitKat";
  p13.textContent = "Snacks";
  p14.textContent = "20";
  p15.textContent = "1500";
  p16.textContent = "7446.9";

  p21.textContent = "29";
  p22.textContent = "Nestle Gold Coffee";
  p23.textContent = "Ingredient";
  p24.textContent = "135";
  p25.textContent = "750";
  p26.textContent = "25133.9";
});

document.querySelector(".itc").addEventListener("click", () => {
  company_name.textContent = "ITC";
  p11.textContent = "67";
  p12.textContent = "Classmate Notebooks";
  p13.textContent = "Stationery";
  p14.textContent = "80";
  p15.textContent = "1000";
  p16.textContent = "19800";

  p21.textContent = "97";
  p22.textContent = "Biriyani Masala";
  p23.textContent = "Ingredient";
  p24.textContent = "65";
  p25.textContent = "1200";
  p26.textContent = "19560";
});
