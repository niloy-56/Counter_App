let count = 0;
let count2 = 0;

function update_count() {
  document.getElementById("count").textContent = count;
  document.getElementById("count2").textContent = count2;
}

function increment() {
  count++;

  if (count === 108) {
    count = 0;
    count2++;
  }

  update_count();
}

function Decrement() {
  if (count > 0) {
    count--;
  } else if (count2 > 0) {
    count2--;
    count = 107;
  }

  update_count();
}

function Reset() {
  count = 0;
  count2 = 0;
  update_count();
}

function Save() {
  localStorage.setItem("count", count);
  localStorage.setItem("count2", count2);
}

function Load_from_save() {
  const savedCount = localStorage.getItem("count");
  const savedCount2 = localStorage.getItem("count2");

  if (savedCount !== null) count = Number(savedCount);
  if (savedCount2 !== null) count2 = Number(savedCount2);

  update_count();
}

Load_from_save();
