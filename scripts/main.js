window.onload = function (e) {
  const v_reaction = document.getElementById("value_reaction");
  const v_memory   = document.getElementById("value_memory");
  const v_verbal   = document.getElementById("value_verbal");
  const v_visual   = document.getElementById("value_visual");

  fetch("./data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      v_reaction.innerHTML = data[0].score;
      v_memory.innerHTML   = data[1].score;
      v_verbal.innerHTML   = data[2].score;
      v_visual.innerHTML   = data[3].score;
    });
};
