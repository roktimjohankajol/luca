
new Splide("#first-slider", {
   start: 1,
     perPage: 3.5,
     perMove: 1,
     gap: 20,
     type: "loop",
     drag: "free",
     snap: false,
     interval: 3000,
     arrows: true,
     pagination: true,
     rewind: true,
     rewindByDrag: true,
     lazyLoad: true,
     breakpoints: {
      640: {
        perPage: 1.5,
  
      },
      767: {
        perPage: 2.5,
    
      },
      1024: {
        perPage: 2.5,
       
      },
    },
 }).mount();

 new Splide("#second-slider", {
   start: 1,
     perPage: 4.5,
     perMove: 1,
     gap: 20,
     type: "loop",
     drag: "free",
     snap: false,
     interval: 3000,
     arrows: true,
     pagination: true,
     rewind: true,
     rewindByDrag: true,
     lazyLoad: true,
     breakpoints: {
      640: {
        perPage: 1.5,
  
      },
      767: {
        perPage: 2.5,
    
      },
      1024: {
        perPage: 2.5,
       
      },
    },
 }).mount();



