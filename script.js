function forimage() {
    var a = document.getElementById('imgInput').value;
    document.getElementById('image').src = a;
}

function forheight() {
    var a = document.getElementById('hInput').value;
    document.getElementById('image').style.height = a;
}

function forwidth() {
    var a = document.getElementById('wInput').value;
    document.getElementById('image').style.width = a;
}

function clearInputs() {
    // Reset the form inputs
    document.getElementById('inputss').reset();

    // Optionally reset the image and its size
    var img = document.getElementById('image');
    img.src = "";         // Or you can set to default image URL
    img.style.height = "";
    img.style.width = "";
}

function blackhole() {
    document.getElementById('text').style.marginLeft='100px';
    document.getElementById('text').style.color='red';
    document.getElementById('text').style.fontFamily="arial";
    document.getElementById('text').textContent = "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape from it. It forms when a massive star collapses under its own gravity, compressing its mass into an incredibly small area called a singularity, surrounded by an event horizon—the point of no return. Black holes can vary in size, from small ones formed by dying stars to supermassive ones found at the centers of galaxies. Despite being invisible, black holes can be detected by their effect on nearby stars and matter, often pulling in gas and dust and emitting powerful X-rays as this material heats up while spiraling inward.";
}

function earth() {
    document.getElementById('text').style.marginLeft='100px';
    document.getElementById('text').style.color='blue';
    document.getElementById('text').style.fontFamily="arial";
    document.getElementById('text').textContent = "Earth is the third planet from the Sun and the only known place in the universe that supports life. It has a diverse environment with vast oceans, continents, and an atmosphere rich in oxygen and nitrogen, which sustains a wide variety of ecosystems. About 71% of Earth's surface is covered by water, making it unique among the planets in our solar system. Earth has a molten core, a solid crust, and a dynamic climate system that supports weather patterns and seasons. Its magnetic field protects it from harmful solar radiation, and the presence of a moon helps stabilize its rotation and tides.Earth is the third planet from the Sun and the only known place in the universe that supports life. It has a diverse environment with vast oceans, continents, and an atmosphere rich in oxygen and nitrogen, which sustains a wide variety of ecosystems. About 71% of Earth's surface is covered by water, making it unique among the planets in our solar system. Earth has a molten core, a solid crust, and a dynamic climate system that supports weather patterns and seasons. Its magnetic field protects it from harmful solar radiation, and the presence of a moon helps stabilize its rotation and tides.";
}

function satelight() {
    document.getElementById('text').style.marginLeft='100px';
    document.getElementById('text').style.color='white';
    document.getElementById('text').style.fontFamily="arial";
    document.getElementById('text').textContent = " A satellite is an object that orbits around a larger body in space, typically a planet. Satellites can be natural, like the Moon orbiting Earth, or artificial, which are man-made objects launched into space for various purposes. Artificial satellites are used for communication, weather forecasting, navigation (like GPS), scientific research, and military applications. They travel in different orbits—such as low Earth orbit (LEO) or geostationary orbit—depending on their function. Satellites play a crucial role in modern life by enabling global connectivity, monitoring environmental changes, and helping scientists study space and Earth from above.";
}

function rednbl(){
    document.getElementById('nbl-img').src='https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-3_1562-748.jpg?ga=GA1.1.424337017.1735465443&semt=ais_hybrid&w=740';
}

function bluenbl(){
    document.getElementById('nbl-img').src='https://img.freepik.com/free-photo/fictional-planet-with-colourful-night-sky-stars-nebula_1048-7926.jpg?ga=GA1.1.424337017.1735465443&semt=ais_hybrid&w=740';
}

function blacknbl(){
    document.getElementById('nbl-img').src='https://img.freepik.com/free-photo/outer-space-background_53876-88651.jpg?ga=GA1.1.424337017.1735465443&semt=ais_hybrid&w=740';
}