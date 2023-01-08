function choose(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

function lerp(value, target, percentage = 1, tolerance = 0.001) {
  let diff = Math.abs(value - target);
  if (diff <= tolerance) return target;
  return (value += (target - value) * percentage);
}

function switchCharacter(player, characters = []) {
  let new_character = "";
  let same_character_type = true;
  while (same_character_type) {
    new_character = choose(characters);
    let character_type = new_character.split("-")[1];
    if (character_type === player.prev_type) continue;
    same_character_type = false;
    player.prev_type = character_type;
  }
  player.setTexture(new_character);
  let w = player.texture.frames.__BASE.cutWidth;
  let h = player.texture.frames.__BASE.cutHeight;
  player.body.setSize(w, h);
  player.y -= h / 2;
}
