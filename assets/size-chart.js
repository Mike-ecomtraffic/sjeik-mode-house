document.addEventListener('DOMContentLoaded', initSizeChart);
document.addEventListener('drawer:opened', initSizeChart);

function initSizeChart() {
  const containers = document.querySelectorAll('.size-chart-container');
  
  containers.forEach(container => {
    if (container.dataset.init) return;
    container.dataset.init = 'true';
    
    const buttons = container.querySelectorAll('.size-chart-btn');
    const unitTexts = container.querySelectorAll('.unit-text');
    const cmVals = container.querySelectorAll('.val-cm');
    const inchVals = container.querySelectorAll('.val-inch');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        const unit = this.dataset.unit;
        
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        unitTexts.forEach(t => t.textContent = unit.toUpperCase());
        
        if (unit === 'cm') {
          cmVals.forEach(v => v.style.display = '');
          inchVals.forEach(v => v.style.display = 'none');
        } else {
          cmVals.forEach(v => v.style.display = 'none');
          inchVals.forEach(v => v.style.display = '');
        }
      });
    });
  });
}