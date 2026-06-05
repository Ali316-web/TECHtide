document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product-card');
  const productsPerPage = 4;
  const paginationControls = document.getElementById('pagination-controls');
  let currentPage = 1;
  const totalPages = Math.ceil(products.length / productsPerPage);

  function showPage(page) {
    currentPage = page;
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {
      product.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    updatePagination();
  }

  function updatePagination() {
    paginationControls.innerHTML = '';

    // Previous button
    const prevLi = document.createElement('li');
    prevLi.className = 'page-item' + (currentPage === 1 ? ' disabled' : '');
    const prevLink = document.createElement('a');
    prevLink.className = 'page-link';
    prevLink.href = '#';
    prevLink.textContent = 'Previous';
    prevLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });
    prevLi.appendChild(prevLink);
    paginationControls.appendChild(prevLi);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.className = 'page-item' + (i === currentPage ? ' active' : '');
      const link = document.createElement('a');
      link.className = 'page-link';
      link.href = '#';
      link.textContent = i;
      link.addEventListener('click', function (e) {
        e.preventDefault();
        showPage(i);
      });
      li.appendChild(link);
      paginationControls.appendChild(li);
    }

    // Next button
    const nextLi = document.createElement('li');
    nextLi.className = 'page-item' + (currentPage === totalPages ? ' disabled' : '');
    const nextLink = document.createElement('a');
    nextLink.className = 'page-link';
    nextLink.href = '#';
    nextLink.textContent = 'Next';
    nextLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });
    nextLi.appendChild(nextLink);
    paginationControls.appendChild(nextLi);
  }

  // Initialize
  showPage(1);
});
