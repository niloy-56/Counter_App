
let count = 0;
let count2 = 0;

const LIMIT = 108;

function update_count() {
  document.getElementById("count").textContent = count;
  document.getElementById("count2").textContent = count2;
}

function increment() {
  count++;

  if (count >= LIMIT) {
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
    count = LIMIT - 1;
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

  alert("Both counters saved successfully!");
}

function Load_from_save() {
  let savedCount = localStorage.getItem("count");
  let savedCount2 = localStorage.getItem("count2");

  if (savedCount !== null) {
    count = Number(savedCount);
  }

  if (savedCount2 !== null) {
    count2 = Number(savedCount2);
  }

  update_count();
}

update_count();
