document.addEventListener('DOMContentLoaded', function () {
    var filterButtons = document.querySelectorAll('.filter-btn');
    var projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var filter = this.getAttribute('data-filter');

            filterButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            projectItems.forEach(function (item) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
