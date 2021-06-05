const imagesToLoad = document.querySelectorAll("[data-src]");
console.log(imagesToLoad);
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 20px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
    console.log(image);
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        console.log(items);
        items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }