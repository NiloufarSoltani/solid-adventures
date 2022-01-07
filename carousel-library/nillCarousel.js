function carousel(params) {
    let step = 0;
    let carousel = document.getElementsByClassName('carousel')[0];
    let items = document.querySelectorAll('.item');
    let itemsCount = items.length;
    let container = document.getElementById('container');

    if (params.blurryBackCover) {
        container.style.backgroundImage = `url(${items[step].children[0].getAttribute('src')})`;
    }

    let previous = function () {
        step > 0 ? step-- : step = itemsCount - 1;
        carousel.style.transform = `translateX(${-768 * step}px)`;
        if (params.blurryBackCover) {
            container.style.backgroundImage = `url(${items[step].children[0].getAttribute('src')})`;
        }
    }

    let next = function () {
        step < itemsCount - 1 ? step++ : step = 0;
        carousel.style.transform = `translateX(${-768 * step}px)`;
        if (params.blurryBackCover) {
            container.style.backgroundImage = `url(${items[step].children[0].getAttribute('src')})`;
        }
    }

    if (params.navigationButtons) {
        // Previous button
        let navigationButtonWrapper = document.createElement('div');
        navigationButtonWrapper.className = 'btn-group';

        let prevBtn = document.createElement('button');
        prevBtn.id = 'prev-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        navigationButtonWrapper.append(prevBtn);
        prevBtn.onclick = previous;

        // Next button
        let nextBtn = document.createElement('button');
        nextBtn.id = 'next-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = next;
        navigationButtonWrapper.append(nextBtn);

        container.append(navigationButtonWrapper);
    }

    if (params.arrowKeys) {
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'ArrowRight':
                    next();
                    break;
                case 'ArrowLeft':
                    previous();
                    break;
            }
        });
    }
}