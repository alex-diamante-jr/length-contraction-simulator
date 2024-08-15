function calculateContraction() {
    const speed = parseFloat(document.getElementById('speed').value);
    const originalLength = parseFloat(document.getElementById('original-length').value);
    
    // Calculate the Lorentz factor
    const lorentzFactor = Math.sqrt(1 - Math.pow(speed, 2));
    
    // Calculate the contracted length
    const contractedLength = originalLength * lorentzFactor;
    
    // Display the result
    document.getElementById('contracted-length').textContent = contractedLength.toFixed(2);

    // Update the visualization
    const originalObject = document.getElementById('original-object');
    const contractedObject = document.getElementById('contracted-object');
    
    // Set the width based on the real-life scale (1 meter = 2 millimeters)
    const scale = 2; // 1 meter = 2 millimeters
    originalObject.style.width = `${originalLength * scale}px`;
    contractedObject.style.width = `${contractedLength * scale}px`;
}
