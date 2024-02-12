document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('celsiusInput').addEventListener('input', function() {
      const celsius = parseFloat(this.value);
      const fahrenheit = celsius * 9/5 + 32;
      document.getElementById('fahrenheitOutput').textContent = fahrenheit + " °F";
    });
  });