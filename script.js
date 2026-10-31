function openScenario(evt, scenarioId) {
    // Hide all scenario sections
    const sections = document.querySelectorAll('.scenario-section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove active state from all tab buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    // Display selected scenario section and set active button
    document.getElementById(scenarioId).classList.add('active');
    evt.currentTarget.classList.add('active');
}