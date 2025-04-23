  <script>
    let menuItems = [];
    let order = [];

    fetch('data/restaurant_data.json')
      .then(res => res.json())
      .then(data => {
        menuItems = data.menu;
        displayMenu();
      });

    function displayMenu() {
      const menuDiv = document.getElementById('menuList');
      menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
          <span>${item.name} (${item.price} บาท)</span>
          <button onclick="addToOrder('${item.id}')">เพิ่ม</button>
        `;
        menuDiv.appendChild(itemDiv);
      });
    }
function loadPage(pageId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.classList.remove('active');
    if (section.id === pageId) {
      section.classList.add('active');
    }
  });
}
    function addToOrder(itemId) {
      const existing = order.find(o => o.id === itemId);
      if (existing) {
        existing.quantity++;
      } else {
        const menuItem = menuItems.find(m => m.id === itemId);
        order.push({ id: itemId, name: menuItem.name, price: menuItem.price, quantity: 1 });
      }
      updateOrderSummary();
    }

    function updateOrderSummary() {
      const summaryDiv = document.getElementById('orderSummary');
      summaryDiv.innerHTML = '';
      order.forEach(item => {
        const itemLine = document.createElement('div');
        itemLine.textContent = `${item.name} x ${item.quantity} = ${item.quantity * item.price} บาท`;
        summaryDiv.appendChild(itemLine);
      });
    }

    async function submitOrder() {
      const now = new Date();
      const transaction = {
        table: 'A1',
        timestamp: now.toISOString(),
        order
      };
  </script>
